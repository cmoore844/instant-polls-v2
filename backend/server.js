require('dotenv').config(); //import dotenv
const express = require('express'); //import express
const app = express(); //fires the express app
const cors = require('cors');
const morgan = require('morgan');
const pollRoutes = require('./routes/pollRoutes');
const mongoose = require('mongoose');

//Middleware
app.use(cors({origin:"*"}));
app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//import routes for express to use. app.use(route)
app.use(pollRoutes);

//connection string to DB
const URI = 'mongodb://instantpollsdb:M77YDIAtGzDVY4xgje90mJB8hpivgsCX9nQYMs7BQRZYBOK4sasjlNuKnpyKtTlNI9TkiDE6aNdOACDbw7l0og%3D%3D@instantpollsdb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@instantpollsdb@' 
mongoose.connect(URI)
    .catch((err) => {
        console.log('Error connecting to Mongo.')
        console.log(err)
    })


//select the port to listen to requests coming to express/node server
app.listen(process.env.PORT, () => {
    console.log("Express listening on PORT 4000!");
})