const express = require('express');
const router = express.Router();
const conString = process.env.ADD_STRING;

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
