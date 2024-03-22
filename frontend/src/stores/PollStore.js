import { writable } from "svelte/store"; 

//this creates an empty data store for us to store the poll data
const Pollstore = writable([
    {
        id: 1,
        question: 'Python or JavaScript?',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 9,
        votesB: 15,
    },
]);

export default Pollstore;
