let text1 = "Hej"
let text2 = "på"
let text3 = "dej!"

let element = $(`<div id="1234">
    <p>${text1}</p>
    <p>${text2}</p>
    <p>${text3}</p>
</div >`)

$("body").html(element)
