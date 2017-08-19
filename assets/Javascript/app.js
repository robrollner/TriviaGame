    var questionBoxQuestions = [{
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

    console.log(questionBoxQuestions[0].question);
    console.log(questionBoxQuestions[0].choices[0]);

    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var quizOver = false;



    window.onload = function() {
        $("#start").on("click", timer.start);
        // $('#questionBox').empty();
        // $('.btn-info').empty();
        // for (var i = 0; i < questionBoxQuestions.length; i++) {
        //     $('#questionBox').html(questionBoxQuestions.question[i].question);




    };

    var number = 30; //change to 30
    var intervalId;



    $('#stop').on('click', stop);
    $('#start').on('click', run);


    function run() {
        intervalId = setInterval(decrement, 1000);
        $('#questionBox').empty();
        $('.btn-info').empty();
        $('#questionBox').prepend('<h2>' + questionBoxQuestions[0].question + '</h2>');
        for (var i = 0; i < questionBoxQuestions.length; i++) {
            $('.btn-info').append('<h4>' + questionBoxQuestions[0].choices[i] + '</h4>');
        }

    }

    function decrement() {
        number--;
        $('#timer').html(number);
        if (number === 0) {
            stop();
            $('#questionBox').html("I said HA HA!!!!!");
            $('#questionBox').slideUp(1000).delay(300).fadeIn(1000).prepend('<img class="img-responsive" id="resultGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/NelsonGif.gif" />');
            //add to incorrect score

        } //else if (correct answer scenario)
    }

    function stop() {
        clearInterval(intervalId);
        var number = 30; //work on a reset...
        $('#questionBox').html("I hate it...")
        $('#questionBox').slideUp(1000).delay(300).fadeIn(1000).prepend('<img class="img-responsive" id="resultGif" src="https://raw.githubusercontent.com/robrollner/TriviaGame/master/assets/images/BarneyGif.gif" />');

    };