const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const username = 'user', password = '1234', cluster = 'noacosador.sszic', dbname = 'test';

// insert cluster url below
mongoose
    .connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`, 
    {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use("/api", routes)
        app.listen(3000, () => {
            console.log('Server is running at port 3000');
            });
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '));
db.once('open', () => {
    console.log('Successfully connected');
});

 //app.use(routes);
//  app.listen(3000, () => {
//  console.log('Server is running at port 3000');
//  });