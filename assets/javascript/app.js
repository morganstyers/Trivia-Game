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
    $('#start').hide();
    $("#directions").hide();
    $("#timer").show()
    $("#timer").text("00:"+ trivia.timer);

    var questions=[ "question 1","question 1","question 1","question 1","question 1",];
    for(var i=0;i<questions.length;i++){
        var questionNumber= $("p");
        questionNumber.text(questions[i]);
        $("#question").append(questionNumber);
    };
    questionNumber.show("slow");
    

},


    
}
    
    

    
   
    


    //var questions
    //right/wrong/unanswered/timer/timerinfo
    //questions and answers
    //correct answers
    //incorrect answers
    
    //start function

    //answer validation
