$(document).ready(function(){

  //Define the pizza order function
  function pizzaOrderSubmitted(data){
      if (data._id){
        var typeOfVeggies = data.toppings.veggies;
        var typeOfMeat = data.toppings.meats;
        var sizeOfPizza = data.size;
        var pizza = sizeOfPizza + typeOfMeat + typeOfVeggies;
        $('.order-list').prepend('<li>' + pizza + '</li>'); 
        return;
      
      } else {

      for (var i = 0; i < data.length; i += 1){
      //console.log(data[i].toppings);
      var sizeOfPizza = data[i].size;
      var typeOfMeat = data[i].toppings.meats;
      var typeOfVeggies = data[i].toppings.veggies;
      var pizza = sizeOfPizza + typeOfMeat + typeOfVeggies;
      //console.log(pizza);
      $('.order-list').prepend('<li>' + pizza + '</li>'); 
      //difference between object and array
      }
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
      failure: function(error){
        //handle error
      console.log(error);
      }
    });
  });
});
