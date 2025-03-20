const startButton = document.getElementById("start-btn");            // Assigning these constants/variables to these elements from
const quizContainer = document.getElementById("quiz-container");     // the HTML file.
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

// Quiz data
const questions = [
    {
        text: "What skateboarding level best describes you?", 
        options: ["Beginner", "Intermediate", "Expert"]
    },
    { 
        text: "What type of skateboard do you want?", 
        options: ["Street", "Bowl", "Cruiser"]
    },
    { 
        text: "What size deck do you prefer?", 
        options: ["Small", "Medium", "Large"]
    },
    { 
        text: "What's your budget?", 
        options: ["Broke", "Piggy Bank Savings", "Balling"]
    }
];

let currentQuestionIndex = 0;

// Start quiz when button is clicked
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none"; // Hide the start button
    quizContainer.style.display = "block"; // Show the quiz
    showQuestion();
}
// "style" is a CSS class, so we need to call it first before using display just like
// how you access a element in a dictionary


function showQuestion() {
    // Get current question
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question text
    questionText.innerHTML = currentQuestion.text;

    // Clear old buttons
    answerButtons.innerHTML = "";

    // Create new answer buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => nextQuestion(index));    // Functions with paranthesis on them are immediately called
        answerButtons.appendChild(button);                              // and dont wait for event listeners. So either you create a () => anonymous function
    });                                                                 // or you use the onclick method instead. But then you can't have more than one function for that button.
}

function nextQuestion(selectedAnswer) {
    console.log(`You chose: ${questions[currentQuestionIndex].options[selectedAnswer]}`);
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        console.log("Quiz is finished! Calling endQuiz()");
        endQuiz();
    }
}


function endQuiz() {
    console.log("Clearing screen for Three.js...");
    document.body.innerHTML = "";

    if (typeof window.startThreeJS === "function") {
        console.log("startThreeJS exists! Calling it now...");
        window.startThreeJS();
    } else {
        console.error("startThreeJS is STILL not defined!");
    }
}
