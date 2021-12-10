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
    Events.door.find({ doorName: req.params.doorName }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByEvent = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    else if(req.params.event === "DÖIN")
    {
        Events.find({ in: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(req.params.maxEntries)
    }
    else if(req.params.event === "DÖUT")
    {
        Events.find({ out: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(req.params.maxEntries)
    }
    else if(req.params.event === "ERROR")
    {
        Events.find({ error: "Unauthorized" }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(req.params.maxEntries)
    }
};

exports.FindEntriesByLocation = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    Events.door.find({ location: req.params.location }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByTag = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    Events.tag.find({ tagNumber: req.params.tagNumber }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(req.params.maxEntries)
};

exports.FindEntriesByTenant = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    Events.tag.tenant.find({ name: req.params.tenantName }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(req.params.maxEntries)
};

exports.ListTenantsAt = (req, res) => {
    if(req.params.maxEntries === null)
        req.params.maxEntries = 20;
    Events.tag.tenant.find({ appartment: req.params.appartment }, (err, event) => {
        if(err)
        res.send(err);
    res.json(event.tenant);
    }).limit(req.params.maxEntries)
};