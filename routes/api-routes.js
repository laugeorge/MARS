var connection = require('../config/connection.js');

module.exports = function(app) {

    // Register new user
    app.post('/api/users', function(req,res){
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            fav_artist: req.body.fav_artist,
            fav_genre: req.body.fav_genre,
            job_title: req.body.job_title
        };
        var signUpQ = 'INSERT INTO users SET ?;';
        connection.query(signUpQ, newUser, function(err, result){
            if (err) throw err;
            console.log(
                `WELCOME NEW USER: 
                ${result[0].first_name} ${result[0].last_name}, ${result[0].job_title}`
            );
        });
    });

    // Get user data after log-in 
    app.get('/api/users', function(req,res){
        var loginQuery = `SELECT 
                id,
                first_name,
                last_name,
                DATE_FORMAT(created_at, '%m/%d/%Y') AS 'arrival date',
                TIMESTAMPDIFF(SECOND, created_at, NOW())/86400 AS 'earth',
                TIMESTAMPDIFF(SECOND, created_at, NOW())/88775 AS 'mars',
                fav_artist,
                fav_genre
            FROM users
            WHERE username = ? AND password =?;`;
            connection.query(loginQuery, [req.body.username, req.body.password], function(err, result){
                if (err) throw err;
                console.log(`WELCOME BACK, ${result[0].first_name} ${result[0].last_name}.`);
            });
    });

    // Get todos
    app.get('/api/todo', function(req,res){
        var todoQuery = `SELECT 
                todo.id,
                task,
                username,
                completed
        FROM todo
            LEFT JOIN users
                ON users.id = todo.user_id
            WHERE users.id=1 OR users.id=?;`;
        connection.query(todoQuery, req.body.id, function(err, result){
            if (err) throw err;
            console.log('USER TODOS:');
            for(var i=0; i<result.length; i++){
                console.log(`Task ${result[i].id}: ${result[i].task}
                            Completed: ${result[i].completed}
                            Assigned by: ${result[i].username}`);
            }
        });
    });

    // Check off todo list
    app.put('/api/todo/:id', function(req,res){
        var todoChecked = `UPDATE todo SET completed=1 WHERE id=?;`;
        connection.query(todoChecked, req.body.id, function(err, result){
            if(err) throw err;
            console.log(`TODO ${result[0].id} completed`);
        });
    });

    // New todo
    app.post('/api/todo', function(req,res){
        var newTodo = {
            user_id: req.body.id,
            task: req.body.task
        }
        var addTodoQuery = 'INSERT INTO todo SET ?;';
        connection.query(addTodoQuery, newTodo, function(err, result){
            if (err) throw err;
            console.log(
                `NEW TODO ADDED: ${result[0].task}`
            );
        });
    });

    // Delete todo
    app.delete('/api/todo/:id', function(req,res){
        var deleteTodo = `DELETE FROM todo WHERE id=?;`;
        connection.query(deleteTodo, req.body.id, function(err, results){
            if(err) throw err;
            console.log(`TODO ${result[0].id} DELETED`);
        });
    });

    // Get chats
    app.get('/api/chat', function(req,res){
        var chatQuery = `SELECT 
                    message, 
                    username AS 'name', 
                    CONCAT(first_name, ' ', last_name) AS 'full name',
                    DATE_FORMAT(chat.created_at, "%m/%d/%Y %H:%i") AS 'time'
                FROM chat
                LEFT JOIN users
                    ON chat.user_id = users.id
                ORDER BY time DESC;`;
        connection.query(chatQuery, function(err,result){
            for(var i=0; i<result.length; i++){
                console.log(`MESSAGE: ${result[i].message} USER: ${result[i].name} TIME: ${result[i].time}`);
            }
        });
    });

    // New chat
    app.post('/api/chat', function(req,res){
        var newChat = {
            user_id = req.body.id,
            message = req.body.message
        }
        var addChatQuery = 'INSERT INTO chat SET ?;';
        connection.query(addChatQuery, newChat, function(err, result){
            if (err) throw err;
            console.log(
                `NEW MESSAGE: ${result[0].message}`
            );
        });
    });




};