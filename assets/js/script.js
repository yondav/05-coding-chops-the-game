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
    correctAnswer: 0
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

    correctAnswer: 2
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
    correctAnswer: 2
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
    correctAnswer: 3
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
    correctAnswer: 1
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
    correctAnswer: 3
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
       correctAnswer: 2
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
    correctAnswer: 1
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
    correctAnswer: 3
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
    correctAnswer: 2
},
];

var score;
var timerCount;
var timer;
var randomQuestion;
var currentQuestion;
var questionCount = 0;

var start = document.getElementById("start-btn");
var secondsLeft = document.querySelector(".time");
var container = document.querySelectorAll(".container");
var scoreBoard = document.querySelector(".score");
var questionNum = document.querySelector(".question-number");
var questionEl = document.getElementById("question");
var nextBtn = document.querySelector(".next-btn");
var answerBtns = document.querySelector('#answer-buttons');
var choiceA = document.querySelector(".choice-a");
var choiceB = document.querySelector(".choice-b");
var choiceC = document.querySelector(".choice-c");
var choiceD = document.querySelector(".choice-d");
var selectedAnswer = document.querySelectorAll(".answer-btn");

var contrastToggle = document.getElementById("contrast");
var body = document.querySelector("body");

contrastToggle.addEventListener("click", function() {
    body.classList.toggle("dark");
});




function startGame() {
    pageChangeOne();
    score = 0;
    scoreBoard.textContent = score;
    timerCount = 60;
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    startTimer();
    setNextQuestion();
}

function pageChangeOne() {
    container.forEach(function(containers) {
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
        if (timerCount === 0 || questionCount === questions.length + 1) {
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
    if (questionCount > 9) {
        questionNum.textContent = questionCount;
    }
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
    nextBtn.classList.toggle("hide");
};

answerBtns.addEventListener('click', function(event) {
    var target = event.target;
    if (target.matches('button')) {
        answer = event.target.dataset.choice;
        if ( nextBtn.classList.contains('hide') ) {
            nextBtn.classList.toggle('hide')
        }
        if (parseInt(answer) === questions[currentQuestion].correctAnswer) {
            localStorage.setItem("selectedAnswer", "right");
 
        }
        else {
            localStorage.setItem("selectedAnswer", "wrong");
        }
    }
});

nextBtn.addEventListener('click', function() {
    var getStorage = localStorage.getItem("selectedAnswer");
    
    if (getStorage === "right") {
        console.log("y");
        score += 10;
        scoreBoard.textContent = score;
    } 
    else {
        console.log("n");
        timerCount -= 5;
        secondsLeft.textContent = timerCount;
    };
        setTimeout(function() {
        result.textContent = score + "%";
        localStorage.clear();
        setNextQuestion(currentQuestion++);
    },600);
});

// results page
var result = document.querySelector(".result");
var userInput = document.querySelector(".name-input"); //grabs input field
var submitBtn = document.querySelector(".submit"); // grabs submit button
var highScoreForm = document.getElementById("high-score-input"); //grabs entire form
var highScoreList = document.getElementById("high-score-list"); //grabs empty ul
var highScoresArray = []; //creates empty array for each score to be added to

var liMaker = function(text) {
    var li = document.createElement("li");
    li.textContent = text + " " + score + "%";
    highScoreList.appendChild(li);
};

highScoreForm.addEventListener("submit", function(e) {
    e.preventDefault();

    highScoresArray.push(userInput.value);
    localStorage.setItem("High Scores", JSON.stringify(highScoresArray));
    liMaker(userInput.value);
    userInput.value = "";
});

localStorage.setItem("High Scores", JSON.stringify(highScoresArray));
var data = JSON.parse(localStorage.getItem("High Scores"));

data.forEach(function(highscore) {
    liMaker(highscore);
});

// var highScores;

// if(localStorage.getItem("High Scores")) {
//     highScores = JSON.parse(localStorage.getItem("High Scores"));
// }
// else {
//     highScores = [];
// }

start.addEventListener("click", startGame);
