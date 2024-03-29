var connection = require('../config/connection.js');
var db = require('../models');
var passport = require('../config/passport');

// UPDATE FROM GEORGE, ADDING DATA FOLDER WITH tableData
var tableData = require("../config/tableData");

module.exports = function(app) {


        // *=========================== USERS =============================== //

    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/home");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        // don't console.log after developed
        console.log(req.body);
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            job_title: req.body.job_title,
            username: req.body.username,
            password: req.body.password,

        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log('Error:' + err);
            res.json(err);
            res.status(422).json(err.errors[0].message);
        });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/login");
    });
    
    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
        }
        else {
        // Otherwise send back the user's username and id
        // Sending back a password, even a hashed password, isn't a good idea
        console.log(req.body.username);
        res.json({
            username: req.user.username,
            id: req.user.id
        });

        }
    });

    // Get user data after log-in 

    app.post('/api/log-in', function(req,res){
        var loginQuery = `SELECT 
                id,
                first_name,
                last_name,
                job_title,
                TIMESTAMPDIFF(SECOND, createdAt, NOW())/88775 AS 'mars'
            FROM users
            WHERE username = ? AND password =?;`;
            connection.query(loginQuery, [req.body.username, req.body.password], function(err, result){
                if (err) throw err;
                console.log(`WELCOME BACK, ${result[0].first_name} ${result[0].last_name}.`);
                res.json(result);
            });
    });

    // *=========================== TODOS =============================== //

    // Get todos
    // EXAMPLE TO GET ID=?  localhost:8080/api/todos?id=1234
    // ===========================GEORGE CODE ====================================================//

    // UPDATE FROM GEORGE: MAYBE WE DO NOT NEED THIS MOVE TO ABOVE LINE 3,4.
    //var tableData = require("../data/tableData");

// ===============================================================================
// ROUTING
// ===============================================================================

// UPDATE FROM GEORGE: MAYBE WE DO NOT NEED THIS, DECLEARED UPSTAIRS
// module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/tables/:name", function(req, res) {
    var name = req.params.name;
    var result = [];

    tableData.forEach(function(taskItem){
      if ((taskItem.user_id).toLowerCase() === name) {
        result.push(taskItem);
      }
        
    });

    res.json(result)

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
  });


    //============================KIMS CODE=======================================================//
    // app.get('/api/todos', function(req,res){
    //     var todoQuery = `SELECT 
    //             todo.id,
    //             task,
    //             username,
    //             completed
    //     FROM todo
    //         LEFT JOIN users
    //             ON users.id = todo.user_id
    //         WHERE users.id=1 OR users.id=?;`;

    //     connection.query(todoQuery, req.query.id, function(err, todos){
    //         if (err) throw err;
    //         console.log('USER TODOS:');
    //         for(var i=0; i<todos.length; i++){
    //             console.log(`Task ${todos[i].id}: ${todos[i].task}
    //                         Completed: ${todos[i].completed}
    //                         Assigned by: ${todos[i].username}`);
    //         }
    //         res.json(todos);
    //     });
    // });

    // // =============================================================== //

    // // Check off todo list

    // app.put('/api/todo/:id', function(req,res){
    //     var todoChecked = `UPDATE todo SET completed=1 WHERE id=?;`;
    //     connection.query(todoChecked, req.params.id, function(err, result){
    //         if(err) throw err;
    //     });
    // });

    // // =============================================================== //

    // // New todo
    // // TODO: F.E.: RELOAD PAGE TO DISPLAY NEW TODO

    // app.post('/api/todo', function(req,res){
    //     var newTodo = {
    //         user_id: req.body.user_id,
    //         task: req.body.task
    //     }
    //     var addTodoQuery = 'INSERT INTO todo SET ?;';
    //     connection.query(addTodoQuery, newTodo, function(err, result){
    //         if (err) throw err;
    //         res.end();
    //     });
    // });

    // // =============================================================== //

    // // Delete todo
    // // TODO: F.E.: RELOAD FOR NEW TODO LIST

    // app.delete('/api/todo/:id', function(req,res){
    //     var deleteTodo = `DELETE FROM todo WHERE id=?;`;
    //     connection.query(deleteTodo, req.params.id, function(err, results){
    //         if(err) throw err;
    //         res.end();
    //     });
    // });

    // *========================= CHATS ================================= //

    // Get chats

    // app.get('/api/chats', function(req,res){
    //     var chatQuery = `SELECT 
    //                 message, 
    //                 username AS 'name', 
    //                 CONCAT(first_name, ' ', last_name) AS 'full_name',
    //                 DATE_FORMAT(chat.created_at, "%m/%d/%Y %H:%i") AS 'time'
    //             FROM chat
    //             LEFT JOIN users
    //                 ON chat.user_id = users.id
    //             ORDER BY time DESC;`;
    //     connection.query(chatQuery, function(err,chats){
    //         for(var i=0; i<chats.length; i++){
    //             console.log(`MESSAGE: ${chats[i].message} USER: ${chats[i].name} TIME: ${chats[i].time}`);
    //         }
    //         res.json(chats);
    //     });
    // });

    // // =============================================================== //

    // // New chat
    // // TODO: F.E.: RELOAD PAGE TO DISPLAY NEW CHAT

    // app.post('/api/chat', function(req,res){
    //     var newChat = {
    //         user_id: req.body.user_id,
    //         message: req.body.message
    //     }
    //     var addChatQuery = 'INSERT INTO chat SET ?;';
    //     connection.query(addChatQuery, newChat, function(err, result){
    //         if (err) throw err;
    //         res.end();
    //     });
    // });


};