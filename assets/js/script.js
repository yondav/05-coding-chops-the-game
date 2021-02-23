var start = document.getElementById("start-btn");
var secondsLeft = document.querySelector(".time");
var container = document.querySelectorAll(".container");

var timerCount;


container.forEach(function(containers) {
    // console.log(containers);
    start.addEventListener("click", function() {
        container.forEach(function(containers) {
            if(containers.classList.contains("two")) {
                containers.classList.remove("hide");
            }
            if(containers.classList.contains("one")) {
                containers.classList.add("hide");
            }
        });
    });
});