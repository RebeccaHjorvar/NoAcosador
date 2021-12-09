const mongoose = require("mongoose")


const eventSchema = mongoose.Schema({
    in: Boolean,
    out: Boolean,
    error: String,
    date: Date,
    tag: {
        type: tagSchema,
        ref: 'Tag'
    }
});

module.exports = mongoose.model("event", eventSchema)