// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express       = require('express');       // call express
const app           = express();                // define our app using express
const bodyParser    = require('body-parser');
const router        = require("./router");      // call router and import the routes

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port => if there is no port set use 8080 as default

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port:' + port);

//EXPORT MODULE
module.exports = app;
