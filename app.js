var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('express-favicon');
var bodyparser = require('body-parser');
var mySql = require('mysql');

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var profileRouter = require('./server/routes/profile');
var strukturRouter = require('./server/routes/struktur');
var dataRouter = require('./server/routes/data');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || "3000";

app.use(favicon(path.join(__dirname,'public','images','489px-LOGO_KOTA_KUPANG (1 300x300).png')));

app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

// Parse application/json
app.use(bodyparser.json());
  

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/users', usersRouter);
app.use('/profile', profileRouter);
app.use('/struktur',strukturRouter)
app.use('/data',dataRouter);





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

app.listen(port, () => console.log(`listening on ${port}`));  