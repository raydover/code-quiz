var state = "start";

// Sets up Variable Elements
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var mainEl = document.getElementById("main");
var questionsEl = document.querySelector("#questions");
var highScoreEl = document.querySelector("#highScore");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var intialsInput = document.querySelector("#initials");
var timeEl = document.querySelector(".time");
var cursor = 0;
var secondsLeft = 30;
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
        correct: "CSS"
    },
    {
        title: "What is a widely used scripting language that adds functionality and interactivity to a webpage?",
        answer: ["APIs", "Java Script", "DOM", "VS Code"],
        correct: "Java Script"
    },
    {
        title: "What programming interface allows us to use JavaScript to interact with HTML elements?",
        answer: ["HTML", "JSON", "DOM", "Terminal"],
        correct: "DOM"
    },
    {
        title: "What term means that you meet the minimum requirements to apply for a job as a web developer?",
        answer: ["employer-ready", "employer-competitive", "employer-minimum", "employer-required"],
        correct: "employer-ready"
    },
    {
        title: "What term means that you have given yourself the best chance to secure your desired job?",
        answer: ["employer-desired", "employer-best", "employer-secure", "employer-competitive"],
        correct: "employer-competitive"
    }
];

// Sets function to display state and question, if statements to start quiz, and when the quiz has ended
function displayState() {
    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        endEl.style.display = "none";
        highScoreEl.style.display = "none";
        displayScores();
    }
    if (state === "quiz") {
        startEl.style.display = "none";
        quizEl.style.display = "block";
        endEl.style.display = "none";
        highScoreEl.style.display = "none";
        displayQuestion();
        displayTime();
    }
    if (state === "end") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = "block";
        highScoreEl.style.display = "none";
    }
    if (state === "highScore") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        endEl.style.display = "none";
        highScoreEl.style.display = "block";
    }
}

// Sets function to diplay quiz questions, query quiz title, for loop possible, create button, update button text content, append buttons to question
function displayQuestion() {
    var question = questions[cursor];

    questionsEl.innerHTML = null;
    quizTitle.textContent = question.title;

    question.possible.forEach(function (item) {
        var btnEl = document.createElement("button");
        btnEl.textContent = item;
        questionsEl.appendChild(btnEl);
    });
}

// Set funciton time, if statement when to clear, diplay time, message
function displayMessage() {
    timeEl.textContent = secondsLeft + " seconds remaining";
  }
  
  function setTime() {
    displayMessage();
    var timerInterval = setInterval(function () {
      secondsLeft--;
      displayMessage();
  
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
  
  // Function to create and append colorsplosion image
  function sendMessage() {
    timeEl.textContent = "TIME HAS EXPIRED!";
  }
  
  setTime();
  

function init() {
    displayState();
}

// Event listener is located at the bottom of JS, click to start, to score
startBtn.addEventListener("click", function () {
    state = "quiz";
    displayState();
});

// Event listener for questions and answer click
questionsEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {

        // Verify the corect answers instructor provided
        var children = element.parentElement.children;
        var position = Array.from(children).indexOf(element);

        if (position === questions[cursor].correct) {
        } else {
            time -= 3;
            timerEl.textContent = time;
        }

        cursor++;

        if (cursor >= questions.length) {
            state = "end";
            clearInterval(timeInterval);
            displayState();
        } else {
            displayQuestion();
        }
    }
});

// CLick Event for submit button Instructor Provided
endEl.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = {
        initials: intialsInput.value,
        score: time
    };

    var scores = JSON.parse(localStorage.getItem("highScores")) || [];

    scores.push(data);

    localStorage.setItem("highScores", JSON.stringify(scores));

});

init();

