"use strict";
function TestClass(b){
    this.b = b;
    this.point = "point";
}

TestClass.prototype.get_argument = function get_argument(req, key, specical) {
    var value = req[key];
    if (value === "") {
        throw new Error("Bad argument");
    }
    return value + this.point + this.b;
};

module.exports = TestClass;