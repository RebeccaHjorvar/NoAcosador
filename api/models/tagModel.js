const mongoose = require('mongoose');

// Tag schema and mode

const tagSchema = new mongoose.Schema({
    tagNumber: {
        type: Number,
        required: true
    },
    tenant: {
        type: mongoose.Types.ObjectId,
        ref: 'Tenant',
    },
    access: [{
        type: mongoose.Types.ObjectId,
        ref: 'Door'
    }]
});

module.exports = mongoose.model("Tag", tagSchema)