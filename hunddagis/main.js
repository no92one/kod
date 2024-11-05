const prompt = require('prompt-sync')({ sigint: true });
const dogList = []
addNewDog("Blixten", "Golden", "Guld")
addNewDog("Zixten", "Bulldog", "Vit")
addNewDog("Pluto", "Tax", "Mörkbrun")


let run = true
while (run) {
    console.log(`
--- Start ---        
        
1. Skriva ut listan på hundar
2. Registrera ny hund
3. Avregistrera en hund
4. Redigera en hund information
5. Checka in/ut hundar
a. Avsluta programmet
       `)

    let menuChoice = prompt("-> ")

    switch (menuChoice.trim().toLowerCase()) {
        case "1":
            printDogList()
            break

        case "2":
            addNewDogMenu()
            break

        case "3":
            removeDogMenu()
            break

        case "4":
            console.log("WIP")
            break

        case "5":
            console.log("WIP")
            break

        case "a":
            console.log("Programmet avslutas!")
            run = false
            break

        default:
            console.log("Ogiltigt menyval! Du måste välja 1-5 eller a.")
            break
    }
}



function printDogList() {
    console.log(`--- Hundlista ---

id - namn - ras - färg - inchekad`)
    for (let i = 0; i < dogList.length; i++) {
        console.log(`${i + 1}. ${dogList[i].name} - ${dogList[i].race} - ${dogList[i].color} - ${dogList[i].checkedIn}`)
    }
}


function addNewDogMenu() {
    let name = ""
    let race = ""
    let color = ""

    let run = true
    while (run) {
        console.log(`
--- Lägg till ny hund ---

1. Namn   -> ${name}
2. Ras    -> ${race}
3. Färg   -> ${color}

s. Spara hunden
b. Gå tillbaka
`)
        const menuChoice = prompt("-> ").trim().toLowerCase()
        switch (menuChoice) {
            case "1":
                name = prompt("Namn ->")
                break

            case "2":
                race = prompt("Ras ->")
                break

            case "3":
                color = prompt("Färg ->")
                break

            case "s":
                addNewDog(name, race, color)

                console.log(`${name} - har sparats i hundlistan!`)

                name = ""
                race = ""
                color = ""
                break

            case "b":
                run = false
                break

            default:
                console.log("Ogiltigt menyval! Du måste välja 1-3, s eller b.")
                break

        }
    }
}


function removeDogMenu() {
    let run = true
    while (run) {

        printDogList()

        console.log(`
b. Gå tillbaka till startmenyn
`)
        const menuChoice = prompt("-> ").trim()

        if (menuChoice > 0 && menuChoice <= dogList.length) {
            removeDog(menuChoice - 1)
        } else if (menuChoice.toLowerCase() == "b") {
            run = false
        } else {
            console.log("Ogiltigt menyval! Du måste välja ett giltigt id eller b.")
        }

    }
}



function addNewDog(name, race, color) {
    const newDog = {
        name: name,
        race: race,
        color: color,
        checkedIn: false
    }

    dogList.push(newDog)
}

function removeDog(index) {
    dogList.splice(index, 1)
}