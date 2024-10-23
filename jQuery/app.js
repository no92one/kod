$("#rubrik").on("click", clickH1)
$("p").on('click', clickP)
$("p, h1").on("mouseenter", onHover)
$("p, h1").on("mouseleave", offHover)

function clickH1() {
    alert("Du har klickat på H1!")
    $(this).hide()
}

function clickP() {
    console.log("Du har tryckt på p-elementet!")
    $("#rubrik").show()
}

function onHover() {
    $(this).addClass("hover")
    $(this).html("Nu hovrar du!!")
}

function offHover() {
    $(this).removeClass("hover")
    $(this).html("Klicka på mig för att se rubriken igen!")
}