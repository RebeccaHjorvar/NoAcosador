const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    in: Boolean,
    out: Boolean,
    error: String,
    date: Date,
    tag: {
        tagNumber: {
            type: String,
            required: true
        }, 
        tenant: {
            name:{
                type: String,
            },
            appartment: {
                type: String,
            }
        }
    },
    door: {
        doorName: {
            type: String,
        },
        location: {
            type: String
        }
    }
})

module.exports = mongoose.model("Event", eventSchema);