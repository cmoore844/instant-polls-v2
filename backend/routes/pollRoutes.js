//all routes used by instant-polls web app
const express = require('express');

const router = express.Router();

//GET all polls (poll history)
router.get('/api/getPollHistory/v1', async (req, res) => {
    try{
        //actions
        //const results = await Poll.find();
        //return res.status(200).send(results);
    } catch(err){
        //catch the error
    }
})


//GET a singular poll 
router.get('/api/getPoll/v1/:id', async (req, res) => {
    try{
        //actions
        //const results = await Poll.find();
        //return res.status(200).send(results);
    } catch(err){
        //catch the error
    }
});



//POST a new poll
router.post('/api/addNewPoll/v1', async (req, res) => {
    try{
        //actions
        //const results = await Poll.create();
        //return res.status(200).send(results);
    } catch(err){
        //catch the error
    }
});


//UPDATE a current polls votes
router.patch('/api/castVotes/v1/:id', async (req, res) => {
    try{
        //actions
        //const results = Poll.findbyId(req.params.id);
        //return res.status(200).send(results);
    } catch(err){
        //catch the error
    }
});


//DELETE a poll
router.delete('/api/removePoll/v1/:id', async (req, res) => {
    try{
        //actions
        //const results = await Poll.findbyId(req.params.id);
        //return res.status(200).send(results);
    } catch(err){
        //catch the error
    }
});

//create variable for mongoose.model to store the name of the collection and the name of the schema 
//export the model to be used with other files in the project 
