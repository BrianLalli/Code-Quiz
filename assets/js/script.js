// Pseudo-code
// Landing page with start button
// When start button is clicked, remove welcome msg and append question 1
    // Add event listener
        // Activity 12
// Start timer
// User answer question
// Read chosen element, assess data value, compare to answer key
// For loop for the questions
    // If correct next question
    // If incorrect subtract 10 sec from timer
        // Activity
// End of quiz
// Add up user score
// Display input for my user to type their initials
// Second html and display user name and score
// Read object from local storage
    // Activity 24
// debugger

// // Assignment Code
// // var generateBtn = document.querySelector("#generate");
// // List of questions, answer options, correct answers, and user answers
// var questionEl = []
// var answerOptionsEl = []
// // var answersCorrectEl = [];
// var userAnswersEl = [];
var timerEl = $("#timerEl");
var startButtonEl = $('#button-start');
var startingNumber = 60;
var correct = ["Mercury", "Hotmail", "Brazil", "Bing", "Gemini"];

var questionNumber = 0;

var questionsList = [
    {
        text: "Hg is the chemical symbol of which element?",
        choices: ["Iron", "Magnesium", "Calcium", "Mercury"],
        correct: "Mercury"
    },
    {
        text: "Which email service is owned by Microsoft?",
        choices: ["Yahoo", "Superhuman", "Hotmail", "Gmail"],
        correct: "Hotmail"
    },
    {
        text: "Which country produces the most coffee in the world?",
        choices: ["Peru", "Colombia", "Brazil", "China"],
        correct: "Brazil"
    },
    {
        text: "What is Chandler’s last name in the sitcom Friends?",
        choices: ["Bong", "Bing", "Bang", "Bung"],
        correct: "Bing"
    },
    {
        text: "What is the third sign of the zodiac?",
        choices: ["Gemini", "Libra", "Pisces", "Capricorn"],
        correct: "Gemini"
    },
]


startButtonEl.on('click', letsPlay)
function letsPlay(){
    console.log("Button test");
    $("#Q").removeClass("d-none");
    timerStart();
    nextQuestion()
}

function timerStart(){
    setInterval(function () {
    if(startingNumber > 0){
    startingNumber = startingNumber -1
    timerEl.text(startingNumber);
    }
    }, 1000);
}

function nextQuestion() {
    $("#questionText").text(questionsList[questionNumber].text)
    $("#choice1").text(questionsList[questionNumber].choices[0])
    $("#choice2").text(questionsList[questionNumber].choices[1])
    $("#choice3").text(questionsList[questionNumber].choices[2])
    $("#choice4").text(questionsList[questionNumber].choices[3])
}
{
    $("#choice1").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice1");
        if ("#choice1" === correct) {
            ;
            console.log('Correct');
        } else {
            ;
            console.log('Wrong');
            startingNumber = startingNumber -10;
        }
    })
    $("#choice2").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice2");
        if ("#choice2" === correct) {
            ;
            console.log('Correct');
        } else {
            ;
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
    $("#choice3").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice3");
        if ("#choice3" === correct) {
            ;
            console.log('Correct');
        } else {
            ;
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
    $("#choice4").on("click", function() {
        questionNumber++;
        nextQuestion();
        console.log("choice4");
        if ("#choice4" === correct) {
            ;
            console.log('Correct');
        } else {
            ;
            console.log('Wrong');
            startingNumber = startingNumber - 10;
        }
    })
}
