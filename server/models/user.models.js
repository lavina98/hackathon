const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String
    },
    business: { type: Boolean },
    entertainment: { type: Boolean },
    general: { type: Boolean },
    health: { type: Boolean },
    science: { type: Boolean },
    sports: { type: Boolean },
    technology: { type: Boolean },
    politics: { type: Boolean },
    frequentSearchs: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('users', UserSchema);
