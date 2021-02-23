var start = document.getElementById("start-btn");
var secondsLeft = document.querySelector(".time");
var container = document.querySelectorAll(".container");

// timer variables
var timerCount;
var timer;


function startGame() {
    // console.log("i'm starting");
    pageChangeOne();
    timerCount = 60;
    startTimer();

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


start.addEventListener("click", startGame);

// container.forEach(function(containers) {
//     // console.log(containers);
//     start.addEventListener("click", function() {
//         container.forEach(function(containers) {
            // if(containers.classList.contains("two")) {
            //     containers.classList.remove("hide");
            // }
            // if(containers.classList.contains("one")) {
            //     containers.classList.add("hide");
//             }
//         });
//     });
//     function startTimer() {
//         timer = setInterval() {
//             timerCount--;
//         }
//     }
// })