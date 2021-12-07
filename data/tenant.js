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
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        requried: true
    }
});

const Tenant = mongoose.model("Tenant", TenantSchema);
