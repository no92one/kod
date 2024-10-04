let x = 3
let y = 10

function printMyName() {
    console.log("Linus")
    console.log(x + y)
}

printMyName()

calc(5, 10)
calc(1, 5)
calc(20, 15)
calc()
calc(10)
calc(10, 10)
calc(undefined, 10)

function calc(a = 1, b = 2, c = 3) {
    console.log(a + b + c)
}

console.log("---- calc2 ----")
const resultat = calc2(10, 5)
console.log(resultat);
console.log(typeof resultat);

console.log(calc2(50, 67));

function calc2(a, b) {
    return a + b
}


