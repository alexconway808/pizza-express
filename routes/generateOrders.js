var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// GenerateOrders Controller

// turn auto generation of orders on
router.route('/auto')
  .get(function (req, res){
    database.autoGenerateOrders();
    res.send("enabling auto generation of orders");
  });

// turn auto generation of orders off
router.route('/off')
  .get(function (req, res){
    database.killAutoGenerateOrders();
    res.send("killing auto generation of orders");
  });

router.route('/:orderAmount')
  .get(function (req, res){
    var orderAmount = req.param('orderAmount');
    for (var i = 0; i < orderAmount; i++) {
      database.generateOrders();
    }

    res.send("Generating your mock data");

  });

module.exports = router;
