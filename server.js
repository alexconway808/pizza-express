var express = require('express');
var router = express.Router();
var path = require('path');
var logger = require('morgan');
var jade = require('jade');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var index = require('./routes/index');
var orders = require('./routes/orders');
var generateOrders = require('./routes/generateOrders');

var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

// method definitions
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(methodOverride('_method'));

// set public directory
server.use(express.static(path.join(__dirname, 'public')));

// server.use(function(req, res, next) {
//   console.log('%s %s %s', req.method, req.status, req.path);
//   next();
// });
server.use(logger('dev'));
server.use('/', index);
server.use('/orders', orders);
server.use('/generate', generateOrders);

server.listen(3000, console.log("pizza server enabled!"));
