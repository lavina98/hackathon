
const ps = require('python-shell');
const path = require('path');
const pathToPython = path.join(__dirname, '../getKeywords.py');
const request = require('request');
const News = require('../models/news1.model');
exports.getAnswer = async (req, res) => {

    const text = req.body.text;
    const options = {
        args: [
            text
        ]
    };
    await ps.PythonShell.run(pathToPython, options, async (err, keywords) => {

        if (err) {
            console.log(err);
        }
        console.log(keywords);
        console.log('I am inside the python shell!');
        const url = 'https://newsapi.org/v2/everything?q=' + keywords[1] + '&sources=the-times-of-india,the-hindu&sortBy=relevance&pageSize=100&apiKey=7f25608555944961a78ab3373a73b6a1';
        console.log(url);
        request.get(url, (err, res1, body) => {
            var response = [];

            var i = 0;
            const obj = JSON.parse(body);
            var size = obj.totalResults;
            console.log(obj);
            // res.send(obj);
            // console.log(size);
            var i = 0;
            var news = obj.articles;
            const size1 = Object(news).length;
            console.log(size1);
            if (size1 < 3) {
                res.json("Less");
            } else {
                console.log(news);
                for (i = 0; i < 3; i++) {
                    // console.log(i);
                    var objToPush = new News({
                        url: news[i].url,
                        imageURL: news[i].urlToImage,
                        title: news[i].title,
                        description: news[i].description,
                        sourceId: news[i].source.id,
                        sourceName: news[i].source.name,
                        category: '',
                        upvotes: 0,
                        downvotes: 0,
                        spam: 0
                    });
                    // objToPush.save((err) => {
                    //     if (err) {
                    //         console.log(err);
                    //     }
                    // })
                    response.push(objToPush)
                }
                console.log(response);

                // News.save()
                res.send(response);
            }
            // console.log(news[11]);

        });
    });
}




