$(document).ready(function(){

  //Define the pizza order function
  function pizzaOrderSubmitted(data){
    console.log(data);
      for (var i = 0; i < data.length; i += 1){
      //console.log(data[i].toppings);
      var sizeOfPizza = data[i].size;
      var typeOfMeat = data[i].toppings.meats;
      var typeOfVeggies = data[i].toppings.veggies;
      var pizza = sizeOfPizza + typeOfMeat + typeOfVeggies;
      //console.log(pizza);
      $('.order-list').append('<li>' + pizza + '</li>'); 
    };
  };

  $.ajax("/orders", {
    method: "GET",
    success: pizzaOrderSubmitted,
      //console.log("Hi Alex");
    failure: function(error){
      //handle error
      console.log(error);
    }
  });

  //When form is submitted in Jade it initiates this code
  $('#form').submit(function(event){
    //This prevents the HTML from sending to the server
    event.preventDefault();
    console.log($('form').serialize());
    $.ajax("/orders", {
      method: "POST", 
      data: $('#form').serialize(),
      success: pizzaOrderSubmitted,
        //do stuff with server response
      failure: function(error){
        //handle error
      console.log(error);
      }
    });
  });
});
