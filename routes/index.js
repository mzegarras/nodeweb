var express = require('express');
var router = express.Router();

/* GET home page. */

const MY_VARIABLE = process.env.MY_VARIABLE


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',myVar:MY_VARIABLE});
});

module.exports = router;
