const mongoose = require("mongoose")


const doorschema = mongoose.Schema({
    doorName: {
        type: String
    },
    location: {
        type: String
    },
    events: [{
        in: {
            type: Boolean
        },
        out: {
            type: Boolean
        }, 
        error:{
            type: Boolean
        },
        date: {
            type: Date
        }
    }]
})

module.exports = mongoose.model("Door", doorschema)