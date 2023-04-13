var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
//db.once("open", fucntion(){console.log()});

var kabab = require('./models/kabab')

async function recreateDB()
{
  await kabab.deleteMany();

  let instance1 = new kabab({kabab_style:"indian", kabab_length:5, kabab_lethality:"Safe"});
  let instance2 = new kabab({kabab_style:"american", kabab_length:10, kabab_lethality:"Good"});
  let instance3 = new kabab({kabab_style:"european", kabab_length:3, kabab_lethality:"Deadly"});
  
  instance1.save().then(doc=>{console.log("First Object Saved")});
  instance2.save().then(doc=>{console.log("Second Object Saved")});
  instance3.save().then(doc=>{console.log("Third Object Saved")});
}

let reseed = true;
if(reseed) 
{
  recreateDB();
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kababRouter = require('./routes/kabab');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kabab', kababRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
