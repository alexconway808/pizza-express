var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var placeOrder = require('./../lib/generateOrder');
var orders = {};

// mongodb URL here
mongoose.connect('mongodb://user1:1234@ds063809.mongolab.com:63809/pizzaexpress');

var OrdersSchema = Schema({
  size: String,
  toppings: {
    meats: Array,
    veggies: Array
  }
});

var Order = mongoose.model('Order', OrdersSchema);

orders.getAllPizzaOrders = function(req, res){
  Order.find({}, function (err, orders) {
    if (err) {
      console.log("error getting all pizzas", err); return;
    }
    res.send(orders);
  });
};

orders.createOrder = function(req, res){
  var newOrder = new Order({
    size: req.param('sizes'),
    toppings: {
      meats: req.param('meats'),
      veggies: req.param('veggies')
    }
  });

  newOrder.save(function (err){
    if (err) {
      console.log("error@ createOrder", err);
      return err;
    }
    res.json(newOrder);
  });
};


// abandon hope, ye who hits this route more than once
orders.generateOrders = function (req, res) {
  var newOrder = new Order(placeOrder.generate());

  newOrder.save();
};

module.exports = orders;