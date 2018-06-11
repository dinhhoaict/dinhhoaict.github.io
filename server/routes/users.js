var express = require('express');
var router = express.Router();
var requestUltis = require("../middlewares/requestUltis");
var validator = requestUltis();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.json({
		"header": 1,
		"msg": "test"
	});
});

router.get('/login', function (req, res, next) {
	var user = validator.get_argument(req.query, id, "_.@");
	res.json({"user": user});

});

router.get('/:username/age/:age', function (req, res, next) {
	var username = req.params["username"];
	res.json(request);
});

module.exports = router;