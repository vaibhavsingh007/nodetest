var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'This sample is built using Express (with Jade) on Node.js!' });
});

module.exports = router;
