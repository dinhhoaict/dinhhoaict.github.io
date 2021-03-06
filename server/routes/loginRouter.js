var express = require('express');
var router = express.Router();
var Request = require("../middlewares/Request");
var DB = require("../ultis/MysqlPool");
var md5 = require("md5");


async function _random_uid () {
    var str = `${(new Date()).toDateString()}${Math.random()}`;
    console.log()
    var md5Str = md5(str);
    return md5Str;
};


async function _get_user(username, password) {
    var query = `SELECT * FROM user.user WHERE name = "${username}" AND password = "${password}"`;
    var result;
    await DB.executeReturn(query, null)
        .then(function (rows) {
            result = {err_code: 0,msg: rows};
        })
        .catch(function (err) {
            console.log("err: ", err);
            
            result = {err_code: 1,msg: err};
        });
    return result;
}

async function _check_params(req, res, next){
    console.dir(req.body);
    try {
        if(req.body.name == "")
        throw new Error("username/password is invalid");
    if(req.body.pwd == "" || req.body.pwd == undefined){
        throw new Error("username/password is invalid");
    }
    next();
    } catch (error) {
        next(error);
    }
}

async function _login(req, res, next) {
    try {
        var request = new Request();
        console.dir(req.body);
        var username = request.get_argument(req.body, "name", "_.@");
        var pwd = request.get_argument(req.body, "pwd", "_.@");
        var result = await _get_user(username, pwd);
        if(result.err_code === 1){
            console.log("err");
            res.json({
                err_code : result.err_code,
                msg: result.msg
            });
            return;
        }
        var id = await _random_uid();
        // res.write({row : result, md5: id});
        res.json({row : result, md5: id});
    } catch (error) {
        next(new Error(error));
    }
}


/**
 * url : http://localhost:8686/login?id=hoaibadinh&cookie=
 * @method POST
 * @param {string} id user id
 * @param {}
 */
router.post('/',_check_params, _login);



module.exports = router;