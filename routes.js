
'use strict';

module.exports = (app) => {
  const tenantList = require('./routes/tenant')

  app.route('/tenant')
  .get(tenantList.createTenant)
  .post(tenantList.createTenant);
};