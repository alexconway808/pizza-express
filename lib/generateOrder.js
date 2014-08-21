module.exports = {
  sizes: [
    "Large",
    "Medium",
    "Small"
  ],
  meats: [
    "Pepperoni",
    "Ham",
    "Beef Topping",
    "Italian Sausage",
    "Pork Topping",
    "Grilled Chicken",
    "Bacon"
  ],
  veggies: [
    "Spinach",
    "Green Peppers",
    "Red Onions",
    "Mushrooms",
    "Black Olives",
    "Tomatoes",
    "Pineapple",
    "Jalapenos",
    "Garlic"
  ],

  generate: function(){
    var randomSize = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    var randomTotalMeats = Math.floor(Math.random() * this.meats.length) + 1;
    var randomTotalVeggies = Math.floor(Math.random() * this.veggies.length) + 1;

    var order = {};
    order.size = randomSize;
    order.toppings = {};
    order.toppings.meats = [];
    order.toppings.veggies = [];

    // build meats array
    for (var i = 0; i < randomTotalMeats; i++) {
      var randomNumber = Math.floor(Math.random() * this.meats.length);
      var newMeat = this.meats[randomNumber];
      order.toppings.meats.push(newMeat);
    }

    // build veggies array
    for (var i = 0; i < randomTotalVeggies; i++) {
      var randomNumber = Math.floor(Math.random() * this.veggies.length);
      var newVeggie = this.veggies[randomNumber];
      // console.log(newVeggie, randomNumber);
      order.toppings.veggies.push(newVeggie);
    }

    return order;
  }
}