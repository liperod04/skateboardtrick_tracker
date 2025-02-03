const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;


// Quiz questions
const questions = [
    {
        question: "What level in skateboarding are you?",
        answers: ['Beginner', 'Intermediate', 'Pro']
    },
    {
        question: "What skate style are you looking to shred in?",
        answers: ['Street', 'Bowl/Park', 'Cruising', 'Downhill']
    }
];

// Start quiz when button is clicked
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.style.display = 'none'; // Hide the start button
    quizContainer.style.display = 'block'; // Show Quiz
    showQuestion();

}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; 
    questionText.innerText = currentQuestion.question;

    answerButtons.innerHTML = ""; // Clear previous answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => handleAnswer(answer)); // If you don't add () => then it will call the function regardless if you click or not.
        answerButtons.appendChild(button);]
        currentQuestionIndex = currentQuestionIndex + 1
    });

}

function handleAnswer(answer) {
    let selectedAnswer = [];
    console.log("You Selected:", answer);
    selectedAnswer.push(answer)



}