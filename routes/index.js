var express = require('express');
var router = express.Router();
const {Team} = require('../models');

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

router.get('/EventAdminMenu', function(req, res, next) {
  res.render('EventAdminMenu', { });
});

router.get('/ManageMatchaps', function(req, res, next) {
  res.render('ManageMatchaps', { });
});

router.get('/AddNewMatchap', function(req, res, next) {
  res.render('AddNewMatchap', { });
});


router.get('/teamsMain',   async function(req, res, next) {
  let teams = await Team.findAll();
  console.log(teams);
  res.render('teamsMain', { });
});

router.get('/teamDetail',  function(req, res, next) {

  res.render('teamDetail', { });
});






module.exports = router;
