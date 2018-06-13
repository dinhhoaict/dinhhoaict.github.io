"use strict";

module.exports = Request;

/**
 *@constructor
 *
 * @public
 */
function Request(){
}


/**
 *
 *
 * @param { * } req Request's params or request's query
 * @param {String} key Key for get value
 * @param {String} specical Defined special key for exception
 * @returns {String} value of key, throw Exception Bad argument if value is null or empty
 * @throws { Error } Error when bad argument or found other digist
 */
Request.prototype.get_argument = function(req, key, specical) {
    var value = req[key];
    if (value === "") {
        throw new Error("Bad argument");
    }
    return value;
};


Request.prototype.check_email = function(email){
    
}