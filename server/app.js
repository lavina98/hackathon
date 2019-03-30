
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const user = require("./routes/user.routes");
const news = require("./routes/news.routes");
const news1 = require('./routes/news1.routes');
const request = require('request');
let app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable

mongoose.connect('mongodb://localhost:27017/fragnel',{ useNewUrlParser: true });
var db = mongoose.connection;


// Setup server port
var port = 3020;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/user', user);
app.use('/news', news);
app.use('/news1',news1);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});