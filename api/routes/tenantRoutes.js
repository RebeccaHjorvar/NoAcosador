'use strict';
module.exports = (app) => {
    const tenant = require('../controllers/tenantController');

app.route('/tenant')
    .get(tenant.list_all_tenants)
    .post(tenant.create_a_tenant);

app.route('/tenant/:tenantId')
    .get(tenant.get_a_tenant)
    .put(tenant.update_a_tenant)
    .delete(tenant.delete_a_tenant);

};

// app.post('/addTenant', async (req, res) => {
//     new tenantModel(req.body, (err, tenant) => {
//         try {
//             await tenant.save();
//             res.send(tenant);
//         } catch {
//             res.status(500).send('error: ' + err);
//         }
//     });
// });

// Get's all the tenants

// app.get('/tenants', async (req, res) => {
//     await tenantModel.find({}, (err, tenants) => {
//         try {
//             res.send(tenants);
//         } catch {
//             res.status(500).send('error: ' + err);
//         }
//     });
// });

// // Get one tenant by _id

// app.get('/tenant', async (req, res) => {
//     await tenantModel.findOne({_id: req.body}, (err, foundTenant) => {
//         try {
//             res.send(foundTenant);
//         } catch {
//             res.status(500).send('error: ' + err);
//         }
//     });
// });
