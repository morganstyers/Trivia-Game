$(document).ready(function(){
  
  
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.answerVal);

})
var trivia={
timer: 30



}



function startGame(){
    $("#game").show()
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();
}
    //var questions
    //right/wrong/unanswered/timer/timerinfo
    //questions and answers
    //correct answers
    //incorrect answers
    
    //start function

    //answer validation
