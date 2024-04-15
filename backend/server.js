require('dotenv').config(); //import dotenv
const express = require('express'); //import express

const app = express(); //fires the express app

app.use(pollRoutes);
app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the app'});
}); 

//select the port to listen to requests coming to express/node server
app.listen(process.env.PORT, () => {
    console.log("Express listening on PORT 4000!");
})