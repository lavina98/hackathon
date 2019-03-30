
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
// mongoose.connect('mongodb+srv://luvina1009:spit123%21@cluster0-gzurj.mongodb.net/test?retryWrites=true')
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
