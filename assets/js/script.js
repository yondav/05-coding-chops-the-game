var questions = [
{
    id: 01,
    question: "What is the observation made in the following JavaScript code? var count = [1,,3];",
    choiceA: "The omitted value takes 'undefined'", correct: true,
    choiceB: "This results in an error", correct: false,
    choiceC: "This results in an exception", correct: false,
    choiceD: "The omitted value takes an integer value", correct: false,
},
{
    id: 02,
    question: "Which of the following is true about variable naming conventions in JavaScript?",
    choiceA: "You should not use any of the JavaScript reserved keywords as a variable name", correct: false,
    choiceB: "JavaScript variable names should not start with a numberal (0-9)", correct: false,
    choiceC: "Both of the above", correct: true,
    choiceD: "None of the above", correct: false,
},
{
    id: 03,
    question: "Which of the following is true about cookie handling in JavaScript?",
    choiceA: "JavaScript can manipulate cookies using the cookie property of the Document object", correct: false,
    choiceB: "JavaScript can read, create, modify and delete the cookie or cookies that apply to the current web page", correct: false,
    choiceC: "Both of the above", correct: true,
    choiceD: "None of the above", correct: false,
},
{
    id: 04,
    question: "Which of the following function of Number object forces a number to display in exponential notation?",
    choiceA: "toLocalString()", correct: false,
    choiceB: "toPrecision()", correct: false,
    choiceC: "toFixed()", correct: false,
    choiceD: "toExponential()", correct: true,
},
{
    id: 05,
    question: "Which of the following function of Number object returns a string value version of the current number?",
    choiceA: "toFixed()", correct: false,
    choiceB: "toString()", correct: true,
    choiceC: "toLocalString()", correct: false,
    choiceD: "toPrecision()", correct: false,
},
{
    id: 06,
    question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
    choiceA: "pop()", correct: false,
    choiceB: "push()", correct: false,
    choiceC: "reduce()", correct: false,
    choiceD: "reduceRight()", correct: true,
},
{
    id: 07,
    question: "Which JavaScript label catches all the values, except for the ones specified?",
    choiceA: "catch", correct: false,
    choiceB: "label", correct: false,
    choiceC: "default", correct: true,
    choiceD: "try", correct: false,
},
{
    id: 08,
    question: "How do you find the minimum of x and y using JavaScript?",
    choiceA: "min(x,y)", correct: false,
    choiceB: "Math.min(x,y", correct: true,
    choiceC: "Math.min(xy)", correct: false,
    choiceD: "min(xy)", correct: false,
},
{
    id: 09,
    question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choiceA: "alertBox('Hello DataFlair!');", correct: false,
    choiceB: "alert('Hellow DataFlair!');", correct: false,
    choiceC: "msgAlert('Hello DataFlair!');", correct: false,
    choiceD: "alert('Hellow DataFlair');", correct: true,
},
{
    id: 10,
    question: "JavaScript is a ____-side programming language.",
    choiceA: "Client", correct: false,
    choiceB: "Server", correct: false,
    choiceC: "Both", correct: true,
    choiceD: "Neither", correct: false,
},
];





var start = document.getElementById("start-btn");
var secondsLeft = document.querySelector(".time");
var container = document.querySelectorAll(".container");

// timer variables
var timerCount;
var timer;

// question variables
var randomQuestion;
var currentQuestion;
var questionCount;
var questionNum = document.querySelector(".question-number");
var questionEl = document.getElementById("question");
var submitBtn = document.querySelector(".submit-btn");

var choiceA = document.querySelector(".choice-a");
var choiceB = document.querySelector(".choice-b");
var choiceC = document.querySelector(".choice-c");
var choiceD = document.querySelector(".choice-d");


function startGame() {
    // console.log("i'm starting");
    pageChangeOne();
    timerCount = 60;
    questionCount = 0;
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    startTimer();
    setNextQuestion();
}

function pageChangeOne() {
    container.forEach(function(containers) {
        // console.log(containers);
        if(containers.classList.contains("one")) {
            containers.classList.add("hide");
        }
        if(containers.classList.contains("two")) {
            containers.classList.remove("hide");
        }
    });
};

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        secondsLeft.textContent = timerCount;
        if (timerCount === 0) {
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
        if (timerCount <= 10) {
            secondsLeft.style.color = "#ff8f8f";
        };
    },1000);
};

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestion[currentQuestion]);
}

function resetState() {
    submitBtn.classList.add("hide");
}

function showQuestion(question) {
    questionCount++;
    questionNum.textContent = "0" + questionCount;
    questionEl.textContent = question.question;
    choiceA.textContent = question.choiceA;
    choiceB.textContent = question.choiceB;
    choiceC.textContent = question.choiceC;
    choiceD.textContent = question.choiceD;
};

function selectAnswer(e) {

}


start.addEventListener("click", startGame);