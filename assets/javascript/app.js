$( document ).ready( function(){
//start a timer for 3 minutes when the page is loaded
var threeMinutes = 30,
display = $('#timer');

function timeOut(){
    if (threeMinutes == 0)(
        gameChecker()
    );
};

function startTimer(duration, display) {
var timer = duration, minutes, seconds;

setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text("Time Remaining: " + minutes + ":" + seconds);
    if (--timer < 0) {
        timer = duration;
    }
}, 1000);
}

var right = 0;
var wrong = 0;

//creating reset for forms
function resetForm(){
    right = 0;
    wrong = 0;
    $('#question0').trigger("reset");
    $('#question1').trigger("reset");
    $('#question2').trigger("reset");
    $('#question3').trigger("reset");
    $('#question4').trigger("reset");
}

//create an answer checker function
//both when the timer ends and when the user hits submit
//add an alert that shows correct vs wrong
function gameChecker(){
    var quest = [
    $('#question0 input[type=radio][name=attempt0]:checked').val(),
    $('#question1 input[type=radio][name=attempt1]:checked').val(),
    $('#question2 input[type=radio][name=attempt2]:checked').val(),
    $('#question3 input[type=radio][name=attempt3]:checked').val(), 
    $('#question4 input[type=radio][name=attempt4]:checked').val()]

    for (var i = 0; i < quest.length ; i++){
        if (quest[i] == "true")(
            right++
        );
        else(
            wrong++
        );
    }

    alert('You got ' + right + ' right! And got ' +
        wrong + ' wrong!');

    if(right == 5)(
        alert('YOU GOT ALL OF THEM RIGHT!')
    );

    resetForm();
}

startTimer(threeMinutes, display);
timeOut();

//create a click function when the user hits submit
//run the answer checker function
$( "#submit" ).click(function(){
    gameChecker();
});

$( "#reset" ).click(function(){
    resetForm();
});
});

