var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res){
    database.getAllPizzaOrders(req, res);
  })
  .post(function (req, res){
    // console.log(req.body);
    database.createOrder(req, res);
  });

router.route('/:orderId')
  .delete(function (req, res){
    var orderId = req.param('orderId')
    database.deleteOrder(orderId, res);
  });

module.exports = router;
