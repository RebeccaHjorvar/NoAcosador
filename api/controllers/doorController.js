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
    Door.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, door) => {
        if (err)
        res.send(err);
    res.json(door);
    })
}

exports.deleteDoor = (req, res) => {
    Door.remove({_id: req.params.id}, (err, door) => {
        if(err)
        res.send(err);
    res.json({message: `Door ${door} was successfully deleted!}`})
    })
}

exports.getEventsOnDoor = (req, res) => {
    // Finds door by id, specifies what we want to see in door.(events)
    // TODO - create a route and create events on doors
    Door.findById(req.params.doorId, 'events', (err, doorEvents) => {
        if(err)
            res.send(err)
        res.json(doorEvents)
    });
    // hitta dörren

    // gå in i events i dörren

    // lista upp de 20 senaste events som har hänt dörren

    //get list of events on doorID

    // find one var specific vad du söker

    // findById så fattar moongose vad du söker efter så första parametern är id

    // sortera events på dörr så att senaste kommer högst upp i listan


}