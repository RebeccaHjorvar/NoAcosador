const mongoose = require("mongoose")


const doorschema = mongoose.Schema({
    doorName: {
        type: String
    },
    location: {
        type: String
    },
    //events: [eventSchema] 
})

module.exports = mongoose.model("Door", doorschema)