var express = require('express');
var router = express.Router();
var test = require('../src/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  app.render(test, { title: 'Express' });
});

module.exports = router;
