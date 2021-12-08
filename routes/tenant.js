const express = require('express');
const TenantSchema = require('../Models/tenant');
const app = express();

// Creates a new tenant

exports.createTenant = (req, res) => {
    new TenantSchema(req.body, (err, tenant) => {
        try {
            tenant.save();
            res.send(tenant);
        } catch {
            res.status(400).send('error: ' + err);
        }
    });
};

// Get's all the tenants

app.get('/tenants', async (req, res) => {
    await tenantModel.find({}, (err, tenants) => {
        try {
            res.send(tenants);
        } catch {
            res.status(500).send('error: ' + err);
        }
    });
});

// Get one tenant by _id

app.get('/tenant', async (req, res) => {
    await tenantModel.findOne({_id: req.body}, (err, foundTenant) => {
        try {
            res.send(foundTenant);
        } catch {
            res.status(500).send('error: ' + err);
        }
    });
});
