var connection = require('../config/connection.js');

module.exports = function(app) {

    // Grab users
    app.get('/api/users', function(req, res){
        var q = 'SELECT * FROM users;';

        connection.query(q, [req.params.q], function(err, data){
            if(err) throw err;
            console.log(data);
            res.json(data);
        });
    });

    // Mission length (Earth and Mars) 
    // Does update per reload
    app.get('/api/mission-length', function(req,res){
        var q = `SELECT
                    CONCAT(first_name, ' ', last_name) AS 'astronaut',
                    DATE_FORMAT(created_at, '%m/%d/%Y') AS 'arrival date',
                    TIMESTAMPDIFF(SECOND, created_at, NOW())/86400 AS earth,
                    TIMESTAMPDIFF(SECOND, created_at, NOW())/88775 AS mars
                FROM users
                    ORDER BY mars DESC;`;

        connection.query(q, [req.params.q], function(err, data){
            if(err) throw err;
            console.log(data);
            res.json(data);
        })
    });


    app.post('/register', function(req, res){
        // TODO: change for information we want or breakup into two objects
        var person = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        };

        connection.query('INSERT INTO users SET ?', person, function(err,res){
            if (err) throw err;
            res.redirect('/'); // TODO: check redirection link
        });
    });


    app.post('/api/todos', function(req,res){
        console.log('Tasks: ');
        console.log(req.body);

        var task = {
            task: req.body.task,
            role_id: req.body.role_id
        };

        connection.query('INSERT INTO todo SET ?', task, function(err,res){
            if (err) throw err;
            res.redirect('/todos');
        });
    });

}