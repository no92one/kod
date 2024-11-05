/*
  Teaches:

    listening to clicks
    selecting elements
    appending to elements
    prepending to elements
    reading attributes
    checking if an element exists

And more:
    using delegated events
    stopping propagation

 Important:
    Use delegated events:
    $('permanent-parent').on('click', 'selector', function)

   1. When clicking on the red ball, move it into the red square
   */
// $(".red.ball").on("click", moveBallToRedSquare)

function moveBallToRedSquare() {
    $(".red.square").append(this)
}


/*
2. When clicking the blue ball, move it into the blue square
*/

// $(".blue.ball").on("click", moveBallToBlueSquare)

function moveBallToBlueSquare() {
    $(".blue.square").append(this)
}

/*
3. When clicking on any ball, move it to inside its colored square. Don't hard code any colors.
*/

$(".balls").on("click", ".ball", moveBallToSquare)

function moveBallToSquare() {
    let ball = $(this)
    let classes = ball.attr("class").split(" ")
    let color = classes[0]
    let selector = "." + color + ".square"
    $(selector).append(ball)


    // console.log("ball - ", ball)
    // console.log("ball - ", ball.attr("class"))
    // console.log("classes - ", classes)
    // console.log("color - ", color)
    // console.log("selector - ", selector)
}


/*
 4. When clicking on a ball in a box, move it back to where it was in the start. Can you do it without hard coding any colors?

 Important: You must stop the click from reaching the box.. Use event.stopPropagation() to achieve that. Example:
 function doThisOrThat(event){
    event.stopPropagation()
 }   
 */

$(".squares").on("click", ".ball", removeBallFromSquare)

function removeBallFromSquare(event) {
    event.stopPropagation()
    $(".balls").append($(this))
}

/*
5. If you click an empty square, remove it.
*/
$(".squares").on("click", ".square", removeSquare)

function removeSquare() {
    const length = $(this).children().length
    // console.log($(this).children().length);
    if (length == 0) {
        $(this).remove()
    }

}


/*
6. Now, if you click on a ball and there's no square to move it into, remove the ball too.
 */

$(".balls").on("click", ".ball", removeBall)

function removeBall() {
    let ball = $(this)
    let classes = ball.attr("class").split(" ")
    let color = classes[0]
    let selector = "." + color + ".square"
    const square = $(selector)
    // console.log("square - ", square)
    console.log("square.length - ", square.length)

    if (square.length == 0) {
        ball.remove()
    }
}