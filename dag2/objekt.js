// const bilLista = ["S90", "Volvo", 2020]

// const bilObjekt = {
//     modell: 'S90',
//     märke: 'Volvo',
//     år: 2020
// }

// console.log(bilLista[0])
// console.log(bilObjekt.märke)

function Person(namn) {
    this.namn = namn
    this.häsla = function () {
        console.log("Hej, jag heter " + this.namn);
    }
}

const anna = new Person("Anna Eriksson")
const karl = new Person("Karl Liljeholm")
const peter = new Person("Peter Ek")
anna.häsla()
karl.häsla()
peter.häsla()
