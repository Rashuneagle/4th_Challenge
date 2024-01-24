startGameBtn = document.querySelector("#startGame");
var timeLimit = document.getElementById("timeLeft");
var main = document.querySelector(".main");

console.log(startGameBtn);

startGameBtn.addEventListener("click", gameStart);

var secondsLeft = 300;

function gameStart() {
    var questions = [
        {
            question: "What is an eventListener?",
            options: ['op1', 'op2', 'op3', 'op4'],
            correct: 'op1'
        },
        {
            question: "question 2",
            options: ["op1", "op2", "op3", "op4"],
            correct: "op2"
        },
        {
            question: "question 3",
            options: ["op1", "op2", "op3", "op4"],
            correct: "op2"
        }
    ];

    var currentQuestion = questions[0];

    // Display the question
    var questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestion.question;
    main.appendChild(questionElement);

    // Display the options
    var optionsList = document.createElement('ul');
    currentQuestion.options.forEach(function (option) {
        var optionItem = document.createElement('li');
        optionItem.textContent = option;
        optionsList.appendChild(optionItem);
    });
    main.appendChild(optionsList);

    console.log(currentQuestion);
    console.log(currentQuestion.options.join(', '));
    console.log(currentQuestion.correct);

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeLimit.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            results();
        }
    }, 1000);
}

function results() {
    // Add your logic for displaying results
    console.log("Quiz completed. Display results here.");
}