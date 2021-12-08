const express = require('express');
const tenantModel = require('../../models/tenant');
const app = express();

// Creates a new tenant

app.post('/addTenant', async (req, res) => {
    const tenant = new tenantModel(request.body);

    try {
        await tenant.save();
        res.send(tenant);
    } catch {
        res.status(500).send(error);
    }
});

// Get's all the tenants

app.get('/tenants', async (req, res) => {

    await tenantModel.find({}, (err, tenants) => {

        if (!err) {
            res.send(tenants);
        } else {
            console.log('error: ' + err)
        }

    });
});

// Get one tenant by _id

app.get('/tenant', async (req, res) => {
    await tenantModel.findById({_id})
})
