var express = require('express');
var router = express.Router();

/* GET Fasilitas page. */
router.get('/strukturkel', function(req, res, next) {
  res.render('struktur');
});

router.get('/visimisi', function(req, res, next) {
    res.render('visimisi');
  });

module.exports = router;