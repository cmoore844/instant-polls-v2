<script>
    import pollstore from "../stores/store";
    import Button from "../shared/Button.svelte";
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    import axios from 'axios';


    //fields is an object that will hold all the main polling content. 
    //errors is an object that will hold all the custom error validations. 
    //valid is a boolean that is used to help with error validations
    let fields = { question: '', answerA: '', answerB: ''};
    let errors = { question: '', answerA: '', answerB: ''};
    let valid = false;
    

    const onSumbit = async () => {
        //if valid remains true, the poll will be submitted successfully. 
        //If not, one of the errors will be triggered, and poll will not be submitted.
        valid = true;
        
        // validate question
        if (fields.question.trim().length < 5){
            valid = false;
            errors.question = 'Question must be at least 5 characters long'
        } else {
            errors.question = '';
        }

        // validate answer A
        if (fields.answerA.trim().length < 1){
            valid = false;
            errors.answerA = 'Question must be at least 1 characters long'
        } else {
            errors.answerA = '';
        }

        // validate answer B
        if (fields.answerB.trim().length < 1){
            valid = false;
            errors.answerB = 'Question must be at least 1 characters long'
        } else {
            errors.answerB = '';
        }

        // // add new poll
        if(valid){
            let poll = {...fields, votesA: 0, votesB: 0, createdAt: 1}
            //save poll to store
            //save to DB as a POST REQUESET
            // pollstore.update(currentPolls => {
            //     return [poll, ...currentPolls];
            // });
            try{
                const newPoll = await axios.post('http://localhost:4000/api/addNewPoll/v1', poll) //post new poll to database
                console.log("POST SUCCESSFUL..", newPoll.data);
    

            } catch(err){
                console.log(err.message);
            }

            dispatch('add');
        }

    }
    
</script>

<!--the actual form itself. preventDefault to avoid refreshing the DOM after form submission.
There is also data binding to bind the values of the input elements to the user input-->
<form on:submit|preventDefault={onSumbit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question} required>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} required>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} required>
        <div class="error">{errors.answerB}</div>
    </div>
   <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>