var startGameBtn = document.querySelector("#startGame");
var timeLimit = document.getElementById("timeLeft");
var main = document.querySelector(".main");
var resetBtn; // Declare resetBtn globally

var questions;
var currentQuestionIndex = 0;
var isAnswerCorrect = true; // Flag to check if the answer is correct

console.log(startGameBtn);

startGameBtn.addEventListener("click", gameStart);

var secondsLeft = 300;

function gameStart() {
    startGameBtn.remove();

    questions = [
        {
            question: "What is an eventListener?",
            options: ['op1: A function that handles user inputs or interactions','op2: An object used to store data','op3: A method for creating animations','op4: A programming language used for web development'
            ],
            correct: 'op1'
        },
        {
            question: "What is the symbol for a single-line comment in JavaScript?",
            options: ['// ', ' /* ', ' -- ', ' ##'],
            correct: '//'
        },
        {
            question: "What is the purpose of the `var` keyword in JavaScript?",
            options: ['To declare a variable', 'To create a function', 'To define an object', 'To import a library'],
            correct: 'To declare a variable'
        }
    ];

    // Create the reset button
    resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Game';
    resetBtn.addEventListener('click', resetGame);

    // Display the first question
    displayQuestion(questions[currentQuestionIndex]);

    // Append the reset button to the body
    document.body.appendChild(resetBtn);

    // Set up the timer interval
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
        if (!isAnswerCorrect) {
            // Subtract 5 extra seconds if the answer is incorrect
            secondsLeft -= 5;
            isAnswerCorrect = true; // Reset the flag
        }
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

    // Check if the selected option is correct
    if (selectedOption !== questions[currentQuestionIndex].correct) {
        isAnswerCorrect = false;
    }

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

// Reset the game state
function resetGame() {
    // Remove the reset button
    resetBtn.remove();

    // Reset variables
    currentQuestionIndex = 0;
    isAnswerCorrect = true;
    secondsLeft = 300;

    // Clear local storage
    localStorage.removeItem('userSelectedOption');

    // Start the game again
    gameStart();
}
