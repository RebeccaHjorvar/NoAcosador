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

