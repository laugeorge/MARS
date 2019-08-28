var path = require('path');

module.exports = function(app) {

    app.get("/sign-in", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
    });

//-----------------GEORGE UPDATE-------------------------------//
// ---------------- ADD tables.html ------------------------// 
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/tables.html"));
      });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });
};