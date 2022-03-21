var createError = require('http-errors');
var express = require('express');
var cors=require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
require('./db/db.js')

//Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var surveysRouter = require ('./routes/survey');
var imagesRouter = require('./routes/image');
var customersRouter = require ('./routes/customer');
var customersPointRouter = require ('./routes/customer_point');
const answersRouter = require('./routes/answer');

var app = express();

app.use(cors());
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
app.use('/surveys', surveysRouter);
app.use('/images', imagesRouter);
app.use('/customers',customersRouter);
app.use('/customers_point',customersPointRouter);
app.use('/answers',answersRouter);


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
