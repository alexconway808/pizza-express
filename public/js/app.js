$(document).ready(function(){

$.ajax("/orders", {
  method: "GET",
  success: function(data){
    //do stuff with data
    for (var i = 0; i < data.length; i += 1){
    //console.log(data[i].toppings);
    var sizeOfPizza = data[i].size;
    var typeOfMeat = data[i].toppings.meats;
    var typeOfVeggies = data[i].toppings.veggies;
    var pizza = sizeOfPizza + typeOfMeat + typeOfVeggies;
    //console.log(pizza);
    $('.order-list').append('<li>' + pizza + '</li>'); 
    }

  },
  failure: function(error){
    //handle error
    console.log(error);
  }

});

});
