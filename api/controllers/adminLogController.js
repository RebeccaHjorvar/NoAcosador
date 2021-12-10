const mongoose = require('mongoose'),
AdminLog = mongoose.model('AdminLog');
Utils = require('../Utils')

exports.FindEntriesByDoor = (req, res) => {
    AdminLog.door.find({ doorName: req.params.doorName }, (err, adminLog) => {
        if(err)
        res.send(err);
    res.json(adminLog);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByEvent = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    else if(req.params.event === "DÖIN")
    {
        AdminLog.event.find({ in: true }, (err, adminLog) => {
            if(err)
            res.send(err);
        res.json(adminLog);
        }).limit(req.params.maxEntries)
    }
    else if(req.params.event === "DÖUT")
    {
        AdminLog.event.find({ ut: true }, (err, adminLog) => {
            if(err)
            res.send(err);
        res.json(adminLog);
        }).limit(req.params.maxEntries)
    }
    else if(req.params.event === "ERROR")
    {
        AdminLog.event.find({ error: "Unauthorized" }, (err, adminLog) => {
            if(err)
            res.send(err);
        res.json(adminLog);
        }).limit(req.params.maxEntries)
    }
};

exports.FindEntriesByLocation = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    AdminLog.door.find({ location: req.params.location }, (err, adminLog) => {
        if(err)
        res.send(err);
    res.json(adminLog);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByTag = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    AdminLog.tag.find({ tagNumber: req.params.tagNumber }, (err, adminLog) => {
        if(err)
        res.send(err);
    res.json(adminLog);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByTenant = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    AdminLog.tenant.find({ name: req.params.tenantName }, (err, adminLog) => {
        if(err)
        res.send(err);
    res.json(adminLog);
    }).limit(req.params.maxEntries)
};

exports.ListTenantsAt = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    AdminLog.tenant.find({ appartment: req.params.appartment }, (err, adminLog) => {
        if(err)
        res.send(err);
    res.json(adminLog.tenant);
    }).limit(req.params.maxEntries)
};

exports.LogEntry = (req, res) => {
    let new_entry = Utils.mapAdminLog(req.params.date, req.params.appartment, req.params.event, req.params.tagNumber);
    new_entry.save((err, adminLog) => {
      if (err)
        res.send(err);
      res.json(adminLog);
    });
  };