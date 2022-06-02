var state = 'start';

// Sets up Variable Elements
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var questionsEl = document.querySelector("#questions");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
intialsInput = document.querySelector("#initials");
var cursor = 0;
var time = 30;
var timeInterval;


// List of questions, answers and correct answers for variable quiz questions
var questions = [
    {
        title: "What coding language is at the heart of every website and the standard language used to build the structure of a webpage?",
        possible: ["Java Script", "HTML", "CSS", "JQuery", "HTML"],
        correct: "HTML",
    },
    {
        title: "What is used to add styling to the elements created with HTML?",
        answer: ["GitHub", "Bootstrap", "JSON", "CSS"],
        correct: "CSS",
    },
    {
        title: "What is a widely used scripting language that adds functionality and interactivity to a webpage?",
        answer: ["APIs", "Java Script", "DOM", "VS Code"],
        correct: "Java Script",
    },
    {
        title: "What programming interface allows us to use JavaScript to interact with HTML elements?",
        answer: ["HTML", "JSON", "DOM", "Terminal"],
        correct: "DOM",
    },
    {
        title: "What term means that you meet the minimum requirements to apply for a job as a web developer?",
        answer: ["employer-ready", "employer-competitive", "employer-minimum", "employer-required"],
        correct: "employer-ready",
    },
    {
        title: "What term means that you have given yourself the best chance to secure your desired job?",
        answer: ["employer-desired", "employer-best", "employer-secure", "employer-competitive"],
        correct: "employer-competitive",
    }
];

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
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

// Sets function to diplay quiz questions, query quiz title, for loop possible, create button, update button text content, append buttons to question
function displayQuestion() {
    var question = questions[cursor];

    questionsEl.innerHTML = null;
    quizTitle.textContent = question.title;

    question.possible.forEach(function (item) {
        var btnEl = document.createElement('button');
        btnEl.textContent = item;
        questionsEl.appendChild(btnEl);
    });
}

// Set funciton timer, if statement when to clear
function displayTimer() {
    timeInterval = setInterval(function() {
        time--;
    if (time <= 0) {
        clearInterval(timeInterval);
    }
}, 1000);
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
    var element = event.target;
    if (element.matches('button')) {

        // Verify the corect answer
        var children = element.parentElement.children;
        var position = Array.from(children).indexOf(element);

        if (position === questions[cursor].correct) {
        } else {
        }

        cursor++;

        if (cursor >= questions.length) {
            state = 'end';
            displayState();
        } else {
            displayQuestion();
        }
    }
});

endEl.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('highScores', intialsInput.value);
});

init();


// var secondsLeft = 30;

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