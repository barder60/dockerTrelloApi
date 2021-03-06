var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var removeTask = require('./routes/removeTask');
var showAllTasks = require('./routes/showAllTasks');
var addTasks = require('./routes/addTasks')
var mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const PORT = process.env.PORT || 9000

var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json())
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/removeTask', removeTask);
app.use('/showAllTasks', showAllTasks);
app.use('/addTasks', addTasks);

const createApp = async (mongoUri) => {
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on('connected', () => log('Connected to MongoDB'))
  mongoose.connection.on('error', (err) => log('MongoDB error', err))
  mongoose.connection.on('disconnected', () => log('MongoDB disconnected'))

  return mongoose.connection
}

const start = async () => {
  // Dans l'idée on devrait utilisé les variable venant du docker-compose
  await createApp("mongodb://mongo:27017/trello")
}

start()



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
