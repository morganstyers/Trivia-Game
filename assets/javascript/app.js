$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
})
var trivia={
correct: 0,
incorrect:0,
unanswered: 0,
timer: 30,
timerOn: false,
questions:{
    question1:"this will be a question",
    question2:"this will be a question",
    question3:"this will be a question",
    question4:"this will be a question",
    question5:"this will be a question"
},
answerChoices:{
    question1:["answer op","answer op2","answer op3"],
    question2:["answer op","answer op2","answer op3"],
    question3:["answer op","answer op2","answer op3"],
    question4:["answer op","answer op2","answer op3"],
    question5:["answer op","answer op2","answer op3"]
},
correctAnswer:{
    question1:"answer op 3",
    question2:"answer op 1",
    question3:"answer op 2",
    question4:"answer op 2",
    question5:"answer op 3",
},


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
