var express = require('express'),
    //bodyParser = require('body-parser'),
    fs = require('fs'),
    exec = require('child_process').exec;

var app = express();
var port = 8080;

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/home.html');
});

app.get('/classroom/:roomName', function (req, res) {
    res.sendFile(__dirname + '/view/index.html');
});

app.post('/run', function (req, res) {

});

app.use('/public/', express.static(__dirname + '/public/'));

console.log('port: ' + port);
app.listen(port);
