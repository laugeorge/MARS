// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

<<<<<<< HEAD
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    app.get("/home", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
=======
//-----------------GEORGE UPDATE-------------------------------//
// ---------------- ADD tables.html ------------------------// 
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/tables.html"));
      });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
>>>>>>> george
    });
};