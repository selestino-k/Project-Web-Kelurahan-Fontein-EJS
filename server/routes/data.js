var express = require('express');
var router = express.Router();

const userController = require('../controller/datacontroller');

/* GET Fasilitas page. */
router.get('/dataumkm', userController.view_umkm)
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
