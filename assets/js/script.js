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
    correctAnswer: 1
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

// for day/night view toggle
contrastToggle.addEventListener("click", function() {
    body.classList.toggle("dark");
});

// for background animation
function ready(document) {
    document.querySelector(".wrapper").append("<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>");
};

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

function pageChangeTwo(){
    container.forEach(function(containers) {
        if(containers.classList.contains("two")) {
            containers.classList.add("hide");
        };
        if(containers.classList.contains("three")) {
            containers.classList.remove("hide");
        };
    });
};

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        secondsLeft.textContent = timerCount;
        if (timerCount === 0 || questionCount > questions.length) {
            clearInterval(timer);
            pageChangeTwo();
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
    if (questionCount < questions.length) {
        showQuestion(randomQuestion[currentQuestion]);
    }
    else {
        pageChangeTwo();
    }
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
        localStorage.removeItem("selectedAnswer");
        setNextQuestion(currentQuestion++);
    },600);
});

// results page
var result = document.querySelector(".result");
var userInput = document.querySelector(".name-input"); //grabs input field
var submitBtn = document.querySelector(".submit"); // grabs submit button
var highScoreForm = document.getElementById("high-score-input"); //grabs entire form
var highScoreList = document.getElementById("high-score-list"); //grabs empty ul
var highScoresArray = JSON.parse(localStorage.getItem("High Scores"))|| [] ; //creates empty array for each score to be added to

var liMaker = function(text) {
    console.log(text)
    var li = document.createElement("li");
    li.textContent = text.user + " " + text.score + "%";
    highScoreList.appendChild(li);
};

highScoreForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // highScoresArray.push(userInput.value + " " + score + "%");
    highScoresArray.push({
        user: userInput.value,
        score: score
    });

    localStorage.setItem("High Scores", JSON.stringify(highScoresArray));
    // liMaker(userInput.value);
    dataParse();
    userInput.value = "";
});

dataParse();

function dataParse() {
var data = JSON.parse(localStorage.getItem("High Scores"))||[];

highScoreList.innerHTML = "";

for(let i=0; i< data.length;i++){
    for(j=0;j<data.length;j++){
        if( data[i].score > data[j].score){
            var temp = data[i]
            data[i] = data[j]
            data[j] = temp
        };
    };
};

data.forEach(function(highscore) {
    liMaker(highscore);
});
};

start.addEventListener("click", startGame);
