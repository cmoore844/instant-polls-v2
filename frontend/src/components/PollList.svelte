<script>
    import { fade, slide, scale} from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import {pollstore} from '../stores/store.js'
    import PollDetails from "./PollDetails.svelte";
    import { onMount } from 'svelte';
    import axios from 'axios';


    //onMount will run every time PollList.svelte is rendered in the DOM. 
    //This will give us the persisted npoll data from MongoDB

    let getData;

    onMount(async () => {

        try{
            const response = await axios.get('http://localhost:4000/api/getPollHistory/v1');
            getData = response.data

            pollstore.set(getData); 
            console.log("getData", getData)
            
            
        }catch{
            console.log("There was an internal error. Please try again later.")
        }
        
        return [];
    })


</script>

<!--for each loop is taking each object within the store and returning the details of that poll. 
    This Poll List component takes in Poll Details as a child component and passes in the poll as a prop. For API data, we can use
this same approach but we have to fetch the data and map over it to extract the values-->

<div class="poll-list">
    {#each $pollstore as poll (poll._id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails poll={poll} />
        </div>

    {/each}
</div> 
    

<!-- <h1>HeLLO</h1>
    <ul>
    {#each $drinkNames as drinkName}
        <li>{drinkName}</li>
       
    {/each}
    </ul> -->



<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>