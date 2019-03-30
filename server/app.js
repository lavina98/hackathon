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


