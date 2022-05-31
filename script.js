var state = 'start';

// Sets up Variable Elements
var timeEL = document.querySelector("time");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var titleEl = document.querySelector("#title");
var startBtn = document.querySelector("#startButton");
var optionA = document.getElementById("a");
var optionA = document.getElementById("b");
var optionB = document.getElementById("c");
var optionC = document.getElementById("d");
var quizHighScore = document.getElementById("quizHighScore");
var finalScore = document.getElementById("finalScore");
var questionsEl = document.getElementById("questions");
var answerEl = document.getElementById("answer");
var time = document.getElementById("time");


// Sets the count start at 30 seconds, postion set to 0
var secondsLeft = 30;
var position = 0;



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

    // Variable button a, b, c, d elements
    var optionA = document.querySelector("button")
    var optionB = document.querySelector("button")
    var optionC = document.querySelector("button")
    var optionD = document.querySelector("button")

    viewQuestions.textContent = quizQuestions[position].question;
    optionA.textContent = quizQuestions[position].optionA;
    optionB.textContent = quizQuestions[position].optionB;
    optionC.textContent = quizQuestions[position].optionC;
    optionD.textContent = quizQuestions[position].optionD;

    questionsEl.appendChild(viewQuestions);
    answerEl.appendChild(optionA);
    answerEl.appendChild(optionB);
    answerEl.appendChild(optionC);
    answerEl.appendChild(optionD);

}

// List of questions, answers and correct answers for the quiz
var quizQuestions = [
    {
        question: "What coding language is at the heart of every website and the standard language used to build the structure of a webpage?",
        correctAnswer: "HTML",
        answer: [
            optionA: "Java Script",
            optionB: "HTML",
            optionC: "CSS",
            optionD: "JQuery"
        ]
    },
    {
        question: "What is used to add styling to the elements created with HTML?",
        correctAnswer: "CSS",
        answer: [
            optionA: "GitHub",
            optionB: "Bootstrap",
            optionC: "JSON",
            optionD: "CSS"
        ]
    },
    {
        question: "What is a widely used scripting language that adds functionality and interactivity to a webpage?",
        correctAnswer: "Java Script",
        answer: [
            optionA: "APIs",
            optionB: "Java Script",
            optionC: "DOM",
            optionD: "VS Code"
        ]
    },
    {
        question: "What programming interface allows us to use JavaScript to interact with HTML elements?",
        correctAnswer: "DOM",
        answer: [
            optionA: "HTML",
            optionB: "JSON",
            optionC: "DOM",
            optionD: "Terminal"
        ]
    },
    {
        question: "What term means that you meet the minimum requirements to apply for a job as a web developer?",
        correctAnswer: "employer-ready",
        answer: [
            optionA: "employer-ready",
            optionB: "employer-competitive",
            optionC: "employer-minimum",
            optionD: "employer-required"
        ]
    },
    {
        question: "What term means that you have given yourself the best chance to secure your desired job?",
        correctAnswer: "employer-competitive",
        answer: [
            optionA: "employer-desired",
            optionB: "employer-best",
            optionC: "employer-secure",
            optionD: "employer-competitive"
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
startBtn.addEventListener("click", function () {
    state = 'start';
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


