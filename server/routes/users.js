var express = require('express');
var router = express.Router();
var Request = require("../middlewares/Request");


/* GET users listing. */
router.get('/', function (req, res, next) {
	var str = {
		"header": 2,
		"msg": "test aa"
	};
	res.write(JSON.stringify(str));
	res.write(JSON.stringify(str));
	res.write(JSON.stringify(str));
	res.send();
});

router.get('/:username/age/:age', function (req, res, next) {
	var username = req.params["username"];
	res.json(req);
});

module.exports = router;