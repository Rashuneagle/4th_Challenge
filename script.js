var startGameBtn = document.querySelector("#startGame");
var timeLimit = document.getElementById("timeLeft");
var main = document.querySelector(".main");
var questions;
var currentQuestionIndex = 0;

console.log(startGameBtn);

startGameBtn.addEventListener("click", gameStart);

var secondsLeft = 300;

function gameStart() {
    startGameBtn.remove();

    questions = [
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

    displayQuestion(questions[currentQuestionIndex]);

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeLimit.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            results();
        }
    }, 1000);
}

function displayQuestion(currentQuestion) {
    // Clear existing content
    main.innerHTML = '';

    // Display the question
    var questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestion.question;
    main.appendChild(questionElement);

    // Display the options and create buttons for options
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

    // Make submit button for section
    var submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener("click", function () {
        // Handle submission
        handleSubmission();
    });
    optionsList.appendChild(submitBtn);
}

function handleOptionSelection(selectedOption) {
    // Save the user's selection to local storage
    localStorage.setItem('userSelectedOption', selectedOption);
}

function handleSubmission() {
    // Handle logic when the user submits an answer
    console.log("Submit button clicked.");

    // Retrieve the user's selected option from local storage
    var selectedOption = localStorage.getItem('userSelectedOption');
    console.log("User's selected option: " + selectedOption);

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        // No more questions, display results
        results();
    }
}

function results() {
    console.log("Quiz completed. Display results here.");

    // Display results for each question
    for (var i = 0; i < questions.length; i++) {
        var resultElement = document.createElement('p');
        resultElement.textContent = "Question " + (i + 1) + ": You selected " +
            localStorage.getItem('userSelectedOption') + ", Correct answer: " +
            questions[i].correct;
        main.appendChild(resultElement);
    }
}
