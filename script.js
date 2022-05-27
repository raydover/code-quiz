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

// Section sets up the timer
function displayMessage() {
    timeEL.textContent = "Time Remaining: " + secondsLeft;
}

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

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

function init() {
    displayState();
}

startButton.addEventListener("click", function () {
    state = 'quiz';
    displayState();
});

quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

init();


