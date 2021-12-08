const mongoose = require('mongoose');

// Tenantschema and model

const TenantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    appartment: {
        type: Number,
        required: true
    },
    //tag: tagSchema
});

module.exports = mongoose.model("Tenant", TenantSchema);
