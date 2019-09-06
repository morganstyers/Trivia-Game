$(document).ready(function () {
  var intervalId, showQuestion;
  var correctAnswer = false;
  var time = 20;
  var choiceGroup = ['<div><span id="button1" class="button" data-button-id="1"></span>', '<span id="button2" class="button" data-button-id="2"></span>', '<span id="button3" class="button" data-button-id="3"></span>', '<span id="button4" class="button" data-button-id="4"></span></div>'];

  var questions = [
    {
      question: "is this question one",
      choices: ["yes", "no", "maybe", "idk"],
      answer: '1',
    },
    {
      question: "is this question two",
      choices: ["yes", "no", "maybe", "idk"],
      answer: '2',
    },
    {
      question: "is this question three",
      choices: ["yes", "no", "maybe", "idk"],
      answer: '1',
    },
    {
      question: "is this question three",
      choices: ["yes", "no", "maybe", "idk"],
      answer: '2',
    },
    {
      question: "is this question five",
      choices: ["idk", "no", "maybe", "sure"],
      answer: '4',
    },
  ];

  var index=0;
  var correct=0;
  var incorrect=0;
  var missed=0;

  $("#game").hide();
  $("#remaining-time").hide();
  $("#start").hide();
  $("#start").slideUp().delay(3000).fadeIn(3000);

  $('#start').on('click', function () {
    $('#start').hide();
    $("#directions").hide();
    $("#game").show();
    display();
  })

  function display(){

    $("#questions").append("<h4>"+questions[index].question+"</h4>");
    for (let i = 0; i < questions[index].choices.length; i++) {
      $(".buttons").append(choiceGroup[i]);
      $(".buttons").append(" <button id='choice" + (i+1) + "'>" + questions[index].choices[i] + "</button>");

    } 
    $("#remaining-time").show();
    run();
  }
 

$(".buttons").on('click', function(){
  var buttonID = $(this).attr("data-button-id");
  $("#questions").empty();

})
function run() {
  intervalId = setInterval(decrement, 1000);
}
function decrement(){
$("#timer").html(time);
time--;
if (time === 0){
  stop();
}
}

function stop(){
  $("#timer").empty();
  clearInterval(intervalId);
}

})
