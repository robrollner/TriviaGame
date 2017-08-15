window.onload = function() {
    $("#start").on("click", timer.start);
};

var number = 30;
var intervalId;

$('#stop').on('click', stop);
$('#start').on('click', run);

function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$('#timer').html(number);
	if (number === 0) {
		stop();
		$('#questionBox').html("I said HA HA!!!!!");
		//add to incorrect score
	}
}

function stop() {
	clearInterval(intervalId);
	var number = 30; //work on a reset...
	$('#questionBox').html("I hate it...")
}







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