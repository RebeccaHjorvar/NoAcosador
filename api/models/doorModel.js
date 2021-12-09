const mongoose = require("mongoose")


const Doorschema = mongoose.Schema({
    doorName: {
        type: String
    },
    location: {
        type: String
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }]
})

module.exports = mongoose.model("Door", Doorschema)