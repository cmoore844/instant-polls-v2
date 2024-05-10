<script>
    import Button from "../shared/Button.svelte";
    import pollstore from "../stores/store";
    import Card from "./Card.svelte";
    import { tweened } from 'svelte/motion';
    import axios from 'axios';
    import {DateTime} from 'luxon';
    export let poll;


    //reactive values that are bound to in-line styling elements. 
    //reactive values ONLY update the element itself and not the entire DOM. Useful for visualizing data that is constantly changing.
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;


    //tweened percentages for motion animations
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    //color conditions

    //date variable
    const dateCreated = DateTime.fromISO(poll.createdAt).toFormat('MM/dd/yyyy hh:mma ZZZZ')

    //handle votes. Option is the answer choices and we are taking in the unique ID of the poll
    //handleVote updates the store with the new poll data (upvotedPoll) and increments if a person votes on the poll
    const handleVote = (option, id) => {
        pollstore.update(currentPolls => { 
        
        //copied version of polls array after the updated vote
        let copiedPolls = [...currentPolls];
        console.log("Copied Polls", copiedPolls)

        //queries the upvoted poll itself based on the object ID
        let upvotedPoll = copiedPolls.find(poll => poll._id == id);
        console.log("UpvotedPoll", upvotedPoll);

  //pass reference to votesA or B as an object OR 
  //use the one patch call and wrap incrementing into a function
        if(option === 'a'){
          upvotedPoll.votesA++;
        }
        if(option === 'b'){
          upvotedPoll.votesB++;
        }
        
        axios.patch(`http://localhost:4000/api/castVotes/v1/${id}`, upvotedPoll);
        console.log("POLL", upvotedPoll);
        
        return copiedPolls;
        
        });
    };

    //event handler to delete a poll ONLY from the UI. Retains the DB record
    const handleDelete = (id) => {
      pollstore.update(currentPolls => {
        return currentPolls.filter(poll => poll._id != id);
      })
    };

    
//the below warning is due to non-interative element having a listener event. 
//This can be resolved by making the <span> a <button>
</script>

<Card>
    <div class="poll">
        <h3> {poll.question}</h3>
        <p>Total Votes: {totalVotes} 
        <br>Poll Created: {dateCreated}</p>
            <div class="answer" on:click={() => handleVote('a', poll._id)}>
                <div class="percent percent-a" style="width: {$tweenedA}% "></div>
                <span>{ poll.answerA } ({ poll.votesA } votes)</span>
                
            </div>
            <div class="answer" on:click={() => handleVote('b', poll._id)}>
                <div class="percent percent-b" style="width: {$tweenedB}% "></div>
                <span>{ poll.answerB } ({ poll.votesB } votes)</span>
            </div>
            <!-- <div class="submit">
              <Button flat={true} on:click={handleDelete()}>Submit</Button>
            </div> -->
            
        </div>

</Card>

<style>
    h3{
    margin: 0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.6;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }
  .percent{
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a{
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2)
  }
  .percent-b{
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2)
  }
  .submit{
    margin-top: 30px;
    text-align: right;
  }
</style>