var express = require('express');
var router = express.Router();
var requestUltis = require("../middlewares/requestUltis");
var TestClass = require("../middlewares/testClass");


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({
		"header": 1,
		"msg": "test"
	});
});

router.get('/login', function (req, res, next) {
	try {
		console.log(" ", require('util').inspect(req.params), "query : ", require('util').inspect(req.query));
		var testClass = new TestClass("dkm javascript");
		var user = testClass.get_argument(req.query, "id", "_.@");
		res.json({
			"user": user
		});
	} catch (err) {
		res.json({
			"error": err.message
		})
	}


});

router.get('/:username/age/:age', function (req, res, next) {
	var username = req.params["username"];
	res.json(request);
});

module.exports = router;