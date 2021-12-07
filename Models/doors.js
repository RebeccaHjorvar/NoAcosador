const mongoose = require("mongoose")

const Doorschema = mongoose.Schema({
    doorName = String,
    location = String	
})

module.exports = mongoose.model("Door", Doorschema)