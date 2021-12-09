const mongoose = require('mongoose');

// Tag schema and mode

const tagSchema = new mongoose.Schema({
    tagNumber: {
        type: Number,
        required: true
    },
    //tenant: {tenantSchema},
    //access: {doorSchema}
});

module.exports = mongoose.model("Tag", tagSchema)