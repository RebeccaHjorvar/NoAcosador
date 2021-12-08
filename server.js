const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/door');

Door = require('./Models/doors') //loading model

const username = 'user', password = '1234', cluster = 'noacosador.sszic', dbname = 'NoAcosador';

// insert cluster url below
mongoose
    .connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.listen(8005, () => {
            console.log('Server is running at port 8000');
            });
            routes(app);

        app.get('*', (req, res)=>{
        res.status(404).send({url: req.originalUrl + ' not found'})
        })
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '));
db.once('open', () => {
    console.log('Successfully connected');
});

