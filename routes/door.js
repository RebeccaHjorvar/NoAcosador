
app.post('/addDoor', async (req, res) => {
    new Doorschema(req.body, (err, door) => {
        try {
            await door.save();
            res.send("door create" + door);
        
        } catch {
            res.status(500).send('error: ' + err);
        }
    });
});



app.get('/door', async (req, res) => {
    await doorModel.findById({_id:req.body}).populate('event').execute(err, doorModel)
    {
        if(!err) {

            res.send(doorModel.event)

        }
        else
        {
            res.send(404)
        }
    }
})