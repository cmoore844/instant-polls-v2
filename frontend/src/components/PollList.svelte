<script>
    //import { onDestroy, onMount } from 'svelte';
    import { fade, slide, scale} from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import PollStore from '../stores/PollStore.js'
    import PollDetails from "./PollDetails.svelte";

</script>
<!--for each loop is taking each object within the store and returning the details of that poll. 
    This Poll List component takes in Poll Details as a child component and passes in the poll as a prop-->
<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails poll={poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>