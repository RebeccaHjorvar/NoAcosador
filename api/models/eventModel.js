const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    in: Boolean,
    out: Boolean,
    error: String,
    date: Date,
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
})

module.exports = mongoose.model("event", eventSchema)