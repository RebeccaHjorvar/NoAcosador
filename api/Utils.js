const mongoose = require('mongoose')

exports.mapAdminLog = (date, appartment, eventName, tagNumber) => {
    let paramDate = date;
    let DÖIN = false;
    let DÖUT = false;
    let Error = "";

    if(eventName === "DÖIN")
    {
        DÖIN = true;
        DÖUT = false;
        Error = "";
    }
    if(eventName === "DÖUT")
    {
        DÖIN = false;
        DÖUT = true;
        Error = "";
    }
    else
    {
        DÖIN = false;
        DÖUT = false;
        Error = `${eventName}`;
    }

    let theTag = mongoose.model('Tag')
        .findOne({ tagNumber: `${tagNumber}` });

    let theDoor = mongoose.model('Door')
        .findOne({ location: `${appartment}` })

    let theTenant = mongoose.model('Tenant')
        .findOne({ tag: theTag });

    let theEvent = new Event({
        date: paramDate,
        in: DÖIN,
        ut: DÖUT,
        error: Error,
        tag: theTag
    });

    let new_entry = new AdminLog({
        door: theDoor,
        tag: theTag,
        tenant: theTenant,
        event: theEvent
    });

    return new_entry;
}