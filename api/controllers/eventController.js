const mongoose = require('mongoose'),
    Events = mongoose.model('Event')


// Create event
exports.create_an_event = (req, res) => {
    let new_event = new Events(req.body);
    new_event.save((err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Get all events
exports.get_all_events = (req, res) => {
    Events.find({}, (err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Get an event by id
exports.get_an_event = (req, res) => {
    Events.findById(req.params.eventId, (err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Update an event
exports.update_an_event = (req, res) => {
    Events.findByIdAndUpdate(req.params.eventId, req.body, {new: true}, (err, updated_event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(updated_event);
    });
};

// Delete an event
exports.delete_an_event = (req, res) => {
    Events.findByIdAndDelete(req.params.eventId, (err, deleted_event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json({message: `event: - ${deleted_event} - has successfully been deleted.`})
    })
};

// Handels the api calls from the Admin regarding the events. 

exports.FindEntriesByDoor = (req, res) => { 
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    Events.find( {'door.doorName': `${req.params.doorName}` }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(maxE)
};

exports.FindEntriesByEvent = (req, res) => {
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    else if(req.params.eventName === "IN")
    {
        Events.find({ in: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
    else if(req.params.eventName === "UT")
    {
        Events.find({ out: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
    else if(req.params.eventName === "ERROR")
    {
        Events.find({ error: "Unauthorized" }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
};

exports.FindEntriesByLocation = (req, res) => {
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    Events.find({ 'door.location': `${req.params.location}` }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(maxE)
};

exports.FindEntriesByTag = (req, res) => {
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    Events.find({ 'tag.tagNumber': `${req.params.tagNumber}` }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(maxE)
};

exports.FindEntriesByTenant = (req, res) => {
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    Events.find({ 'tag.tenant.name': `${req.params.tenantName}` }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(maxE)
};

exports.ListTenantsAt = (req, res) => {
    let maxE = req.params.maxEntries;
    if(maxE === 0)
        maxE = 20;
    Events.tag.tenant.find({ appartment: req.params.appartment }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event.tenant);
    }).limit(maxE)
};