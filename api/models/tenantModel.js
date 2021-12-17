'use strict';
const mongoose = require('mongoose');

// Tenantschema and model
const tenantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    appartment: {
        type: String,
        required: 'Enter the appartment number'
    },
    tag: {
        tagNumber: {
            type: String
        }
    }
});

module.exports = mongoose.model("Tenant", tenantSchema);
