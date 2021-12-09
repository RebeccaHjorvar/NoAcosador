const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")


const eventSchema = mongoose.Schema({
    in: 
    {
        type: Boolean
    },
    out: 
    {
        type: Boolean
    },
    error: 
    {
        type: String
    },
    date: 
    {
        type: Date
    },
    tag: 
    {tagSchema}
})

module.exports = mongoose.model("event", eventSchema)