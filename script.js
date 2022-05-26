var state = 'quiz';

var startEl = document.querySelector("#start");
var highScoreEl = document.getElementById;('#highScore');
var quizHighScoreEl = document.getElementById;('#quizHighScore');

var timeEl = document.getElementById;('#timer');
var timeRemainEl = document.getElementById;('#timeRemain');

var quizEl = document.getElementById;('#quiz');
var titleEl = document.getElementById;('#title');

var questionsEl = document.getElementById;('#questions');
var questionButtonsEl = document.getElementById;('#questionButtons');

var scoreEl = document.getElementById;('#score');
var quizScoreEl = document.getElementById;('#quizScore');

var endEL = document.getElementById;('#end');

var timeremaining;
timeEl.innerHTML = 0;

var startbutton = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");

const questions = [
    {
        question: "",
            1: "",
            2: "",
            3: "",
            4: "",
    },

    {
        question: "",
            1: "",
            2: "",
            3: "",
            4: "",
    },

    {
        question: "",
            1: "",
            2: "",
            3: "",
            4: "",
    },

    {
        question: "",
            1: "",
            2: "",
            3: "",
            4: "",
    },
]

function init() {
  displayState();
}



init();