var express = require('express');
var router = express.Router();
var md5 = require("md5");
var Request = require("../middlewares/Request");
var DB = require("../ultis/MysqlPool");

async function _random_uid () {
    var str = `${(new Date()).toDateString()}${Math.random()}`;
    
	var md5Str = md5(str);
	console.log(md5Str);
    return md5Str;
}

async function _check_params(req, res, next){
    console.dir(req.body);
    try {
        if(req.body.name == "")
        throw new Error("username/password is invalid");
    if(req.body.pwd == "" || req.body.pwd == undefined){
        throw new Error("username/password is invalid");
	}
	var name = req.body.name;
	var query = `SELECT * FROM users.user WHERE username = "${name}"`;
	var result = await DB.executeReturn(query, null);
	if(result.err_code == 0 && result.data.length > 0){
		throw new Error("user already exists");
	}
    next();
    } catch (error) {
        next(error);
    }
}


/* GET users listing. */
router.get('/', function (req, res, next) {
	var str = {
		"header": 2,
		"msg": "test aa"
	};
	res.write(JSON.stringify(str));
	res.send();
});

/**
 *  @example: http://127.0.0.1:8686/user/register
 * 	@method POST
 * 	@param user
 */
router.post('/register',
	_check_params, 
	async function(req, res, next){
		var name = req.body.name;
		var pwd = req.body.pwd;
		res.write(JSON.stringify({name : name, pass: pwd}));
		res.send();

});

module.exports = router;