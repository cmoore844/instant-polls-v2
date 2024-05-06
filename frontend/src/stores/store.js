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

/** 
//Create a derived store to hold the apiData
**/
// export const drinkNames = derived(pollstore , ($pollstore ) => {
//     if($pollstore.drinks){
//         return $pollstore.drinks.map((drink) => [drink.strDrink, drink.idDrink]);
//     }
//     return [];
// });

export default pollstore;
