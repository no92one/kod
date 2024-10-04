// let x = 100

// console.log("while-loopen startar")
// while (x < 10) {
//     console.log(x)
//     x++;
// }
// console.log("while-loopen slutar")


// let y = 100

// console.log("do-while-loopen startar")
// do {
//     console.log(y)
//     y++;
// } while (y < 10)
// console.log("do-while-loopen slutar")


// for (let i = 0; i <= 5;/* kör Kod bloket om vilkoret är sant;*/ i++) {
//     console.log(i)
//     console.log((i + 1) * 8)
// }


const lista = ["Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven", "Linus", "Kalle", "Erik", "Bethoven"]

// for (let i = 0; i < lista.length; i++) {
//     console.log(`Iterations runda = ${i}.`)
//     console.log(i)
//     console.log(lista[i])
// }

// `Iterations runda = ${i}.` = `Iterations runda = 0`
// 'Iterations runda = ' + i + '.' = 'Iterations runda = 0'
// "Iterations runda = " + i + "." = "Iterations runda = 0"


for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i]}`)
}

// console.log(lista[0])
// console.log(lista[1])
// console.log(lista[2])
// console.log(lista[3])
