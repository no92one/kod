/*
Du ska skapa en poängräknare för 2 spelare. Spelarna ska börja på 0 poäng och först till 10 vinner. 

1. Visa spelarnas namn och poäng
2. Det ska finnas knappar som lägger till 1 poäng eller tar bort 1 poäng för respektive spelare.
3. En spelare ska inte kunna få mindre än 0 poäng, om man försöker göra det ska en varningsruta komma fram.
4. När en spelare får 10 poäng ska det komma fram en tex som berättar vem som har vunnit, samt en återstälningsknapp som nollställer poängen.
5. När en spalare får 10 poäng ska man inte kunna uppdatera poängen längre.
6. Gör så att spelare kan ändra sina spelarnamn.  
*/

const player1 = {
    name: "Kalle",
    score: 0,
    wins: 0
}

const player2 = {
    name: "Player 2",
    score: 0,
    wins: 0
}


$("#p1Score").html(player1.score)
$("#p2Score").html(player2.score)
$("#p1Name").html(player1.name)
$("#p2Name").html(player2.name)

$("#p1Add").on("click", p1AddScore)
$("#p2Add").on("click", p2AddScore)
$("#p1Remove").on("click", p1RemoveScore)
$("#p2Remove").on("click", p2RemoveScore)

function p1AddScore() {
    player1.score += 1
    $("#p1Score").html(player1.score)
}

function p1RemoveScore() {
    if (player1.score > 0) {
        player1.score -= 1
        $("#p1Score").html(player1.score)
    } else {
        alert("Player 1 kan inte ha mindre än 0 poäng")
    }
}

function p2AddScore() {
    player2.score += 1
    $("#p2Score").html(player2.score)
}

function p2RemoveScore() {
    if (player2.score > 0) {
        player2.score -= 1
        $("#p2Score").html(player2.score)
    } else {
        alert("Player 2 kan inte ha mindre än 0 poäng")
    }
}