var start = document.getElementById("start-btn"); //grab start button
var container = document.querySelectorAll(".container"); // grab the container class that holds every page

// variables for questions
var questions = [
    {
        question: "What is the observation made in the following JavaScript code? var count = [1,,3];",
        answers: [
            { text: "The omitted value takes 'undefined'", correct: true },
            { text: "This results in an error", correct: false }, 
            { text: "This results in an exception", correct: false }, 
            { text: "The omitted value takes an integer value", correct: false },
        ]
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: [
            { text: "You should not use any of the JavaScript { text: reserved keywords as a variable name", correct: false }, 
            { text: "JavaScript variable names should not start { text: with a numberal (0-9)", correct: false }, 
            { text: "Both of the above", correct: true },
            { text: "None of the above", correct: false }
        ]
    }
]
var submitBtn = document.querySelector(".submit-btn"); //grabs submit button

var randomQuestion; // for randome question gen
var currentQuestionIndex; // index of cureent question
var questionNum = document.querySelector(".question-number"); // grabs the question number text
var questionCount; // number question to be fed for display
var questionEl = document.getElementById("question"); // grabs the question field
var answerBtns = document.getElementById("answer-buttos"); // grabs div holdig all aswer choices



// variables for timer
var secondsLeft = document.querySelector(".time"); // grab span holding time value
var timerCount;
var timer;

// start game function
function startGame() {
    pageToggle(); // calls page toggle function
    timerCount = 60; // sets time remaining to count down from 60
    questionCount; //
    randomQuestion = questions.sort(() => Math.random() - .5); // random sorting for questions
    currentQuestionIndex = 0; // first question in the index
    startTimer(); // calls timer function
    setNextQuestion(); // calls next question function
};

// page toggle function - add hide class to title page and remove hide class from questions page
function pageToggle() {
    container.forEach(function(containers) {
        if(containers.classList.contains("one")) {
            containers.classList.add("hide");
        };
        if(containers.classList.contains("two")) {
            containers.classList.remove("hide");
        };
    });
};

// start timer function
function startTimer() {
    timer = setInterval(function() { // sets an interval to decrease by one for every second and make that vale the text content displayed in the timerCount.
        timerCount--;
        secondsLeft.textContent = timerCount;
        if (timerCount === 0) { // when time runs out, stop the timer and toggle to the next page
            clearInterval(timer);
            container.forEach(function(containers) {
                if(containers.classList.contains("two")) {
                    containers.classList.add("hide");
                };
                if(containers.classList.contains("three")) {
                    containers.classList.remove("hide");
                };
            });
        };
        if (timerCount <= 10) { // if time left is equal to or less than 10, turn text red
            secondsLeft.style.color = "#ff8f8f";
        };
    },1000);// interval set to 1000 ms (1 second)
};

// set next question function
function setNextQuestion() {
    // resetState();
    showQuestion(randomQuestion[currentQuestionIndex]);
};

function showQuestion(question) {
    questionCount++;
    questionNum.textContent = "0" + questionCount;
    questionEl.textContent = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.textContent = answer.text = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            console.log("fuck yeah");
        }
        button.addEventListener("click", selectAnswer);
        answerBtns.appendChild(button);
    });
};

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("btn-correct")
    }
    else {
        element.classList.add("wrong");
    };
};

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong")
}


// calls start game function when start button is clicked
start.addEventListener("click", startGame);
