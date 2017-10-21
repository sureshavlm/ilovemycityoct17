
var express = require('express');
var routes = require('./routes/route.js');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));//middle ware


app.get('/', routes.home);

app.get('/login', routes.login);

app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("app running on port %s", port);
});