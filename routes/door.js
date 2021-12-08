module.exports = (app) => {
    const doorList = require('../controllers/doorController');

app.route('/Door')
.get(doorList.getAllDoors)
.post(doorList.createDoor)

app.route('/door/:id')
.get(doorList.findDoorById)
.put(doorList.updateDoor)
.delete(doorList.deleteDoor)
};