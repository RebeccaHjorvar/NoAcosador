

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