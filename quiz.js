const questions = [
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        answer: 1
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "super"],
        answer: 1
    },
    {
        question: "What is the size of int data type in Java?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        answer: 2
    },
    {
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "main()", "run()", "init()"],
        answer: 1
    },
    {
        question: "Which of these is NOT a Java access modifier?",
        options: ["public", "private", "protected", "package"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    selectedAnswer = null;
    nextBtn.disabled = true;

    q.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectOption(index, li));
        optionsEl.appendChild(li);
    });

    currentEl.textContent = currentQuestion + 1;
    totalEl.textContent = questions.length;
}

function selectOption(index, element) {
    document.querySelectorAll('.options li').forEach(li => li.classList.remove('selected'));
    element.classList.add('selected');
    selectedAnswer = index;
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    quizEl.classList.remove('hidden');
    resultEl.classList.add('hidden');
    loadQuestion();
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

loadQuestion();
