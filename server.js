// Dependencies
var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    User = require('./models/user'),
    env = require('dotenv');

// Sets up the Express App
var app = express();

// Sets up the port
var PORT = process.env.PORT || 8080;

// Import the models folder
var db = require("./models");

// Serve static content for the app from 'public' directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());

// Use sessions to keep track of user's login status
app.use(session({ secret: "They want the moon I'm on Mars", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Require api-routes.js
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log(`🌎 LET'S GO TO MARS ON PORT ${PORT}`);
    });
});
