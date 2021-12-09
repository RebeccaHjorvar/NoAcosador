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
    // access: {
        //type: Boolean
    // }
});

module.exports = mongoose.model("Tag", tagSchema)