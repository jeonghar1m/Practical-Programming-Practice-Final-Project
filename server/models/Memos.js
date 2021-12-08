const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memoSchema = mongoose.Schema({
    memoId: {
        type: String
    },
    content: {
        type: String
    }
}, {timestamps: true})

const Memo = mongoose.model('Memo', memoSchema);

module.exports = { Memo };