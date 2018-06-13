var express = require('express');
var router = express.Router();
var Request = require("../middlewares/Request");
var DB = require("../ultis/MysqlPool");


router.get('/', function (req, res, next) {
	try {
		console.log(" ", require('util').inspect(req.params), "query : ", require('util').inspect(req.query));
		var request = new Request();
        var user = request.get_argument(req.query, "id", "_.@");
        DB.query("select * from user.user", function(err, row){
            if(err){
                throw err;
            }else{
                res.json(row);
            }
        });
	} catch (err) {
		res.json({
			"error": err.message
		})
	}


});

module.exports = router;