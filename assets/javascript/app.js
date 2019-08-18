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
timerOn: false,

startGame: function(){
    timerOn=false;
    var timer= 30;
    if (!trivia.timerOn){
    var intervalId = setInterval(countdown, 1000);
    }
    
    var questions=[ "question 1","question 1","question 1","question 1","question 1",];
    for(var i=0;i<questions.length;i++){
        var questionNumber= $("h4");
        questionNumber.text(questions[i]);
        $("#question").prepend(questionNumber);
    };

    $('#start').hide();
    $("#directions").hide();
    questionNumber.show("slow",function(){$("#q1").show('slow');});
    $("#remaining-time").delay(1000).show("slow");
    $("#timer").show(slow)("00: ");
    
    function countdown(){
        timer--;
        $("#timer").text(timer);
        if(timer === 0){
            clearInterval(intervalId)
        }
   

    
}
    
}}