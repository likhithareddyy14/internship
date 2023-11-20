const questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], correctAnswer: 'Paris' },
    { question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswer: 'Tokyo' },
    { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Auckland'], correctAnswer: 'Canberra' },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const feedbackContainer = document.getElementById('feedback-container');

    questionContainer.innerText = questions[currentQuestionIndex].question;
    answerButtons.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(option));
        answerButtons.appendChild(button);
    });

    feedbackContainer.innerText = '';
    document.getElementById('next-button').disabled = true;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackContainer = document.getElementById('feedback-container');
    const nextButton = document.getElementById('next-button');

    if (selectedAnswer === correctAnswer) {
        feedbackContainer.innerText = 'Correct!';
        score++;
    } else {
        feedbackContainer.innerText = `Incorrect! The correct answer is ${correctAnswer}.`;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const feedbackContainer = document.getElementById('feedback-container');
    const scoreContainer = document.getElementById('score-container');
    const nextButton = document.getElementById('next-button');

    questionContainer.innerText = 'Quiz Completed!';
    answerButtons.innerHTML = '';
    feedbackContainer.innerText = '';
    scoreContainer.innerText = `Final Score: ${score}/${questions.length}`;
    nextButton.disabled = true;
}

// Start the game
startGame();
