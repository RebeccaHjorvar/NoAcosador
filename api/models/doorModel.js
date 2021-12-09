const mongoose = require("mongoose")


const Doorschema = mongoose.Schema({
    doorName: {
        type: String
    },
    location: {
        type: String
    },
    //events: [eventSchema] 
})

module.exports = mongoose.model("Door", Doorschema)