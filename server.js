var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mars_db'
});

app.get('/', function(req, res){
    var id = 'SELECT * FROM users';
    connection.query(id, [req.params.id], function(err, data){
        if(err) throw err;
        var user = data;
        console.log(user);
        // res.render('home', {user: user});
    });
});

app.listen(PORT, function(){
    console.log(`LET'S GO TO MARS ON PORT ${PORT}`);
});