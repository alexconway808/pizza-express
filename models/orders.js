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
  var newOrder = new Order(req.body);

  newOrder.save(function (err){
    if (err) {
      console.log("error @ createOrder", err);
      return err;
    }
    res.json(newOrder);
  });
};

orders.deleteOrder = function(orderId, res) {
  Order.findById(orderId, function (err, order){
    if (err){
      console.log("error deleting Order by ID", err);
      return err;
    }
    res.send(200);
  });
};


// abandon hope, ye who hits this route more than once
orders.generateOrders = function (req, res) {
  var newOrder = new Order(placeOrder.generate());

  newOrder.save();
};

var intervalId;

orders.autoGenerateOrders = function (req, res){
  intervalId = setInterval(function(){
    var newOrder = new Order(placeOrder.generate());

    newOrder.save();
  }, 5000);
};

orders.killAutoGenerateOrders = function (req, res){
  clearInterval(intervalId)
};

module.exports = orders;