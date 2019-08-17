$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
})
var trivia={
timer: 30,

startGame: function(){
    $('#remaining-time').show();
    $('#timer').text(trivia.timer);
    $('#start').hide();
}
}

    //var questions
    //right/wrong/unanswered/timer/timerinfo
    //questions and answers
    //correct answers
    //incorrect answers
    
    //start function

    //answer validation
