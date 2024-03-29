const User = require('../models/user.models');
const passwordHash = require('password-hash');
exports.test = function (req, res) {
    res.send('greetings');
}

exports.register = (req, res) => {
    console.log(req.body);
    const hashedPassword = passwordHash.generate(req.body.password);
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            business: req.body.business,
            entertainment: req.body.entertainment,
            general: req.body.general,
            health: req.body.health,
            science: req.body.science,
            sports: req.body.sports,
            technology: req.body.technology,
            politics: req.body.politics,
            frequentSearches: req.body.frequentSearches
        }
    );
    user.save((err) => {
        if (!err) {
            console.log('success');
            res.send({ message: 'Valid' });
        }
        else {
            res.send({ message: 'Invalid' });
        }
    })

}

exports.login = (req, res) => {
    console.log(req.body);

    User.findOne({ email: req.body.email }, (err, document) => {
        console.log(document);
        const loginSuccess = passwordHash.verify(req.body.password, document.password);
        if (loginSuccess) {
            res.send({ message: 'Valid' });
        }
        else {
            res.send({ message: 'Invalid' });
        }
    })

}

exports.userLikedNews = function (req, res) {
    let newsToAdd = new News({
        url: 'abc',
        imageURL: 'okay'
    });
    newsToAdd.save((err) => {
        if (!err)
            res.send(err);
        else
            res.send('success');
    });


}

exports.getDetails = function (req, res) {
    User.findOne({ email: req.body.email }, (err, document) => {
        console.log(document);
        res.send(document);
    });

}