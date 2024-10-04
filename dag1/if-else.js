const age = 15
const points = 1001

if (age < 16) {
    console.log("Naj, du får ju inte handla redbull än!")
} else if (points >= 2000) {
    console.log("Du får handla REDBULL och du får 20% rabatt!!!")
}
else if (points >= 1000) {
    console.log("Du får handla REDBULL och du får 10% rabatt!!!")
}
else {
    console.log("Du får handla REDBULL!")

}

if (points >= 1000 && age >= 16) {
    console.log("Du får handla REDBULL och du får 10% rabatt!!!")
} else if (age >= 16) {
    console.log("Du får handla REDBULL!")
} else {
    console.log("Naj, du får ju inte handla redbull än!")
}

if (age >= 16) {
    if (points >= 1000) {
        console.log("Du får handla REDBULL och du får 10% rabatt!!!")
    } else {
        console.log("Du får handla REDBULL!")
    }
} else {
    console.log("Naj, du får ju inte handla redbull än!")
}


