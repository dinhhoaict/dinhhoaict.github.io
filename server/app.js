var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var helmet = require("helmet");
var log4js = require('log4js');
log4js.configure({
	appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
	categories: { default: { appenders: ['cheese'], level: 'error' } }
  });
  
const logger = log4js.getLogger('cheese');
logger.level = 'debug';
logger.debug("Some debug messages");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/loginRouter');
require("dotenv").config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(cookieParser());

app.use(helmet());
// app.use(logger(function (tokens, req, res) {
// 	// console.dir(res);
// 	return [
// 		tokens.date(req, res),
// 		tokens.method(req, res),
// 		tokens.url(req, res),
// 		JSON.stringify(req.body),
// 		tokens.status(req, res),
// 		tokens.res(req, res, 'content-length'), '-',
// 		tokens['response-time'](req, res), 'ms'
// 		// "\nRESPONSE: ",
// 		// res

// 	].join(' ')
// }));


function logResponseBody(req, res, next) {
	var oldWrite = res.write,
		oldEnd = res.end;

	var chunks = [];

	res.write = function (chunk) {
		chunks.push(chunk);
		oldWrite.apply(res, arguments);
	};

	res.end = function (chunk) {
		if (chunk)
			chunks.push(chunk);
		var body = Buffer.concat(chunks).toString('utf8');
		oldEnd.apply(res, arguments);
		var logReq = [
			new Date().toUTCString(),
			req.method,
			req.path,
			JSON.stringify(req.body),
		].join(' ');
		logger.debug(logReq);
		logger.debug(req.path, body);
	};

	next();
}

app.use(logResponseBody);

app.use(express.static(path.join(__dirname, 'public')));


// Routing 
app.disable('x-powered-by');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	var code = err.name;
	if (err.name == "Error") {
		code = 1;
	}
	res.json({
		err_code: code,
		msg: err.message
	});
});

module.exports = app;