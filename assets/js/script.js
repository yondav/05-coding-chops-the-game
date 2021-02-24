// questions array
var questions = [
{
    id: 01,
    question: "What is the observation made in the following JavaScript code? var count = [1,,3];",
    choices: [
        "The omitted value takes 'undefined'",
        "This results in an error", 
        "This results in an exception", 
        "The omitted value takes an integer value",
    ],
    correctAnswer: 0,
    isCorrectAnswer: isCorrect
},
{
    id: 02,
    question: "Which of the following is true about variable naming conventions in JavaScript?",
    choices: [
        "You should not use any of the JavaScript reserved keywords as a variable name", 
        "JavaScript variable names should not start with a numberal (0-9)", 
        "Both of the above",
        "None of the above",
    ],

    correctAnswer: 2,
    isCorrectAnswer: isCorrect
},
{
    id: 03,
    question: "Which of the following is true about cookie handling in JavaScript?",
    choices: [
        "JavaScript can manipulate cookies using the cookie property of the Document object", 
        "JavaScript can read, create, modify and delete the cookie or cookies that apply to the current web page", 
        "Both of the above",
        "None of the above",
    ],
    correctAnswer: 2,
    isCorrectAnswer: isCorrect
},
{
    id: 04,
    question: "Which of the following function of Number object forces a number to display in exponential notation?",
    choices: [
        "toLocalString()", 
        "toPrecision()", 
        "toFixed()", 
        "toExponential()",
    ],
    correctAnswer: 3,
    isCorrectAnswer: isCorrect
},
{
    id: 05,
    question: "Which of the following function of Number object returns a string value version of the current number?",
    choices: [
        "toFixed()", 
        "toString()",
        "toLocalString()", 
        "toPrecision()",
    ],
    correctAnswer: 1,
    isCorrectAnswer: isCorrect
},
{
    id: 06,
    question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
    choices: [
        "pop()", 
        "push()", 
        "reduce()", 
        "reduceRight()",
    ],
    correctAnswer: 3,
    isCorrectAnswer: isCorrect
},
{
    id: 07,
    question: "Which JavaScript label catches all the values, except for the ones specified?",
    choices: [
        "catch", 
        "label", 
        "default",
        "try", 
    ],
       correctAnswer: 2,
       isCorrectAnswer: isCorrect
},
{
    id: 08,
    question: "How do you find the minimum of x and y using JavaScript?",
    choices: [
        "min(x,y)", 
        "Math.min(x,y)",
        "Math.min(xy)", 
        "min(xy)",
    ],
    correctAnswer: 1,
    isCorrectAnswer: isCorrect
},
{
    id: 09,
    question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choices: [
        "alertBox('Hello DataFlair!');", 
        "alert('Hellow DataFlair!');", 
        "msgAlert('Hello DataFlair!');", 
        "alert('Hellow DataFlair');",
    ],
    correctAnswer: 3,
    isCorrectAnswer: isCorrect
},
{
    id: 10,
    question: "JavaScript is a ____-side programming language.",
    choices: [
        "Client", 
        "Server", 
        "Both",
        "Neither", 
    ],    
    correctAnswer: 2,
    isCorrectAnswer: isCorrect
},
];

var start = document.getElementById("start-btn"); //grab start button
var secondsLeft = document.querySelector(".time"); // grab span holding time value
var container = document.querySelectorAll(".container"); // grab the container class that holds every page

// timer variables
var timerCount;
var timer;

// question variables
var randomQuestion;
var currentQuestion = 0;
var questionCount;
var questionNum = document.querySelector(".question-number");
var questionEl = document.getElementById("question");
var submitBtn = document.querySelector(".submit-btn");
var answerBtns = document.querySelector('#answer-buttons');

var choiceA = document.querySelector(".choice-a");
var choiceB = document.querySelector(".choice-b");
var choiceC = document.querySelector(".choice-c");
var choiceD = document.querySelector(".choice-d");
var selectedAnswer = document.querySelectorAll(".answer-btn");

var answer;
var isCorrect = function() {
    return parseInt(answer) === this.correctAnswer
};

//declares startGame function
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

function showQuestion(question) {
    questionCount++;
    questionNum.textContent = "0" + questionCount;
    questionEl.textContent = question.question;
    choiceA.textContent = question.choices[0];
    choiceB.textContent = question.choices[1];
    choiceC.textContent = question.choices[2];
    choiceD.textContent = question.choices[3];
    };

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestion[currentQuestion]);
};

function resetState() {
    submitBtn.classList.toggle("hide");
};

answerBtns.addEventListener('click', function(event) {
    var target = event.target;

    if (target.matches('button')) {
        answer = target.dataset.choice;
        if ( submitBtn.classList.contains('hide') ) {
            submitBtn.classList.toggle('hide')
        }
    }
})


submitBtn.addEventListener('click', function() {
    if (randomQuestion[currentQuestion].isCorrectAnswer()) {
        // correct answer logic
    } else {
        // run logic for incorrect answer
    }
})


start.addEventListener("click", startGame);