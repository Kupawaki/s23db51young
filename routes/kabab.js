//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('kabab', { title: 'Search Results Kabab' });
//});

//module.exports = router;



var express = require('express');
const kabab_controlers= require('../controllers/kabab');
var router = express.Router();

/* GET costumes */
router.get('/', kabab_controlers.kabab_view_all_Page );
module.exports = router;

