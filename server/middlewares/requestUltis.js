const ASCII_LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

exports.get_argument = function (req, key, special) {
    var value = req[key];
    if (value === "") {
        return new Error("Bad argument");
    }
    return value;
};
exports.get_argument2 = function (req, key, special) {
    var value = req[key];
    if (value === "") {
        return new Error("Bad argument");
    }
    return value;
};

exports.get_argument3 = function (req, key, special) {
    var value = req[key];
    if (value === "") {
        return new Error("Bad argument");
    }
    return value;
};