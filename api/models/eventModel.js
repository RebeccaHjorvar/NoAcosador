const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    in: Boolean,
    out: Boolean,
    error: String,
    date: Date,
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    door: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Door'
    }]
})

module.exports = mongoose.model("Event", eventSchema);