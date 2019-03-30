const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NewsSchema = new Schema({

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
    }
})

module.exports = mongoose.model('News', NewsSchema);
