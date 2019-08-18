$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").hide();
    $("p").hide();
    $("#start").slideUp().delay(3000).fadeIn();
    $("#start").on('click', trivia.startGame);
    
    
    
})
var trivia={
correct: 0,
incorrect:0,
unanswered: 0,
timer: 30,
timerOn: false,

startGame: function(){
    var questions=[ "question 1","question 1","question 1","question 1","question 1",];
    for(var i=0;i<questions.length;i++){
        var questionNumber= $("h4");
        questionNumber.text(questions[i]);
        $("#question").prepend(questionNumber);
    };

    $('#start').hide();
    $("#directions").hide();
    questionNumber.show("slow",function(){$("#q1").show('slow');});
    $("#remaining-time").append("00:"+ trivia.timer).delay(1000).show("slow");
},


    
}
    
