<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';

	//tab selections are sitting in an array called 'items'.
	//activeItem will be a variable to toggle between the two items in the 'items' array.
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls'

	//event handler to toggle between the tabs. 
	//Event fired by on:tabChange event listener in the <Tabs> element and takes in the default action 'e'
	const tabChangeHandler = (e) => {
		activeItem = e.detail;
		console.log(e.detail); //e.detail is the info of the activeItem. this ex: Current Polls or Add New Poll
	}

	//event listener that takes in handleAdd to handle logic of adding a new poll to the poll list
	const handleAdd = (e) => {
		activeItem = 'Current Polls';
	}

</script>

<!-- The control statement will conditonally render component based on activeItem that is toggled -->
<Header />
	<main>
		<Tabs items={items} activeItem={activeItem} on:tabChange={tabChangeHandler}/>
			{#if activeItem === 'Current Polls'}
				<PollList />
			{:else if activeItem === 'Add New Poll'}
				<CreatePollForm on:add={handleAdd}/>
			{/if}
	</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>