$(document).ready(function () {
    $("#results").hide();
    $("#game").hide();
    $("#remaining-time").hide();
    $("#start").hide();
    $("#start").slideUp().delay(3000).fadeIn(3000);
    
    $(document).on('click', '#start', function () {
        timerOn = false;
        var timer = 30;
        if (!timerOn) {
            var intervalId = setInterval(countdown, 1000);
        $("#timer").html("Time Remaining: " + time);}
       
        
        $('#start').hide();
        $("#directions").hide();
        $("#game").show();
        $("#remaining-time").delay(1000).show("slow");
    })
    var time = 20;
    var winner = 0;
    var loser = 0;
    
    
    function countdown() {
      $("#timer").html(time);
      time--;
      if (time < 0) {
        clearInterval(intervalId)
        $("#game").hide();
        $("#wins").html("Wins: " + winner).show()
        $("#losses").html("Losses: " + loser).show()
      }
    }

    
    $("ryan").click(function () {
     
      winner++;
     
    });
  
    $("#jim").click(function () {
      
      loser++;
      
      
    });
    $("#erin").click(function () {
      loser++;
    });
  
    
    $("#richard").click(function () {
      loser++;
    });
    
    $("#chris").click(function () {
      winner++;
    
    });
  
    $("#robin").click(function () {
      loser++;
    });
  
  
  $("#hotdog").click(function () {
    loser++;
    
  });
  
  $("#hair").click(function () {
    winner++;
  
  });
  
  $("#dental").click(function () {
    loser++;
  });
  
  //Question Four//
  $("#tuna").click(function () {
    winner++;
    
  });
  
  $("#halpert").click(function () {
    loser++;
  });
  
  $("#jimbo").click(function () {
    loser++;
  });

  //question 5
  $("#dumbledore").click(function () {
    winner++;
    
  });
  
  $("#stole").click(function () {
    loser++;
  });
  
  $("#kidnapped").click(function () {
    loser++;
  });
  
  
  
  });
  