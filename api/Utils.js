const mongoose = require('mongoose')

exports.mapAdminLog = (date, appartment, eventName, tagNumber) => {
    let paramDate = new Date(date);
    let DÖIN = false;
    let DÖUT = false;
    let theError = "";

    if(eventName === "DÖIN")
    {
        DÖIN = true;
        DÖUT = false;
        theError = "";
    }
    if(eventName === "DÖUT")
    {
        DÖIN = false;
        DÖUT = true;
        theError = "";
    }
    else
    {
        DÖIN = false;
        DÖUT = false;
        theError = `${eventName}`;
    }

    let theTag = mongoose.model('Tag')
    .findOne({ tagNumber: `${tagNumber}` })

    //The question is falsly writen. This makes more scense. 
    let theDoor = mongoose.model('Door')
        .findOne({ location: `${appartment}` })

    let new_entry = new AdminLog({
        door: theDoor,
        event: new Event({
            date: paramDate,
            in: DÖIN,
            ut: DÖUT,
            error: `${theError}`,
            tag: theTag._id
        })
    });

    return new_entry;
}