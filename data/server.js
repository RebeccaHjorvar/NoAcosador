const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();

app.use(express.json());

const username = '', password = '', cluster = '', dbname = '';

// insert cluster url below
mongoose.connect(
    'mongodb+srv://Rebecca:1234@noacosador.sszic.mongodb.net/test', 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error: '));
db.once('open', () => {
    console.log('Successfully connected');
});

app.use(Router);
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});