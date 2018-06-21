var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.json({ err_code: 0, msg: "express js" });
	// res.render('index', {
	//     title: "EJS example",
	// 	header: "Some users",
	// 	body: "Ejs example"
	// });
});

module.exports = router;
