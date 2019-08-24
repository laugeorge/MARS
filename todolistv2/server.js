// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To Do List (DATA)
// =============================================================

var LIST = [

    {
      name: toDO,
      id : id,
      done : false,
      trash : false
    }
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },

  ];
  
  // Routes
  // =============================================================
  
  // Basic route that sends the user first to the AJAX Page
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
  
  // NEED TO UPDATE HERE!
  // Create New Characters - takes in JSON input
  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });