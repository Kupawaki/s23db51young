var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query1 = req.query

  console.log(`rows ${query1.rows}`)
  console.log(`cols ${query1.cols}`)

  res.render('board', { title: 'Board Display', query:query1});
});

module.exports = router;
