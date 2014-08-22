#Pizza Express

Pizza Express has become popular, so they are hiring some developers to help organize their orders!

#GETTING STARTED

##Database
1. Go to `https://mongolab.com/`, log in create a new database for this project. Also create a user
2. Add the `mongodb` URL to the mongoose.connect function location inside of the project at `models/orders.js` file.

##Getting Started
1. fork and clone this repo
2. first run `npm install` to get all the dependencies for this project
3. `nodemon server.js` to start your server
4. go to `localhost:3000` to make sure it works
5. go to the `localhost:3000/generate/10` route to populate your database with some base objects (20 at a time)
6. create a `public/` directory with additional directories for your `stylesheets`, `javascripts`, etc.

###About the `/generateOrders` route
`GET` request to `/generate/:number` provide any number in place of `:number` to generate orders to that amount.

`GET` request to `/generate/auto` will generate an order every 5 seconds.

`GET` request to `/generate/off` will disable the auto-generation of orders.

##HTML

The only html page, and the only one you can use is the `index` page at the root route `'/'`.

There should be a form on `index` page so that you may submit a new pizza order. The form must have a way for the User to choose a single size (Small, Medium, or Large). The User should be able to choose any number of Meat and Veggie toppings for the order (look up 'form input array'). There should be a submit button for the form labeled 'Submit Order'.

The page should not refresh when a form is submitted, you must harness the power of AJAX and jQuery to submit the information to the server.

Below the form should be an area which shows all pizza orders in the queue. When this page is hit for the first time, an AJAX call to `/orders` should fire off to retreive all the pizza orders that are in the queue. You must add these orders to the `.order-list` div element.

====

#REST API

The server is designed to accept 3 types of responses.

##GET

- `/orders`
  - Returns all orders in the queue


##POST

- `/orders`
  - Creates a new order
  - expects three parameters to be sent, all three fields are required. Client-side Javascript must validate these fields.
    - `"size"`, `"meats"`, `"veggies"`
  - Returns successful `200` and returns the new order as a single JSON object

##DELETE

- `/orders/:orderId`
  - Removes a order from the queue
  - must have an :orderId

====
#Pizza Object

- size
  - "Large"
  - "Medium"
  - "Small"

- toppings
  - meat
    - "Pepperoni"
    - "Ham"
    - "Beef Topping"
    - "Italian Sausage"
    - "Pork Topping"
    - "Grilled Chicken"
    - "Bacon"
  - veggies
    - "Spinach"
    - "Green Peppers"
    - "Red Onions"
    - "Mushrooms"
    - "Black Olives"
    - "Tomatoes"
    - "Pineapple"
    - "Jalapenos"
    - "Garlic"
