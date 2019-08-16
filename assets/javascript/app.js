

var clockRunning = false;
var countdown = 30;
$("#ready").on('click', start());
var IntervalId = setInterval(start, 1000);

function start() {
   
    if (!clockRunning) {
        countdown--;
        var converted = timeConverter(countdown);
        $(".time-left").text(":"+ countdown);



        function timeConverter(countdown) {
            var minutes = Math.floor(countdown / 60);
            var seconds = countdown - (minutes * 60);

           
        return seconds;
    }
}


}   

