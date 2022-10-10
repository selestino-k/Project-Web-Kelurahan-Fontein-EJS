var express = require('express');
var router = express.Router();

/* GET Fasilitas page. */
router.get('/dataumkm', function(req, res, next) {
  res.render('data');
});
router.get('/datamikro', function(req, res, next) {
  res.render('datamikro');
});
router.get('/datakecil', function(req, res, next) {
  res.render('datakecil');
});
router.get('/datamenengah', function(req, res, next) {
  res.render('datamenengah');
});

module.exports = router;
