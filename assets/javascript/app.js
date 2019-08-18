
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
        };
        $('#start').hide();
        $("#directions").hide();
        $("#game").show();
        $("#remaining-time").delay(1000).show("slow");
    
        function countdown() {
            timer--;
            $("#timer").text(timer);
            if (timer === 0) {
                clearInterval(intervalId);
                $("#game").hide();
                $("#results").show();
            }
        }

    })})
