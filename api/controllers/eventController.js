const mongoose = require('mongoose'),
    Events = mongoose.model('Event');


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
}