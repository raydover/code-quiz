var state = 'quiz';

var timeEL = document.querySelector("time");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#startbutton");
var quizTitle = document.querySelector("#quizTitle");

// Sets the count start at 30 seconds
var secondsLeft = 30;



function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

var questions = [
    {
        numberQuestion: 1,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 2,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 4,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 5,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 6,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 7,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 8,
        question: "Which operator is used to assign a value to a variable?",
        correctAnswer: "=",
        answer: [
            "*",
            "-",
            "+",
            "="
        ]
    },
    {
        numberQuestion: 9,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    },
    {
        numberQuestion: 10,
        question: "?",
        correctAnswer: "Ans",
        answer: [
            "a",
            "b",
            "c",
            "d"
        ]
    }
]

// Funtion sets up the timer, messages, end game, etc.. 
function displayMessage() {
    timeEL.textContent = "Time Remaining: " + secondsLeft;
}

function setTime() {
    displayMessage();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayMessage();

        if (secondsLeft === 0) {
            state = "quizOver"
            clearInterval(timerInterval);
            displayState();
        }
    }, 1000);
}

function displayState() {
    if (state = "end") {
        finalScore.textContent("Final Score:" + secondsLeft);
    }
}

function init() {
    displayState();
};

startButton.addEventListener("click", function () {
    state = 'quiz';
    displayState();
});

quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

init();


