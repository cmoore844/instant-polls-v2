import { writable, derived } from "svelte/store"; 

//this creates an empty data store for us to store the poll data
// export const Pollstore = writable([]). This data is ephemeral and is cached into the session only;

//Internal PollStore
// export const Pollstore = writable([
//     {
//         question: 'Python or JavaScript?',
//         answerA: 'Python',
//         answerB: 'JavaScript',
//         votesA: 9,
//         votesB: 15,
//     },
// ]);

//External PollStore
export const pollstore = writable([]);


export default pollstore;
