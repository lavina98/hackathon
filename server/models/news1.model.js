const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let News1Schema = new Schema({
    url: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    spam: {
        type: Number,
        default: 0
    },
    usersUpvote:[String],
    usersDownvote:[String],
    usersSpamvote:[String]
});

module.exports = mongoose.model("News", News1Schema);
