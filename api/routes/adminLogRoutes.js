module.exports = (app) => {
    const adminLog = require('../controllers/adminLogController');

// All the api calls that the admin want to call regarding the logs. 

app.route('/adminLog/:doorName/:maxEntries')
    .get(adminLog.FindEntriesByDoor)

app.route('/adminLog/:event/:maxEntries')
    .get(adminLog.FindEntriesByEvent)

app.route('/adminLog/:location/:maxEntries')
    .get(adminLog.FindEntriesByLocation)

app.route('/adminLog/:tagNumber/:maxEntries')
    .get(adminLog.FindEntriesByTag)

app.route('/adminLog/:tenantName/:maxEntries')
    .get(adminLog.FindEntriesByTenant)

app.route('/adminLog/:appartment/:maxEntries')
    .get(adminLog.ListTenantsAt)

app.route('/adminLog/:date/:appartment/:event/:tagNumber')
    .post(adminLog.LogEntry)
};