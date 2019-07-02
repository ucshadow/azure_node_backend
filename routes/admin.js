const express = require('express');
const router = express.Router();
const conString = process.env.ADD_STRING;

router.get('/', function (req, res, next) {
  res.render('admin', {title: 'Express'});
});

router.post('/', function (req, res, next) {
  res.render(req.body.password === conString ? 'add_data' : 'not_allowed', {title: 'Express'});
});


module.exports = router;