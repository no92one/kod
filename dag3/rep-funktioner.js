console.log("Starta programmet")
console.log("Kör say_hi-funktionen")
say_hi()
say_hi()
say_hi()

console.log("Kör say_hi_2-funktionen")
say_hi_2("Linus")
say_hi_2("Erik")
say_hi_2("Fredrika")
say_hi_2("Sara")
say_hi_2("Pelle")
say_hi_2(59)

console.log("Kör say_hi_3-funktionen")
say_hi_3("Tjena tjena", "Linus")
say_hi_3("Goddag", "Erik")
say_hi_3("Tjolahop på dig", "Fredrika")


const trainTicketPrice = 250
person1 = {
    name: "Linus Lindroth",
    age: 31
}

person2 = {
    name: "Anna Falkenberg",
    age: 81
}

person3 = {
    name: "Zeke Berg",
    age: 14
}

console.log(`${person1.name} är ${person1.age} år. 
Då kostar en tåg biljett ${trainTicketPrice - get_discount(person1.age)} kr.
`)

console.log(`${person2.name} är ${person2.age} år. 
Då kostar en tåg biljett ${trainTicketPrice - get_discount(person2.age)} kr.
`)

console.log(`${person3.name} är ${person3.age} år. 
Då kostar en tåg biljett ${trainTicketPrice - get_discount(person3.age)} kr.
`)

// ----- Funktioner ------ 

function say_hi() {
    console.log("Hej, jag heter Linus!")
}

function say_hi_2(namn) {
    console.log(`Hej, jag heter ${namn}!`)
}

function say_hi_3(hej_fras, namn) {
    console.log(`${hej_fras}, jag heter ${namn}!`)
}

function get_discount(age) {
    // Om man är under 18 räknas man som barn och får 50 kr rabatt
    if (age < 18) {
        return 50
    }
    // Om man är 60 eller äldre räknas man som pensionär och får 100 kr rabatt
    else if (age >= 60) {
        return 100
    }
    // Om man är mellan 18-59 räknas man som vuxen och får ingen rabatt
    else {
        return 0
    }
}






