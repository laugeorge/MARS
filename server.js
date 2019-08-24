var express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

var PORT = process.env.PORT || 8080;

require('./app/routes/api-routes.js')(app);

app.listen(PORT, function(){
    console.log(`LET'S GO TO MARS ON PORT ${PORT}`);
});