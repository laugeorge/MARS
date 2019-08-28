// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Sets up the Express App
var app = express();

// Sets up the port
var PORT = process.env.PORT || 8080;

// Serve static content for the app from 'public' directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// EJS
app.set('view engine', 'ejs');

// Require api-routes.js
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, function(){
    console.log(`LET'S GO TO MARS ON PORT ${PORT}`);
});