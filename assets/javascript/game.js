//Declare variables
var count = 60;
var running = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalId;

$(document).ready(function () {
    $("#mid_game_container").hide(); //show only start_container
    $("#end_container").hide();

})

//clicking start button will initiate game on mid_game_container
$("#start_button").click(function () {
    $("#start_container").hide();
    $("#mid_game_container").show();
    runTimer();
})

//When runTimer is called, countdown begins
function runTimer() {
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }

    function decrement() {
        $("#timer_number").html(count + " Seconds");
        count--;

        //stop timer if reach -1, and switch to end_container screen
        if (count === -1) {
            running = false;
            clearInterval(intervalId);

            timeUp();


        }
    }
}

//clicking on done button will switch screen to end_container
$("#done_button").click(function () {
    timeUp();
})

function stop() {
    running = false;
    clearInterval(intervalId);
}

//Show end_container and tally up correct, incorrect and unanswered questions
function timeUp() {


    $("#mid_game_container").hide();
    $("#end_container").show();

    // Checked values of Radio Buttons
    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();
    var Q6 = $('input:radio[name="q6"]:checked').val();
    var Q7 = $('input:radio[name="q7"]:checked').val();
    var Q8 = $('input:radio[name="q8"]:checked').val();
    var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();

    [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10].forEach(function (e) {
        if (e === undefined) {
            unanswered++;
        } else if (e === "1") {
            correct++;
        } else {
            incorrect++;
        }
    })
    console.log(unanswered);
    console.log(correct);
    console.log(incorrect);

    $("#correct_answers").html(correct);
    $("#wrong_answers").html(incorrect);
    $("#unanswered").html(unanswered);


};