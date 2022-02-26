var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { });
});

router.get('/visitorMenu', function(req, res, next) {
  res.render('visitorMenu', { });
});
router.get('/admin/admina', function(req, res, next) {
  res.render('admina', { });
});


module.exports = router;
