var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var helmet = require("helmet");


var RequestUltis = require("./ultis/RequestUltis");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/loginRouter');
require("dotenv").config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('view cache');
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(cookieParser());
app.use(helmet());



app.use(RequestUltis.overrideForLogger);

app.use(express.static(path.join(__dirname, 'public')));


// Routing 
app.disable('x-powered-by');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	var code = err.name;
	if (err.name == "Error") {
		code = 1;
	}
	res.json({
		err_code: code,
		msg: err.message
	});
});

module.exports = app;