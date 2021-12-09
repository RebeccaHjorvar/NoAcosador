const { send } = require('process');

const mongoose = require('mongoose'),
    Event = mongoose.model('Event');


// Create event
exports.create_a_event = (req, res) => {
    let new_event = new Event(req.body);
    new_event.save((err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Get all events
exports.list_all_events = (req, res) => {
    Event.find({}, (err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Get an event by id
exports.get_an_event = (req, res) => {
    Event.findById(req.params.eventId, (err, event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(event);
    });
};

// Update an event
exports.update_an_event = (req, res) => {
    Event.findByIdAndUpdate(req.params.eventId, req.body, {new: true}, (err, updated_event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json(updated_event);
    });
};

// Delete an event
exports.delete_an_event = (req, res) => {
    Event.findByIdAndDelete(req.params.eventId, (err, deleted_event) => {
        if (err)
            res.send(`error: ${err}`);
        res.json({message: `event: - ${deleted_event} - has successfully been deleted.`})
    })
}