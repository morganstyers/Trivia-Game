





  
  var clockRunning = false;
  var countdown = 30;
  var IntervalId;

  $("#ready").on('click', function(){
    IntervalId= setInterval(start, 1000);

  function start (){
    if (!clockRunning) {
        countdown--;
        var converted = timeConverter(countdown);
        $(".time-left").text("Time Remaining: " + countdown);

        function timeConverter(countdown) {
            
            var seconds = countdown - (Math.floor(countdown / 60) * 60);


            return seconds;
        }
        if (countdown === 0) {
            stop();

        }
    }
    function stop(){
        clearInterval(IntervalId);
    }
    }
  
})
  





