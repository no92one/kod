const prompt = require('prompt-sync')({ sigint: true });

// let run = true
// while (run) {
//     console.log(`\n--- Start Meny ---

// a. Avsluta programmet

// Ditt val -> `)
//     let menuChoice = prompt()

//     if (menuChoice === 'a ') {
//         run = false
//     }else {
//         console.log("Du har inte valt ett giltigt menyval!");
//     }
// }

// let age = Number.parseInt(prompt("How old are you? "))



// if (Age === 18) {
//     console.log(`You can drive at age ${age}.`)
// } else {
//     console.log(`allt gick fel!`)
// }


function mutate(aList) {
    let bList = [];
    for (let item of aList) {
        let newItem = item * 2;
        bList.push(newItem);
    }
    console.log(bList);
}

mutate([1, 2, 3, 5, 8, 13]);