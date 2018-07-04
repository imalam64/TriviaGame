$( document ).ready(function() {
    console.log( "ready!" );

    var right = 0;
    var wrong = 0;
    var timer = 300;


    //create an answer checker function that is called
    //both when the times ends and when the user hits submit
    //add an alert that shows correct vs wrong
    function gameChecker(){
        var quest = [$('#question0 input').val(),
        $('#question1 input').val(),
        $('#question2 input').val(),
        $('#question3 input').val(), 
        $('#question4 input').val()]

        for (var i = 0; i < quest.length ; i++){
            if (quest[i] == true)(
                right++
            );
            else(
                wrong++
            );
        }

        alert('You got ' + right + ' right! And got ' +
            wrong + ' wrong!');

        if(wrong == 5)(
            alert('YOU GOT ALL OF THEM RIGHT!')
        );
    }

    //start a timer for 3 minutes when the page is loaded

    //create if else statement
    //if timer =0, 
    //else wait for the submit button

    //create a click function when the user hits submit
    //run the answer checker function


});