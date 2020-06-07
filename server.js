var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var userData = require('./userData');
var clothesData = require('./clothes')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: null}));
app.set('view engine', 'handlebars');

var userNum = -1;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/landing.html', function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/mainShop.html', function(req, res, next) {
    console.log("enter main shop go");
    res.render('shopPage', {message: "Welcome to the main shop"});
});

app.get('/stickers.html', function(req, res, next) {
    console.log("enter stickers shop");
    res.render('shopPage', {message: "enter stickers shop"});
});

app.get('/clothes.html', function(req, res, next) {
    console.log("enter clothes shop");
    res.render('shopPage', {message: "enter clothes shop", shopList: clothesData});
});

app.post('/login', function(req,res) {
    if(userData[req.body.name]){
        res.status(200).render('shopPage', {message: "Welcome to the main shop"});
    }
    else{
        res.status(204).send("User Does Not Exist");
    }
});

app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
    console.log("Server is listening on port", port);
});
