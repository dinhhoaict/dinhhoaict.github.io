var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"header": 1, "msg": "test"});
});

router.get('/username/:username/age/:age', function(req, res, next) {
  var username = req.params["username"];
  var request = {"params": req.params , "query": req.query, "param": req.param};
  res.json(request);
});

module.exports = router;
