const News1 = require("../models/news1.model");

exports.addNews = (req, res) => {
  let news = new News1({
    url: req.body.url,
    imageURL: req.body.imageURL,
    title: req.body.title,
    description: req.body.description,
    source: req.body.source,
    category: req.body.category,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    spam: req.body.spam,
    users: req.body.users
  });
  news.save(news, err => {
    if (!err) {
      console.log("success");
      res.send({ message: "Valid" });
    } else {
      console.log("failure");
      res.send({ message: "Invalid" });
    }
  });
};

exports.getUserLikedNews = (req, res) => {
  console.log(req.body);
  News1.find({ users: req.body.email }, (err, document) => {
    if (err) res.send(err);
    else res.send(document);
  });
};

exports.upvote = (req, res) => {
  console.log(req.body);
  News1.updateOne(
    { url: req.body.url },
    { $push: { usersUpvote: req.body.user }, $set: { upvotes: req.body.upvotes}},(err,document)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(document);
            res.send(document);
        }
    }
  );
};
exports.downvote = (req, res) => {
    console.log(req.body);
    News1.updateOne(
      { url: req.body.url },
      { $push: { usersDownvote: req.body.user },$set: { downvotes: req.body.downvotes } },(err,document)=>{
          if(err){
              console.log(err);
              res.send(err);
          }
          else {
              console.log(document);
              res.send(document);
          }
      }
    );
  };
  exports.span = (req, res) => {
    console.log(req.body);
    News1.updateOne(
      { url: req.body.url },
      { $push: { usersSpamvote: req.body.user },$set: { spam:req.body.spam }},(err,document)=>{
          if(err){
              console.log(err);
              res.send(err);
          }
          else {
              console.log(document);
              res.send(document);
          }
      }
    );
  };