var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// var db=require('/umkm.sql');
// // another routes also appear here
// // this script to fetch data from MySQL databse table
// router.get('/data', function(req, res, next) {
//     var sql='SELECT * FROM users';
//     db.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('user-list', { title: 'User List', userData: data});
//   });
// });
// module.exports = router;
