const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || '3000';

// model loading
Tenant = require('./api/models/tenantModel')
Tag = require('./api/models/tagModel')
Door = require('./api/models/doorModel')

//db url
const username = 'user', password = '1234', cluster = 'noacosador.sszic', dbname = 'NoAcosador';
const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`

// moongose connection
mongoose
    .connect(uri,
    {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(res=> {
        console.log("DB Connected!")
    }).catch(err => {
        console.log(Error, err.message);
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Import Routes
const routes = require('./routes')


// Register routes
routes(app);


app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
    })

app.listen(port);
console.log('mucho bueno RESTful API server started on: ' + port);
