'use strict';
const mongoose = require('mongoose'),
    Tenant = mongoose.model('Tenant');

exports.list_all_tenants = (req, res) => {
    Tenant.find({}, (err, tenant) => {
      if (err)
        res.send(err);
      res.json(tenant);
    });
  };

  exports.create_a_tenant = (req, res) => {
    let new_tenant = new Tenant(req.body);
    new_tenant.save((err, tenant) => {
      if (err)
        res.send(err);
      res.json(tenant);
    });
  };

  exports.get_a_tenant = (req, res) => {
    Tenant.findById(req.params.tenantId, (err, tenant) => {
      if (err)
        res.send(err);
      res.json(tenant);
    });
  };

  exports.update_a_tenant = (req, res) => {
    Tenant.findOneAndUpdate({_id: req.params.tenantId}, req.body, {new: true}, (err, task) => {
       if (err)
         res.send(err);
       res.json(tenant);
     });
   };

   exports.delete_a_tenant = (req, res) => {
    Tenant.remove({
      _id: req.params.tenantId
    }, (err, tenant) => {
      if (err)
        res.send(err);
      res.json({ message: 'Tenant successfully deleted' });
    });
  };


  