// grab the packages we need
var express         = require('express');
var methodOverride  = require('method-override')
var bodyParser      = require('body-parser');
var path            = require('path');
var fs              = require('fs');

var app             = express();
var router          = express.Router();
var port            = process.env.PORT || 3000;

// Create database connection.

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
app.use(methodOverride());

app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/sw.js', express.static(path.join(__dirname, './sw.js')));

app.get('/api/productlist', function (req, res, next) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) {
            res.json({status: 201, message: err});
        }
        res.json({status: 200, data: JSON.parse(data)});
    });
});

app.use('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);