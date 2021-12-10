const mongoose = require("mongoose")

// model to show the logs to the admin.
const adminschema = mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    door: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Door'
    }
})

module.exports = mongoose.model("AdminLog", adminschema)