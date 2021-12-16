const mongoose = require('mongoose'),
    Events = mongoose.model('Event'),
    Door = mongoose.model('Door'),
    Tag = mongoose.model('Tag'),
    Tenant = mongoose.model('Tenant')


// Create event
exports.create_an_event = (req, res) => {
    let new_event = new Events(req.body);
    if(req.body.event.error === "DÖIN")
    {
        new_event.in = true;
    }
    if(req.body.event.error === "DÖUT")
    {
        new_event.out = true;
    }
    new_event.door = req.body.event.door;
    new_event.tag = req.body.event.tag;
    new_event.error = req.body.event.error;
    new_event.tenant = req.body.event.tag.tenant;
    new_event.access = req.body.event.access;
    new_event.date = Date.now();

    if(new_event.access.includes(new_event.door.doorName))
    {
        new_event.save((err, event) => {
            if (err)
                res.send(`error: ${err}`);
            res.json(event);
        });
    }
    else
    {
        new_event.in = false;
        new_event.out = false;
        new_event.error = 'Unauthorized'
        new_event.save((err, event) => {
            if (err)
                res.send(`error: ${err}`);
            res.json(event);
        });
    }
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
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    Events.find( {'door.doorName': req.params.doorName} ).populate({path: 'door', select: 'doorName'}).limit(maxE).exec( (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    })
};

exports.FindEntriesByEvent = (req, res) => {
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    else if(req.params.eventName === "DÖIN")
    {
        Events.find({ in: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
    else if(req.params.eventName === "DÖUT")
    {
        Events.find({ out: true }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
    else if(req.params.eventName === "Unauthorized")
    {
        Events.find({ error: "Unauthorized" }, (err, event) => {
            if(err)
            res.send(err);
        res.json(event);
        }).limit(maxE)
    }
};

exports.FindEntriesByLocation = (req, res) => {
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    Events.find( {'door.location': req.params.location}).populate({path: 'door', select: 'location'}).limit(maxE).exec( (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    })
};

exports.FindEntriesByTag = (req, res) => {
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    Events.find({'tag.tagNumber': req.params.tagNumber}).populate({path: 'tag', select: 'tagNumber'}).limit(maxE).exec( (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    })
};

exports.FindEntriesByTenant = (req, res) => {
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    Events.find( {'tag.tenant.name': req.params.name} , (err, event) => {
        if(err)
        res.send(err);
    res.json(event);
    }).limit(maxE)
};

//
exports.ListTenantsAt = (req, res) => {
    let maxE = parseInt(req.params.maxEntries);
    
    if(isNaN(req.params.maxEntries))
    {
       maxE = 20; 
    }
    //finds tenant where appartment matches the parameters that was sent in, it then populates the tag path with tagid + tagnumbers that matches the tenants found
    Tenant.find( {'appartment': req.params.appartment, }).populate({path: 'tag', select: 'tagNumber'}).limit(maxE).exec(  (err, event) => {
        if(err)
        res.send(err);  
    res.json(event);
    })
};