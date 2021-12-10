module.exports = (app) => {
    const door = require('../controllers/doorController');

app.route('/door')
.get(door.getAllDoors)
.post(door.createDoor)

app.route('/door/:id')
.get(door.findDoorById)
.put(door.updateDoor)
.delete(door.deleteDoor)
};