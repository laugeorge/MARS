// Dependencies
<<<<<<< HEAD
var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    User = require('./models/user');
=======
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
>>>>>>> george

// Sets up the Express App
var app = express();

// Sets up the port
var PORT = process.env.PORT || 8080;

<<<<<<< HEAD
// Import the models folder
var db = require("./models");

=======
>>>>>>> george
// Serve static content for the app from 'public' directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
<<<<<<< HEAD
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// Use sessions to keep track of user's login status
app.use(session({ secret: "They want the moon I'm on Mars", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

=======
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// EJS
app.set('view engine', 'ejs');
>>>>>>> george

// Require api-routes.js
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

<<<<<<< HEAD
db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log(`🌎 LET'S GO TO MARS ON PORT ${PORT}`);
    });
});
=======
app.listen(PORT, function(){
    console.log(`LET'S GO TO MARS ON PORT ${PORT}`);
});
>>>>>>> george
