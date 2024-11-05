const player1 = {
    name: "Player 1",
    points: 0
}

const player2 = {
    name: "Player 2",
    points: 0
}

$("#p1Points").html(player1.points)
$("#p2Points").html(player2.points)
$("#p1Name").html(player1.name)
$("#p2Name").html(player2.name)

$("#settingsImage").on("mouseenter", function () {
    $(this).addClass("settingsImageHover")
})

$("#settingsImage").on("mouseleave", function () {
    $(this).removeClass("settingsImageHover")
})

$(".addButton").on("mouseenter", function () {
    $(this).addClass("addButtonHover")
})

$(".removeButton").on("mouseenter", function () {
    $(this).addClass("removeButtonHover")
})

$(".addButton").on("mouseleave", function () {
    $(this).removeClass("addButtonHover")
})

$(".removeButton").on("mouseleave", function () {
    $(this).removeClass("removeButtonHover")
})


$("#p1AddBtn").on("click", function () {
    if (player1.points < 10 && player2.points < 10) {
        player1.points += 1
        $("#p1Points").html(player1.points)
        if (player1.points == 10) {
            $("#winnerText").html(`${player1.name} har vunnit!`)
            $("#winnerBox").slideDown()
        }
    }
})

$("#p2AddBtn").on("click", function () {
    if (player1.points < 10 && player2.points < 10) {
        player2.points += 1
        $("#p2Points").html(player2.points)
        if (player2.points == 10) {
            $("#winnerText").html(`${player2.name} har vunnit!`)
            $("#winnerBox").slideDown()
        }
    }
})

$("#p1RemoveBtn").on("click", function () {
    if (player1.points < 10 && player2.points < 10) {
        if (player1.points > 0) {
            player1.points -= 1
            $("#p1Points").html(player1.points)
        } else {
            alert("Player 1 får inte ha mindre än 0 poäng.")
        }
    }
})

$("#p2RemoveBtn").on("click", function () {
    if (player1.points < 10 && player2.points < 10) {
        if (player2.points > 0) {
            player2.points -= 1
            $("#p2Points").html(player2.points)
        } else {
            alert("Player 2 får inte ha mindre än 0 poäng.")
        }
    }
})

$("#resetBtn").on("click", function () {
    player1.points = 0
    player2.points = 0
    $("#p1Points").html(player1.points)
    $("#p2Points").html(player2.points)
    $("#winnerBox").slideUp()
})