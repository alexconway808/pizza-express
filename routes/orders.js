var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res) {
    database.getAllPizzaOrders(req, res);
  })
  .post(function (req, res) {
    database.createOrder(req, res);
  })
  .delete(function (req, res) {
    res.send("Fucking deleting orders");
  });

module.exports = router;
