module.exports = (app) => {
    const doorList = require('./api/controllers/doorController');



app.route('/Door')
.get(doorList.getAllDoors)
.post(doorList.createDoor)

app.route('/door/:id')
.get(doorList.findDoorById)
.put(doorList.updateDoor)
.delete(doorList.deleteDoor)

const tenant = require('./api/controllers/tenantController');

app.route('/tenant')
    .get(tenant.list_all_tenants)
    .post(tenant.create_a_tenant);

app.route('/tenant/:tenantId')
    .get(tenant.get_a_tenant)
    .put(tenant.update_a_tenant)
    .delete(tenant.delete_a_tenant);

    const tag = require('./api/controllers/tagController');

    app.route('/tag')
        .get(tag.list_all_tags)
        .post(tag.create_a_tag);
    
    app.route('/tag/:tagId')
        .get(tag.look_up_tag)
        .put(tag.update_a_tag)
        .delete(tag.delete_a_tag);

};







