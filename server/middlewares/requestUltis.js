
const ASCII_LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

function get_argument(req, key, special) {
    var value = req[key];
    if (value == null) {
        return new Error("Bad argument");
    }
    return value;

};


module.exports = get_argument;