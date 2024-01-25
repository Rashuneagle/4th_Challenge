startGameBtn = document.querySelector("#startGame");
var timeLimit = document.getElementById("timeLeft");
var main = document.querySelector(".main");

console.log(startGameBtn);

startGameBtn.addEventListener("click", gameStart);

var secondsLeft = 300;

function gameStart() {
    startGameBtn.remove();

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

    // Display the options and create button for options
    var optionsList = document.createElement('ul');
    currentQuestion.options.forEach(function (option) {
        var optionItem = document.createElement('button');
        optionItem.textContent = option;
        optionItem.addEventListener("click", function () {
            // Handle user selection and save to local storage
            handleOptionSelection(option);
        });
        optionsList.appendChild(optionItem);
    });
    main.appendChild(optionsList);

    console.log(currentQuestion);
    console.log(currentQuestion.options.join(', '));
    console.log(currentQuestion.correct);

    var submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener("click", function () {
        // Handle submission
        handleSubmission();
    });
    optionsList.appendChild(submitBtn);

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeLimit.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            results();
        }
    }, 1000);
}

function handleOptionSelection(selectedOption) {
    // save to local storage
    localStorage.setItem('userSelectedOption', selectedOption);
}

function handleSubmission() {
    // Handle logic when answer is submitted
    console.log("Submit button clicked.");

    // Retrieve the user's selected option from local storage
    var selectedOption = localStorage.getItem('userSelectedOption');
    console.log("User's selected option: " + selectedOption);
}

function results() {

    console.log("Quiz completed. Display results here.");
}