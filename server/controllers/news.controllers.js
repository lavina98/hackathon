const request = require('request');
const News = require('../models/news1.model');

exports.topHeadlines = async (req, res) => {
    const response = [];
    var x = await request.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=7f25608555944961a78ab3373a73b6a1', (err, res1, body) => {
        var i = 0;
        const obj = JSON.parse(body);
        var size = obj.totalResults;
        // console.log(obj);
        // res.send(obj);
        console.log(body);
        var i = 0;
        var news = obj.articles;
        // console.log(news[11]);
        for (i = 0; i < 20; i++) {
            console.log(i);
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
            objToPush.save((err) => {
                if (err) {
                    console.log(err);
                }
            })
            response.push(objToPush)
        }
        console.log(response);

        // News.save()


        res.send(response);
    })

    // res.send(obj1);

}


exports.business = async (req, res) => {
    const response = await getNews('business', req, res);
}


exports.entertainment = async (req, res) => {
    const response = await getNews('entertainment', req, res);
}











exports.general = async (req, res) => {
    const response = await getNews('general', req, res);
}


exports.health = async (req, res) => {
    const response = await getNews('health', req, res);

}



exports.science = async (req, res) => {
    const response = await getNews('science', req, res);
}



exports.sports = async (req, res) => {
    const response = await getNews('sports', req, res);

}



exports.technology = async (req, res) => {
    const response = await getNews('technology', req, res);
}



exports.politics = async (req, res) => {
    const response = await getNews('politics', req, res);
}


async function getNews(category, req, res) {
    var response = [];
    const url = 'https://newsapi.org/v2/everything?q=' + category + '&language=en&sortBy=relevancy,publishedAt&pageSize=20&apiKey=7f25608555944961a78ab3373a73b6a1';
    await request.get(url, (err, res1, body) => {

        var i = 0;
        const obj = JSON.parse(body);
        var size = obj.totalResults;
        // res.send(obj);
        console.log(size);
        var i = 0;
        var news = obj.articles;
        for (i = 0; i < 20; i++) {
            var objToPush = new News({
                url: news[i].url,
                imageURL: news[i].urlToImage,
                title: news[i].title,
                description: news[i].description,
                sourceId: news[i].source.id,
                sourceName: news[i].source.name,
                category: category,
                upvotes: 0,
                downvotes: 0,
                spam: 0
            });
            response.push(objToPush)
        }
        console.log(response);
        res.send(response);
        // return response;
    })
}