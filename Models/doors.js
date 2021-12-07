const mongoose = require("mongoose")


const Doorschema = mongoose.Schema({
    doorName = String,
    location = String,
    events: [eventSchema] 
})

module.exports = mongoose.model("door", Doorschema)