var state = 'quiz';

// Sets up Variable Elements
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
        displayQuestions();
        displayState();
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
        displayState();
    }
}

// Sets function up answer buttons and choice optoins for the quiz
function displayQuestions() {
    questionsEl.innerHTML = "";
    answerEl.innerHTML = "";

    var buttonA = document.querySelector("button")
    var buttonB = document.querySelector("button")
    var buttonC = document.querySelector("button")
    var buttonD = document.querySelector("button")
    var viewQuestions = document.querySelector("p");

    viewQuestions.textContent = quizQuestions[position].;
    buttonA.textContent = quizQuestions[position].optionA;
    buttonB.textContent = quizQuestions[position].optionA;
    buttonC.textContent = quizQuestions[position].optionA;
    buttonD.textContent = quizQuestions[position].optionA;

    questionsEl.appendChild(viewQuestions);
    answerEl.appendChild(buttonA);
    answerEl.appendChild(buttonb);
    answerEl.appendChild(buttonc);
    answerEl.appendChild(buttond);

}

// List of questions, answers and correct answers for the quiz
var quizQuestions = [
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    },
    {
        question: "?",
        correctAnswer: "Ans",
        answer: [
            buttonA: "a",
            buttonB: "b",
            buttonC: "c",
            buttonD: "d"
        ]
    }
]

// Funtion sets up the timer, messages, If statement, quiz end, etc.. 
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

// Event listener is located at the bottom of JS, click to start, to score
startButton.addEventListener("click", function () {
    state = 'quiz';
    displayState();
});

answerEl.addEventListener("click", function (event) {
    if (event.target.type == "submit") {
        if (event.target.texContent === quizQuestions[position].correctAnswer) {
        } else {
            secondsLeft = secondsLeft - 5;
        }
        position++;
        if (position < quizQuestions.length) {
            displayQuestions();
        } else {
            state = 'end';
            displayState();
        }
    }
});

init();


