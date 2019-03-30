
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const user = require("./routes/user.routes");
const news = require("./routes/news.routes");
const request = require('request');
let app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb+srv://admin:admin@cluster0-evetk.mongodb.net/test?retryWrites=true');
// var db = mongoose.connection;


// Setup server port
var port = 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/user', user);
app.use('/news', news);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});