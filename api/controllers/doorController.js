const mongoose = require('mongoose'),
Door = mongoose.model('Door');

exports.getAllDoors = (req, res) => {
    Door.find({}, (err, door) => { 
        if(err)
        res.send(err);

    res.json(door);
    })
}

exports.createDoor = (req, res) => {
    let newDoor = new Door(req.body);
    newDoor.save((err, door) => {

        if(err)
        res.send(err);

    res.json(door);
    })
}

exports.findDoorById = (req, res) => {
    Door.findById(req.params.id, (err, door) => {
        if(err)
        res.send(err);
    res.json(door);
    })
}

exports.updateDoor = (req, res) => {
    Door.findByIdAndUpdate({id: req.params.id}, req.body, {new: true}, (err, task) => {
        if (err)
        res.send(err);
    res.json(door);
    })
}

exports.deleteDoor = (req, res) => {
    Door.remove({_id: req.params.id}, (err, door) => {
        if(err)
        res.send(err);
    res.json({message: 'Door was successfully deleted!'})
    })
}