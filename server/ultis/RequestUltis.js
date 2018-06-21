"use strict";

var log4js = require('log4js');
const logger = log4js.getLogger("api");
var uuidv1 = require("uuid/v1");
var onFinished = require('on-finished');
var onHeaders = require('on-headers');

log4js.configure({
    appenders: {
        everything: { type: 'dateFile', filename: 'E:\\server.log', pattern: '.yyyy-MM-dd-hh', compress: true },
        error: { type: 'logLevelFilter', filename: 'E:\\error.log' },
        console: { type: 'console' }

    },
    categories: {
        api: { appenders: ['everything', 'console'], level: 'debug' },
        default: { appenders: ['everything', 'console'], level: 'debug' }
    }
});

logger.debug("Start server");
/**
 * Time between resquest and response in miliseconds.
 * @param {Request} res
 * @param {Response} req
 * @returns {Integer} 
 */
function _response_time(req, res, digits) {
    if (!req._startAt || !res._startAt) {
        // missing request and/or response start time
        logger.debug(req._startAt);
        logger.debug(res._startAt);
        return 0;
    }

    // calculate diff
    var ms = (res._startAt[0] - req._startAt[0]) * 1e3 +
        (res._startAt[1] - req._startAt[1]) * 1e-6;

    // return truncated value
    return ms.toFixed(digits === undefined ? 3 : digits);
};

function _status(req, res) {
    return headersSent(res) ? String(res.statusCode) : undefined;
}

function headersSent(res) {
    return typeof res.headersSent !== 'boolean' ? Boolean(res._header) : res.headersSent;
}


function recordStartTime() {
    this._startAt = process.hrtime()
    this._startTime = new Date()
}

function logRequest() {
    this._startAt = process.hrtime()
}

function _getip(req) {
    return req.ip ||
        req._remoteAddress ||
        (req.connection && req.connection.remoteAddress) ||
        undefined
}

module.exports.overrideForLogger = function (req, res, next) {
    let oldWrite = res.write,
        oldEnd = res.end;
    let oldJson = res.json;
    let oldSend = res.send;
    res._startAt = undefined;
    res._startTime = undefined;
    req._remoteAddress = _getip(req);
    var chunks = [];
    recordStartTime.call(req);
    res.write = function (chunk) {
        chunks.push(chunk);
        logger.error("write method");
        oldWrite.apply(res, arguments);
    };

    res.send = function (chunk) {
        let resId = uuidv1();
        req.resId = resId;

        let logReq = [
            req.resId,
            "REQ: ",
            req._remoteAddress,
            req.method,
            _status(req, res),
            req.originalUrl || req.url,
            "Body: ",
            req.body !== {} ? JSON.stringify(req.body): "",
            _response_time(req, res, 3),
            "ms",

        ].join(" ");
        logger.info(logReq);
        // logger.error("pre-send");
        oldSend.apply(res, arguments);
        // logger.error("after-send");
        chunks.push(chunk);
        recordStartTime.call(res);
        let logRes = [
            req.resId, "RES: ",
            chunks.join(""),
           
        ].join(" ");
        logger.info(logRes);
    };

    res.end = function (chunk) {
        // logger.error("pre-end");
        oldEnd.apply(res, arguments);
        // logger.error("after-end");



    };

    next();
}