'use strict';

module.exports = (app) => {
    const Events = require('../controllers/eventController');

app.route('/event')
    .post(Events.create_an_event)
    .get(Events.get_all_events);

app.route('/event/:eventId')
    .get(Events.get_an_event)
    .put(Events.update_an_event)
    .delete(Events.delete_an_event);
};
