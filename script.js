var state = 'start';

// Sets up Variable Elements
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var questionsEL = document.querySelector("#questions");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector('#quiz #title');


var secondsLeft = 30;
var position = 0;

// List of questions, answers and correct answers for variable quiz questions
var quizQuestions = [
    {
        title: "What coding language is at the heart of every website and the standard language used to build the structure of a webpage?",
        possible: ["Java Script", "HTML", "CSS", "JQuery", "HTML"],
        correctAnswer: "HTML",
    },
    {
        title: "What is used to add styling to the elements created with HTML?",
        answer: ["GitHub", "Bootstrap", "JSON", "CSS"],
        correctAnswer: "CSS",
    },
    {
        title: "What is a widely used scripting language that adds functionality and interactivity to a webpage?",
        answer: ["APIs", "Java Script", "DOM", "VS Code"],
        correctAnswer: "Java Script",
    },
    {
        title: "What programming interface allows us to use JavaScript to interact with HTML elements?",
        answer: ["HTML", "JSON", "DOM", "Terminal"],
        correctAnswer: "DOM",
    },
    {
        title: "What term means that you meet the minimum requirements to apply for a job as a web developer?",
        answer: ["employer-ready", "employer-competitive", "employer-minimum", "employer-required"],
        correctAnswer: "employer-ready",
    },
    {
        title: "What term means that you have given yourself the best chance to secure your desired job?",
        answer: ["employer-desired", "employer-best", "employer-secure", "employer-competitive"],
        correctAnswer: "employer-competitive",
    }
]

// Sets function to display state and question, if statements to start quiz, and when the quiz has ended
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
        displayQuestion();
        displayState();
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
        displayState();
    }
}

// Sets function to diplay quiz questions, query quiz title, for loop possible, create button, update button text content, append buttons to question
function displayQuestion() {
    var question = quizQuestions[0];
    quizTitle.textContent = question.title;
    question.possible.forEach(function (item) {
        var btnEl = document.createElement('button');
        btnEl.textContent = item;
        questionsEL.appendChild(btnEl);
    });
}

function init() {
    displayState();
}

// Event listener is located at the bottom of JS, click to start, to score
startBtn.addEventListener("click", function () {
    state = 'quiz';
    displayState();
});

questionsEl.addEventListener("click", function (event) {
    if (event.target.type == "submit") {
        if (event.target.texContent === quizQuestions[position].correctAnswer) {
        } else {
            secondsLeft = secondsLeft - 5;
        }

        position++;

        if (position <= quizQuestions.length) {
            state = 'end';
            displayQuestions();
            clearInterval();
            displayState();
        } else {
            displayState();
        }
    }
});

init();



// // Funtion sets up the timer, messages, If statement, quiz end, etc.. 
// function displayTimer() {

//     displayMessage();
//     var timerInterval = setInterval(function () {
//         secondsLeft--;

//         if (secondsLeft === 0) {
//             state = "quizOver"
//             clearInterval(timerInterval);
//         }
//     }, 1000);
// }

// function displayState() {
//     if (state = "end") {
//         finalScore.textContent("Final Score:" + secondsLeft);
//     }
// }

// Variable button a, b, c, d elements
// var optionA = document.querySelector("button")
// var optionB = document.querySelector("button")
// var optionC = document.querySelector("button")
// var optionD = document.querySelector("button")

// viewQuestions.textContent = quizQuestions[position].question;
// optionA.textContent = quizQuestions[position].optionA;
// optionB.textContent = quizQuestions[position].optionB;
// optionC.textContent = quizQuestions[position].optionC;
// optionD.textContent = quizQuestions[position].optionD;

// questionsEl.appendChild(viewQuestions);
// answerEl.appendChild(optionA);
// answerEl.appendChild(optionB);
// answerEl.appendChild(optionC);
// answerEl.appendChild(optionD);