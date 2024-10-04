// const lista = ["Linus", "Kalle", "Bengt"]
// console.log(lista)
// lista.push("Erik")
// console.log(lista)
// lista[0] = "Frank"
// console.log(lista)

// console.log(lista[5])
// lista[5] = "Peter"
// console.log(lista)
// console.log(lista[5])
// lista.push(8, 10, 15)
// console.log(lista)



let nummer = [1, 2, 3, 4, 5];

const nyArray = nummer.splice(2, 2, 8);  // Ta bort ett element vid index 2 och lägg till 8
console.log(nyArray);
console.log(nummer);  // Output: [1, 2, 8, 4, 5]

const nummer2 = [1, 2, 3, 4, 5];

const nyArray2 = nummer2.slice(1, 4);
console.log(nyArray2);  // Output: [2, 3, 4]
console.log(nummer2);