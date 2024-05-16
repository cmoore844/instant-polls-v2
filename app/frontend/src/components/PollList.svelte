
<script>
    import { fade, slide, scale} from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import {pollstore} from '../stores/store.js'
    import PollDetails from './PollDetails.svelte';
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { SyncLoader } from 'svelte-loading-spinners';

    //conditional loading
    let isPending = true;

    //onMount will run every time PollList.svelte is rendered in the DOM. 
    //This will give us the persisted npoll data from MongoDB
    let getData;
    onMount(async () => {

        try{
            const response = await axios.get('http://localhost:4000/api/getPollHistory/v1');
            getData = response.data
            pollstore.set(getData); 
            console.log("getData", getData);
            isPending = false;
            
            
        }catch{
            console.log("There was an internal error. Please try again later.")
        }
        
        return [];
    });

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

{#if isPending}
<div class="loader">
	<SyncLoader size="60" color="#FF3E00" unit="px" duration="1s" />
</div>
{/if}

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .loader{
        justify-content:center;
        display: flex;
    }
</style>