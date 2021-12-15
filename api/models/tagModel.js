const mongoose = require('mongoose');

// Tag schema and mode

const tagSchema = new mongoose.Schema({
    tagNumber: {
        type: String,
        required: true
    },
    tenant: {
        name: {
            type: String,
        }
    },
    access: [{
        doorName: {
            type: String,
        }
    }]
});

module.exports = mongoose.model("Tag", tagSchema)