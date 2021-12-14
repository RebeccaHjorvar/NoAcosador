module.exports = (app) => {
    const Events = require('../controllers/eventController');

app.route('/event')
    .post(Events.create_an_event)
    .get(Events.get_all_events);

app.route('/event/:eventId')
    .get(Events.get_an_event)
    .put(Events.update_an_event)
    .delete(Events.delete_an_event);

// All the api calls that the admin want to call regarding the events. 

app.route('/event/doorName/:doorName/:maxEntries')
    .get(Events.FindEntriesByDoor)

app.route('/event/eventName/:eventName/:maxEntries')
    .get(Events.FindEntriesByEvent)

app.route('/event/location/:location/:maxEntries')
    .get(Events.FindEntriesByLocation)

app.route('/event/tagNumber/:tagNumber/:maxEntries')
    .get(Events.FindEntriesByTag)

app.route('/event/tenantName/:tenantName/:maxEntries')
    .get(Events.FindEntriesByTenant)

app.route('/event/appartment/:appartment/:maxEntries')
    .get(Events.ListTenantsAt)

app.route('/event/logEntry')
    .post(Events.create_an_event)
}

