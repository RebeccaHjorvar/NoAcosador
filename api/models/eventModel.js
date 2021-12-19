const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    in: Boolean,
    out: Boolean,
    code: String,
    date: Date,
    access: [],
    tag: {
        tagNumber: {
            type: String
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