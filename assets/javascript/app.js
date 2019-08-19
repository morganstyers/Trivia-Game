$(document).ready(function () {
    $("#results").hide();
    $("#game").hide();
    $("#remaining-time").hide();
    $("#start").hide();
    $("#start").slideUp().delay(3000).fadeIn(3000);
    var winner = 0;
    var loser = 0;
    var intervalId;
    var time = 20;
    $(document).on('click', '#start', function () {
        timerOn = false;
        if (!timerOn) {
        var intervalId = setInterval(countdown, 1000);}
        $("#timer").html("Time Remaining: " + time);
       
        
        $('#start').hide();
        $("#directions").hide();
        $("#game").show();
        $("#remaining-time").delay(1000).show("slow");
    })
    
    function countdown() {
      $("#timer").html(time);
      time--;
      if (time === 0) {
        clearInterval(intervalId)
        $("#remaining-time").empty();
        $("#game").hide();
        $("#wins").show(winner)
        $("#losses").show(loser)
      }
    }

    
    $("ryan").click(function () {
     
      winner++;
     console.log()
    });
  
    $("#jim").click(function () {
      
      loser++;
      
      console.log()
    });
    $("#erin").click(function () {
      loser++;
      console.log()
    });
  
    
    $("#richard").click(function () {
      loser++;
      console.log()
    });
    
    $("#chris").click(function () {
      winner++;
      console.log()
    });
  
    $("#robin").click(function () {
      loser++;
      console.log()
    });
  
  
  $("#hotdog").click(function () {
    loser++;
    console.log()
  });
  
  $("#hair").click(function () {
    winner++;
    console.log()
  });
  
  $("#dental").click(function () {
    loser++;
    console.log()
  });
  
  //Question Four//
  $("#tuna").click(function () {
    winner++;
    console.log()
  });
  
  $("#halpert").click(function () {
    loser++;
    console.log()
  });
  
  $("#jimbo").click(function () {
    loser++;
    console.log()
  });

  //question 5
  $("#dumbledore").click(function () {
    winner++;
    console.log()
  });
  
  $("#stole").click(function () {
    loser++;
    console.log()
  });
  
  $("#kidnapped").click(function () {
    loser++;
    console.log()
  });
  
  
  
  });
  