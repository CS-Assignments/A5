var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var userData = require('./userData');
var clothesData = require('./clothes');
var stickersData = require('./stickers');

var app = express();
var port = process.env.PORT || 3000;

//since the landing page didn't have the navbar it wasn't included as the main template
app.engine('handlebars', exphbs({ defaultLayout: null}));
app.set('view engine', 'handlebars');

//if the user doesn't sign in they will automatically be assumed to be a guest
var curUser = "guest";

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
    var randomArr = [];

    var randomSticker = Math.floor(Math.random() * (stickersData.length-1));
    var randomClothe = Math.floor(Math.random() * (clothesData.length-1));

    //This block of if else statements essentially picks one random elements from each category
    //along with the item before or after it depending on which random number was generated
    if (randomSticker != (stickersData.length-1)) {
        randomArr.push(stickersData[randomSticker]);
        randomArr.push(stickersData[randomSticker+1]);
    } else {
        randomArr.push(stickersData[randomSticker]);
        randomArr.push(stickersData[randomSticker-1]);
    }

    if (randomClothe != (clothesData.length-1)) {
        randomArr.push(clothesData[randomClothe]);
        randomArr.push(clothesData[randomClothe+1]);
    } else {
        randomArr.push(clothesData[randomClothe]);
        randomArr.push(clothesData[randomClothe-1]);
    }
    res.render('shopPage', {message: "Welcome to the Home Page", shopList: randomArr});
});

app.get('/stickers.html', function(req, res, next) {
    console.log("enter stickers shop");
    res.render('shopPage', {message: "Stickers and School Supplies", shopList: stickersData});
});

app.get('/clothes.html', function(req, res, next) {
    console.log("enter clothes shop");
    res.render('shopPage', {message: "Clothes and Accessories", shopList: clothesData});
});

//post request that checks if a user has data stored in memory aka the json file
app.post('/login', function(req,res) {
    if(userData[req.body.name]){
        curUser = req.body.name;
        res.status(200).render('shopPage', {message: "Welcome to the Home Page"});
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
