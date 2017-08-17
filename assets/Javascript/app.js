window.onload = function() {
    $("#start").on("click", timer.start);
};

var number = 2;
var intervalId;

$('#stop').on('click', stop);
$('#start').on('click', run);

function run() {
    intervalId = setInterval(decrement, 1000);
    // 	const myQuestions = [{
    // 		question: "What is Mr. Burns' first name?"
    // 		answers: {
    // 			a:"Homer",
    // 			b:"Barney",
    // 			c:"Carl",
    // 			d:"Charles"
    // 		},
    // 		correctAnswer: "c"
    // 	},
    // 	{
    // 		question: ""
    // 	}]
     }

    function decrement() {
        number--;
        $('#timer').html(number);
        if (number === 0) {
            stop();
            $('#questionBox').html("I said HA HA!!!!!");
            $('#questionBox').slideUp(300).delay(800).fadeIn(400).prepend('<img id="NelsonGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/NelsonGif.gif" />');
            //add to incorrect score

        }
    }

    function stop() {
        clearInterval(intervalId);
        var number = 30; //work on a reset...
        $('#questionBox').html("I hate it...")
    };







    // var intervalId;
    // var clockRunning = false;

    // var timer = {
    //     time: 0,
    //     reset: function() {
    //         $('#timer').html(':30');
    //     },
    //     start: function() {
    //         if (!clockRunning) {
    //             intervalId = setInterval(timer.count, 1000);
    //             clockRunning = true;
    //         }
    //     },

    //     count: function() {
    //         timer.time++;
    //         var converted = timer.timeConverter(timer.time);
    //         console.log(converted);
    //         $('#timer').html(converted);
    //     },

    //     timeConverter: function(t) {
    //         var minutes = Math.floor(t / 60);
    //         var seconds = t - (minutes * 60);
    //         if (seconds < 10) {
    //             seconds = "0" + seconds;
    //         }
    //         if (minutes === 0) {
    //             minutes = "00";
    //         } else if (minutes < 10) {
    //             minutes = "0" + minutes;
    //         }
    //         return minutes + ":" + seconds;
    //     }

    // };