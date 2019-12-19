const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    ch: {
        type: String,
        require: true
    },
    daa: {
        type: String,
        require: true
    },
    dab: {
        type: String,
        require: true
    },
    dac: {
        type: String,
        require: true
    },
    dad: {
        type: String,
        require: true
    },
    dadung: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Question", QuestionSchema)
