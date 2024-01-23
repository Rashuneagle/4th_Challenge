var startGameBtn = document.querySelector("#startGame")
var timeLimit = document.getElementById("timeLeft")

console.log(startGameBtn)

startGameBtn.addEventListener("click", gameStart())

var secondsLeft = 300;
function gameStart(){

    var questions[
        {
            question: "What is an eventListener?",
            options:['op1', 'op2', 'op3', 'op4'],
            correct: 'op1'
        },
        {
            question:"question 2",
            options:["op1", "op2", "op3", "op4"],
            correct: "op2"
        },
        {
            {
                question:"question 2",
                options:["op1", "op2", "op3", "op4"],
                correct: "op2"
            },
        }
    ];

    for(i=0; i<questions.length; i++){
        
    }


    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeLimit.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            results();
        }
    }, 1000);

}

function results(){


}