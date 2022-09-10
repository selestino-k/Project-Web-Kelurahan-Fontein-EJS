var express = require('express');
var router = express.Router();

/* GET Fasilitas page. */
router.get('/data', function(req, res, next) {
  res.render('data');
});

module.exports = router;
