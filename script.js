
// =======================
// Данные вопросов по уровням
const levels = [
  // Легкий
  [
    {
      question: "Что такое множество?",
      answers: ["Набор элементов", "Функция", "Последовательность", "Алгоритм"],
      correct: 0,
      explanation: "Множество — это коллекция уникальных элементов."
    },
    {
      question: "Что такое граф?",
      answers: ["Набор вершин и рёбер", "Множество чисел", "Функция", "Алгоритм"],
      correct: 0,
      explanation: "Граф состоит из вершин и рёбер между ними."
    }
  ],
  // Средний
  [
    {
      question: "Что такое биекция?",
      answers: ["Взаимно однозначное соответствие", "Функция", "Множество", "Последовательность"],
      correct: 0,
      explanation: "Биекция — это взаимно однозначное соответствие между элементами двух множеств."
    },
    {
      question: "Что такое комбинаторика?",
      answers: ["Раздел математики, изучающий методы подсчёта", "Функция", "Алгоритм", "Множество"],
      correct: 0,
      explanation: "Комбинаторика занимается подсчетом и анализом конечных структур."
    }
  ],
  // Сложный
  [
    {
      question: "Что такое булева алгебра?",
      answers: ["Алгебра логических операций", "Набор чисел", "Функция", "Последовательность"],
      correct: 0,
      explanation: "Булева алгебра изучает операции над логическими значениями."
    },
    {
      question: "Что такое теория графов?",
      answers: ["Изучение графов и их свойств", "Множество функций", "Последовательность чисел", "Алгоритмы"],
      correct: 0,
      explanation: "Теория графов — раздел дискретной математики, изучающий графы."
    }
  ]
];

// ============== Элементы интерфейса
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const livesEl = document.getElementById("lives");
const progressEl = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const timeEl = document.getElementById("time");
const levelSelect = document.getElementById("level-select");

const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const soundTimeout = document.getElementById("sound-timeout");

// ============== Переменные состояния
let level = 0;
let questionIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 20;
let gameOver = false;
let questionsOrder = []; // Для рандомизации

// ============== Функции

function shuffleArray(arr) {
  for (let i = arr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateLives() {
  livesEl.textContent = "❤️".repeat(lives);
}

function updateProgress() {
  progressEl.max = questionsOrder.length;
  progressEl.value = questionIndex;
  progressText.textContent = `${questionIndex} / ${questionsOrder.length}`;
}

function showResult(text) {
  resultEl.textContent = text;
}

function disableAnswers() {
  const buttons = answersEl.querySelectorAll("button");
  const correct = levels[level][questionsOrder[questionIndex]].correct;
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.style.backgroundColor = "#c8e6c9"; // зелёный
    }
  });
}

function resetAnswers() {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.backgroundColor = "";
    btn.disabled = false;
  });
}

function startTimer() {
  timeLeft = 20;
  timeEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      soundTimeout.play();
      showResult("⏰ Время вышло!");
      disableAnswers();
      nextBtn.style.display = "block";
    }
  }, 1000);
}

let currentAnswerMap = []; // Здесь будет храниться реальный индекс ответа для каждой кнопки

function loadQuestion() {
  gameOver = false;
  resetAnswers();
  updateLives();
  updateProgress();
  showResult("");

  if (questionIndex >= questionsOrder.length) {
    endGame();
    return;
  }

  const q = levels[level][questionsOrder[questionIndex]];

  questionEl.textContent = q.question;

  // Очистка ответов
  answersEl.innerHTML = "";

  // Рандомизируем порядок ответов
  let answersArr = q.answers.map((ans, idx) => ({text: ans, index: idx}));
  shuffleArray(answersArr);

  currentAnswerMap = []; // очищаем мапу

  answersArr.forEach((ansObj, btnIdx) => {
    const btn = document.createElement("button");
    btn.textContent = ansObj.text;
    btn.onclick = () => checkAnswer(btnIdx);
    answersEl.appendChild(btn);

    currentAnswerMap.push(ansObj.index); // запоминаем реальный индекс ответа для этой кнопки
  });

  nextBtn.style.display = "none";

  startTimer();
}

function checkAnswer(btnIdx) {
  if (gameOver) return;

  clearInterval(timer);

  const q = levels[level][questionsOrder[questionIndex]];
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    // Подсвечиваем правильный ответ (кнопка, у которой real индекс === q.correct)
    if (currentAnswerMap[i] === q.correct) btn.style.backgroundColor = "#c8e6c9";

    // Подсвечиваем выбранную кнопку, если неправильный ответ
    if (i === btnIdx && currentAnswerMap[i] !== q.correct) btn.style.backgroundColor = "#ffcdd2";
  });

  if (currentAnswerMap[btnIdx] === q.correct) {
    soundCorrect.play();
    score += 10 + timeLeft;
    showResult("✅ Верно! " + q.explanation);
  } else {
    soundWrong.play();
    lives--;
    updateLives();
    showResult("❌ Неверно! " + q.explanation);
    if (lives <= 0) {
      gameOver = true;
      showResult("💀 Игра окончена! Жизни закончились.");
      nextBtn.style.display = "none";
      return;
    }
  }

  localStorage.setItem('quizScore', score);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  questionIndex++;
  loadQuestion();
}

function endGame() {
  gameOver = true;
  questionEl.textContent = "Игра окончена!";
  answersEl.innerHTML = "";
  showResult(`Ваш итоговый счёт: ${score} очков из ${questionsOrder.length} вопросов.`);
  nextBtn.style.display = "none";
}

// Инициализация игры
function startGame() {
  score = 0;
  lives = 3;
  questionIndex = 0;
  updateLives();

  // Рандомизируем порядок вопросов
  questionsOrder = Array.from(Array(levels[level].length).keys());
  shuffleArray(questionsOrder);

  loadQuestion();
}

// Обработчик выбора уровня
levelSelect.onchange = () => {
  level = +levelSelect.value;
  startGame();
};

nextBtn.onclick = () => {
  nextQuestion();
};

// Запускаем игру сразу
startGame();

// Поддержка клавиатуры (1-4 для ответов)
document.addEventListener('keydown', e => {
  if (gameOver) return;

  if (e.key >= '1' && e.key <= '4') {
    const btns = answersEl.querySelectorAll('button');
    const idx = +e.key - 1;
    if (btns[idx] && !btns[idx].disabled) {
      btns[idx].click();
    }
  }
});
