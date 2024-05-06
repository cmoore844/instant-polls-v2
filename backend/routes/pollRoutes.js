//Poll routes used by instant-pollsv2 web app

const express = require('express'); //importing express 
const router = express.Router(); //express creates a router to the main NodeJS server file
const Poll = require('../models/Poll'); //imports the data/mongoose schema model

//GET all polls (poll history)
router.get('/api/getPollHistory/v1', async (req, res) => {
    try{
        const results = await Poll.find();
        res.status(200).send(results)
    } catch(err){
        res.status(500).send("Something went wrong")
        console.log(err);
    }
});


//GET a Poll by ID
router.get('/api/getPoll/v1/:id', async (req, res) => {
    try{
        const results = await Poll.findById(req.params.id);
        return res.status(200).send(results);
    } catch(err){
        res.status(500).send("Something went wrong")
        console.log(err);
    }
});


//ADD a new poll
router.post('/api/addNewPoll/v1', async (req, res) => {

    try{
        //check if the new question is unique and not already recorded in the database. 

            const newPoll = await Poll.create(req.body); // creates a new record from the body of the API request 
                newPoll.save(); //saves record to DB
                console.log("POST SUCCESS!", newPoll);
        return res.status(200).send(newPoll);

    } catch(err){
        res.status(500).send("Something went wrong")
        console.log(err);
    }
});


//UPDATE a current polls votes
router.patch('/api/castVotes/v1/:id', async (req, res) => {
    try{
        const updatedPoll = await Poll.findByIdAndUpdate(req.params.id, req.body)
            updatedPoll.save(); //save updated record to DB
        return res.status(200).send(updatedPoll);
    } catch(err){
        res.status(500).send("Something went wrong, try again");
        console.log(err);
    }
});


//DELETE a poll
router.delete('/api/removePoll/v1/:id', async (req, res) => {
    try{
        const deletePoll = await Poll.findByIdAndDelete(req.params.id);
        return res.status(200).send("Poll Deleted" + "\n" + deletePoll);
    } catch(err){
        res.status(500).send("Poll Not Found");
        console.log(err);
    }
});

//create variable for mongoose.model to store the name of the collection and the name of the schema 
//export the model to be used with other files in the project 
module.exports = router;
