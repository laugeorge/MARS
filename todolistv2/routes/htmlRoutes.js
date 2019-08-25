// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  // Displays all toDo
  app.get("/api/List", function(req, res) {
    return res.json(characters);
  });
  
  // Displays a single toDo, or returns false
  app.get("/api/LIST/:LIST", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < LIST.length; i++) {
      if (chosen === LIST[i].routeName) {
        return res.json(LIST[i]);
      }
    }
  
    return res.json(false);
  });

};