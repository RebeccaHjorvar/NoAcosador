'use strict';

module.exports = (app) => {
    const event = require('../controllers/eventController');

app.route('/event')
    .post(event.create_an_event)
    .get(event.get_all_events);

app.route('/event/:eventId')
    .get(event.get_an_event)
    .put(event.update_an_event)
    .delete(event.delete_an_event);
};
