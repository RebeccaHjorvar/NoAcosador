const mongoose = require("mongoose")


const adminschema = mongoose.Schema({
    door: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Door'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }
})

module.exports = mongoose.model("AdminLog", adminschema)