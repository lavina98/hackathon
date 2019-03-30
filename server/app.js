<<<<<<< HEAD
const express = require('express')
var cors = require('cors');
const rp = require('request-promise');
const request = require('request');
const cheerio = require('cheerio');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log('Server running at port ' + port);
})

app.get('/', function (req, res) {
    res.json('Connected');
})


=======

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const user = require("./routes/user.routes");
let app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/fragnel');
var db = mongoose.connection;


// Setup server port
var port = 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/user', user);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
>>>>>>> 4ae642ee380b505532ff355eb2d062b70cefe69d
