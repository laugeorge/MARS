var connection = require('../config/connection.js');

module.exports = function(app) {

    // *=========================== USERS =============================== //

    // Register new user
    // TODO: F.E.: REDIRECT TO LOG-IN PAGE. SOMETHING THAT SAYS IT'S SUCCESSFUL?

    app.post('/api/users', function(req,res){
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            job_title: req.body.job_title
        };
        connection.query(signUpQ, newUser, function(err, result){
            if (err) throw err;
        });
    });


    // =============================================================== //

    // Get user data after log-in 

    app.post('/api/log-in', function(req,res){
        var loginQuery = `SELECT 
                id,
                first_name,
                last_name,
                job_title,
                TIMESTAMPDIFF(SECOND, created_at, NOW())/88775 AS 'mars'
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

    app.get('/api/todos', function(req,res){
        var todoQuery = `SELECT 
                todo.id,
                task,
                username,
                completed
        FROM todo
            LEFT JOIN users
                ON users.id = todo.user_id
            WHERE users.id=1 OR users.id=?;`;

        connection.query(todoQuery, req.query.id, function(err, todos){
            if (err) throw err;
            console.log('USER TODOS:');
            for(var i=0; i<todos.length; i++){
                console.log(`Task ${todos[i].id}: ${todos[i].task}
                            Completed: ${todos[i].completed}
                            Assigned by: ${todos[i].username}`);
            }
            res.json(todos);
        });
    });

    // =============================================================== //

    // Check off todo list

    app.put('/api/todo/:id', function(req,res){
        var todoChecked = `UPDATE todo SET completed=1 WHERE id=?;`;
        connection.query(todoChecked, req.params.id, function(err, result){
            if(err) throw err;
        });
    });

    // =============================================================== //

    // New todo
    // TODO: F.E.: RELOAD PAGE TO DISPLAY NEW TODO

    app.post('/api/todo', function(req,res){
        var newTodo = {
            user_id: req.body.user_id,
            task: req.body.task
        }
        var addTodoQuery = 'INSERT INTO todo SET ?;';
        connection.query(addTodoQuery, newTodo, function(err, result){
            if (err) throw err;
            res.end();
        });
    });

    // =============================================================== //

    // Delete todo
    // TODO: F.E.: RELOAD FOR NEW TODO LIST

    app.delete('/api/todo/:id', function(req,res){
        var deleteTodo = `DELETE FROM todo WHERE id=?;`;
        connection.query(deleteTodo, req.params.id, function(err, results){
            if(err) throw err;
            res.end();
        });
    });

    // *========================= CHATS ================================= //

    // Get chats

    app.get('/api/chats', function(req,res){
        var chatQuery = `SELECT 
                    message, 
                    username AS 'name', 
                    CONCAT(first_name, ' ', last_name) AS 'full name',
                    DATE_FORMAT(chat.created_at, "%m/%d/%Y %H:%i") AS 'time'
                FROM chat
                LEFT JOIN users
                    ON chat.user_id = users.id
                ORDER BY time DESC;`;
        connection.query(chatQuery, function(err,chats){
            for(var i=0; i<chats.length; i++){
                console.log(`MESSAGE: ${chats[i].message} USER: ${chats[i].name} TIME: ${chats[i].time}`);
            }
            res.json(chats);
        });
    });

    // =============================================================== //

    // New chat
    // TODO: F.E.: RELOAD PAGE TO DISPLAY NEW CHAT

    app.post('/api/chat', function(req,res){
        var newChat = {
            user_id: req.body.user_id,
            message: req.body.message
        }
        var addChatQuery = 'INSERT INTO chat SET ?;';
        connection.query(addChatQuery, newChat, function(err, result){
            if (err) throw err;
            res.end();
        });
    });


};