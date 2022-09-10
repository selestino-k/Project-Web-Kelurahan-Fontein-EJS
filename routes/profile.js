var express = require('express');
var router = express.Router();

/* GET Fasilitas page. */
router.get('/profilekel', function(req, res, next) {
  res.render('profile');
});

router.get('/peta', function(req, res, next) {
    res.render('peta');
});

router.get('/fasilitas', function(req, res, next) {
    res.render('fasilitas');
 });

module.exports = router;