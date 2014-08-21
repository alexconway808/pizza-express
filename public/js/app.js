$(document).ready(function(){

$.ajax("/orders", {
  method: "GET",
  success: function(data){
    //do stuff with data
    for (var i = 0; i < data.length; i += 1){
    console.log(data[i].toppings);  
    }

  },
  failure: function(error){
    //handle error
    console.log(error);
  }

});

});
