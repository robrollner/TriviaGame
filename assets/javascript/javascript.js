var questions = [{
    question: "What is Mr. Burns First Name?",
    choices: ["I don't know...", "Barney", "Waylon", "Charles"],
    correctAnswer: 3
}, {
    question: "What college did Dr. Nick Riviera graduate from?",
    choices: ["Shelbyville state", "Hollywood Upstairs Medical College", "Springfield U", "Cornell"],
    correctAnswer: 1
}, {
    question: "What smells like a steak and seats 35?",
    choices: ["Canyonero", "Rawhidanator", "Homer Simpson", "Springfield elementary school bus"],
    correctAnswer: 0
}, {
    question: "Who voiced Maggie Simpson?",
    choices: ["Yeardley Smith", "Elizabeth Hurley", "Elizabeth Taylor", "Julie Kavner"],
    correctAnswer: 2
}];

console.log(questions[0].question);
console.log(questions[0].choices[0]);


var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var timer = 10;
var intervalId;

$(document).ready(function() {

    intervalId = setInterval(decrement, 1000);

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    function resetTimer() {
        timer = 10;
        $('.timer').html("I said Ha ha!!!");
        $('.timer').slideUp(1000).delay(300).fadeIn(1000).append('<img class="img-responsive" id="resultGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/NelsonGif.gif" />');
    }

    function decrement() {
        timer--;
        $('.timer').html(timer);
        if (timer === 0) {
            stop();
            $('.timer').html('<h2 class="timer">' + 10 + '</h2>');

            // $('.timer').html("I said Ha ha!!!");
            // $('.timer').slideUp(1000).delay(300).fadeIn(1000).append('<img class="img-responsive" id="resultGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/NelsonGif.gif" />');
            resetTimer();
        }
    }

    function stop() {
        clearInterval(intervalId);
        var timer = 10;
    }

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function() {

        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                stop();



                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                    // decrement();

                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container-fluid > .question");
    var choiceList = $(document).find(".container-fluid > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    decrement();

    hideScore();
}

function displayScore() {
    $(document).find(".container-fluid > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container-fluid > .result").show();

    if (correctAnswers >= questions.length / 2) {

        $('.timer').html("Woo Hoo!");
        $('.timer').slideUp(1000).delay(300).fadeIn(1000).append('<img class="img-responsive" id="resultGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/WooHooGif.gif" />');
        stop();
    }

}

function hideScore() {
    $(document).find(".result").hide();
}