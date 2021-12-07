const mongoose = require("mongoose")

const Doorschema = mongoose.Schema({
    doorName = String,
    location = String,
    events: [{
        type: mongoose.Schema.Types.ObjectId
    }] 
})

module.exports = mongoose.model("door", Doorschema)