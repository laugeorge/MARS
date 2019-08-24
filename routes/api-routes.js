var connection = require('../config/connection.js');

module.exports = function(app) {

    // Redirect
    // app.get('/', function(req,res){
    //     res.redirect('/todos');
    // });

    // Get all todos
    app.get("/api/todo", function(req, res) {
        connection.query("SELECT * FROM todo;", function(err, data) {
            if (err) {
                return res.status(500).end();
            }
            console.log(data);
            res.end();
        });
    });

    // Get all users
    app.get('/api/users', function(req, res){
        connection.query('SELECT * FROM users;', function(err, data) {
            if(err){
                return res.status(500).end();
            }
            console.log(data);
            res.end();
        });
    });

    // To-do list joined with users, roles, jobs
    app.get('/api/todo-list', function(req,res){
        connection.query(`SELECT 
        task AS 'TODO',
        CASE
            WHEN assigned = 0 THEN 'NOT ASSIGNED'
            ELSE 'ASSIGNED'
        END AS 'ASSIGNMENT',
        CASE
            WHEN completed = 0 THEN 'NOT COMPLETED'
            ELSE 'COMPLETED'
        END AS 'STATUS',
        type
    FROM todo
        LEFT JOIN jobs
            ON todo.role_id = jobs.role_id
        LEFT JOIN roles
            ON roles.id = todo.role_id
        GROUP BY task
        ORDER BY created_at;`, function(err,data){
            if (err){
                return res.status(500).end();
            }
            console.log(data);
            res.end();
        });
    });

    // List all users' positions
    app.get('/api/users-jobs', function(req,res){
        connection.query(`SELECT 
            CONCAT(first_name, ' ', last_name) AS martian,
            IFNULL(type, 'not assigned') AS job
        FROM users
        LEFT JOIN jobs
            ON users.id = jobs.user_id
        LEFT JOIN roles
            ON jobs.role_id = roles.id;`, function(err,data){
                if (err){
                    return res.status(500).end();
                }
                console.log(data);
                res.end();
            });
    });

    









































    // Grab users
    // app.get('/api/users', function(req, res){
    //     var q = 'SELECT * FROM users;';

    //     connection.query(q, [req.params.q], function(err, data){
    //         if(err) throw err;
    //         console.log(data);
    //         res.json(data);
    //     });
    // });

    // Mission length (Earth and Mars) 
    // Does update per reload
    // app.get('/api/mission-length', function(req,res){
    //     var q = `SELECT
    //                 CONCAT(first_name, ' ', last_name) AS 'astronaut',
    //                 DATE_FORMAT(created_at, '%m/%d/%Y') AS 'arrival date',
    //                 TIMESTAMPDIFF(SECOND, created_at, NOW())/86400 AS earth,
    //                 TIMESTAMPDIFF(SECOND, created_at, NOW())/88775 AS mars
    //             FROM users
    //                 ORDER BY mars DESC;`;

    //     connection.query(q, [req.params.q], function(err, data){
    //         if(err) throw err;
    //         console.log(data);
    //         res.json(data);
    //     });
    // });

    // Registration 
    // app.post('/register', function(req, res){
    // TODO: change for information we want or breakup into two objects
    //     var person = {
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         email: req.body.email,
    //         password: req.body.password
    //     };

    //     connection.query('INSERT INTO users SET ?', person, function(err,res){
    //         if (err) throw err;
    //         res.redirect('/'); // TODO: check redirection link
    //     });
    // });

    // Get todo list
    // app.get('/api/todos', function(req,res){
    //     var q = 'SELECT * FROM todo';

    //     connection.query(q, function(err, result){
    //         if (err) throw err;
    //         res.json(result);
    //     });
    // });

    // Post to todo list
    // app.post('/api/new-todo', function(req,res){
    //     console.log('Tasks: ');
    //     console.log(req.body);

    //     var todo = {
    //         task: req.body.task,
    //         role_id: req.body.role_id
    //     }; 

    //     connection.query('INSERT INTO todo SET ?', todo, function(err,data){
    //         if (err) throw err;
    //         console.log(data + ' added');
    //         res.redirect('/api/todos');
    //         res.end();
    //     });
    // });

};