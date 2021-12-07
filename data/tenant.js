const mongoose = require('mongoose');

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
        type: TagSchema,
        requried: true
    }
})

const Tenant = mongoose.model("Tenant", TenantSchema);