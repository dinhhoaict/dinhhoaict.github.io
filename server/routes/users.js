var express = require('express');
var router = express.Router();
var Request = require("../middlewares/Request");


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({
		"header": 1,
		"msg": "test"
	});
});

router.get('/:username/age/:age', function (req, res, next) {
	var username = req.params["username"];
	res.json(request);
});

module.exports = router;