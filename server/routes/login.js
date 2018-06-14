var express = require('express');
var router = express.Router();
var Request = require("../middlewares/Request");
var DB = require("../ultis/MysqlPool");



/**
 * url : http://localhost:8686/login?id=hoaibadinh&cookie=
 * @method POST
 * @param {string} id user id
 * @param {}
 */
router.post('/', function (req, res, next) {
	try {
		console.log(" ", require('util').inspect(req.params), "query : ", require('util').inspect(req.body));
        var request = new Request();
        
        var username = request.get_argument(req.body, "name", "_.@");
        var pwd = request.get_argument(req.body, "pwd", "_.@");
        var query = `select * from user.user WHERE name = "${username}" AND password = "${pwd}"`;
        DB.query(query, function(err, rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
	} catch (err) {
		res.json({
			"error": err.message
		})
	}


});

module.exports = router;