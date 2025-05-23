// =======================
const levels = [
  // Легкий
  [
    {
      question: "Что такое логическая функция?",
      answers: ["Функция, принимающая логические значения", "Числовая функция", "График функции", "Последовательность"],
      correct: 0,
      explanation: "Логическая функция работает с логическими (истинность/ложь) значениями."
    },
    {
      question: "Какое значение имеет логическая переменная A, если она равна true?",
      answers: ["Истина", "Ложь", "Ноль", "Один"],
      correct: 0,
      explanation: "True в логике означает истину."
    },
    {
      question: "Что означает логическая операция НЕ (¬A)?",
      answers: ["Инвертирует значение", "Удваивает значение", "Удаляет значение", "Увеличивает на 1"],
      correct: 0,
      explanation: "НЕ инвертирует логическое значение: из true делает false и наоборот."
    },
    {
      question: "Какое значение даст операция И (A ∧ B), если A = true и B = false?",
      answers: ["false", "true", "0", "1"],
      correct: 0,
      explanation: "Операция И возвращает true только если оба операнда равны true."
    },
    {
      question: "Что возвращает операция ИЛИ (A ∨ B), если A = false и B = true?",
      answers: ["true", "false", "Ошибка", "Ноль"],
      correct: 0,
      explanation: "ИЛИ возвращает true, если хотя бы один операнд равен true."
    },
    {
      question: "Как записывается логическая операция НЕ в языках программирования?",
      answers: ["!", "&&", "||", "~"],
      correct: 0,
      explanation: "В большинстве языков программирования (C#, JS, Python) логическая инверсия обозначается знаком \"!\"."
    },
    {
      question: "Какие значения может принимать логическая переменная?",
      answers: ["true и false", "0 и 2", "1 и 3", "Любое число"],
      correct: 0,
      explanation: "Логические переменные принимают два значения: истина (true) и ложь (false)."
    },
    {
      question: "Что такое таблица истинности?",
      answers: ["Таблица, показывающая все возможные значения логической функции", "Матемический график", "Список чисел", "Карта"],
      correct: 0,
      explanation: "Таблица истинности показывает результат логической функции при всех возможных входах."
    },
    {
      question: "Какой результат у выражения true && true?",
      answers: ["true", "false", "null", "undefined"],
      correct: 0,
      explanation: "Операция И возвращает true только если оба значения — true."
    },
    {
      question: "Что означает выражение false || true?",
      answers: ["true", "false", "Ошибка", "0"],
      correct: 0,
      explanation: "ИЛИ возвращает true, если хотя бы одно значение — true."
    }
  ],
  // Средний
  [
    {
      question: "Какое значение имеет выражение !(true || false)?",
      answers: ["false", "true", "Ошибка", "undefined"],
      correct: 0,
      explanation: "true || false равно true, а !true — это false."
    },
    {
      question: "Какой логической функции соответствует выражение !(A ∧ B)?",
      answers: ["дизъюнкция отрицаний (¬A ∨ ¬B)", "конъюнкция отрицаний (¬A ∧ ¬B)", "импликация", "эквивалентность"],
      correct: 0,
      explanation: "Это закон де Моргана: !(A ∧ B) ≡ ¬A ∨ ¬B."
    },
    {
      question: "Что такое импликация в логике (A → B)?",
      answers: ["Если A, то B", "A и B", "A или B", "A эквивалентно B"],
      correct: 0,
      explanation: "Импликация означает, что из A следует B."
    },
    {
      question: "Какой результат у выражения true → false?",
      answers: ["false", "true", "undefined", "null"],
      correct: 0,
      explanation: "Импликация ложна только если из истины следует ложь."
    },
    {
      question: "Что такое эквивалентность (A ⇔ B)?",
      answers: ["A и B имеют одинаковые значения", "A и B различны", "A больше B", "A меньше B"],
      correct: 0,
      explanation: "Эквивалентность истинна, если оба значения одинаковы."
    },
    {
      question: "Как называется логическая операция, возвращающая true только если один из аргументов true, но не оба?",
      answers: ["исключающее ИЛИ", "конъюнкция", "импликация", "эквивалентность"],
      correct: 0,
      explanation: "Исключающее ИЛИ (XOR) — истина, если аргументы различны."
    },
    {
      question: "Сколько различных логических функций можно построить от двух переменных?",
      answers: ["16", "4", "8", "2"],
      correct: 0,
      explanation: "Для двух переменных существует 2⁴ = 16 возможных функций."
    },
    {
      question: "Какой логической операции соответствует выражение A ⊕ B?",
      answers: ["исключающее ИЛИ", "конъюнкция", "эквивалентность", "импликация"],
      correct: 0,
      explanation: "Символ ⊕ обозначает исключающее ИЛИ (XOR)."
    },
    {
      question: "Какой результат у выражения A = true, B = false, C = true; A && (B || C)?",
      answers: ["true", "false", "Ошибка", "undefined"],
      correct: 0,
      explanation: "B || C = true, A && true = true."
    },
    {
      question: "Что обозначает закон де Моргана?",
      answers: ["Связь между отрицанием конъюнкции и дизъюнкции", "Закон умножения", "Теорема Пифагора", "Определение множества"],
      correct: 0,
      explanation: "Закон де Моргана преобразует отрицание логических операций."
    }
  ],
  // Сложный
  [
    {
      question: "Какое выражение является полной дизъюнктивной нормальной формой (ДНФ) функции F(A,B) = A ∧ ¬B?",
      answers: ["(A ∧ ¬B)", "(¬A ∧ B)", "(A ∧ B)", "(¬A ∧ ¬B) ∨ (A ∧ B)"],
      correct: 0,
      explanation: "A ∧ ¬B уже является элементарной дизъюнктивной формой."
    },
    {
      question: "Что означает минимизация логической функции?",
      answers: ["Упрощение выражения без изменения результата", "Удаление переменных", "Удаление скобок", "Сведение к нулю"],
      correct: 0,
      explanation: "Минимизация — это процесс упрощения выражения без потери логики."
    },
    {
      question: "Какой метод используют для минимизации логических функций?",
      answers: ["Карты Карно", "Диаграммы Венна", "Метод Монте-Карло", "Интеграл"],
      correct: 0,
      explanation: "Карты Карно — визуальный способ упрощения логических выражений."
    },
    {
      question: "Что такое конституента в логике?",
      answers: ["Термин в ДНФ или КНФ", "Тип переменной", "Логическая ошибка", "Матемическое множество"],
      correct: 0,
      explanation: "Конституента — элементарный конъюнкт или дизъюнкт в нормальной форме."
    },
    {
      question: "Что обозначает СДНФ?",
      answers: ["Совершенная дизъюнктивная нормальная форма", "Сумма дизъюнкций", "Сложная дизъюнкция", "Симметричная функция"],
      correct: 0,
      explanation: "СДНФ — это дизъюнкция всех элементарных конъюнктов, где функция принимает значение 1."
    },
    {
      question: "Сколько строк будет в таблице истинности для функции от 4 переменных?",
      answers: ["16", "8", "4", "32"],
      correct: 0,
      explanation: "Для 4 переменных 2⁴ = 16 строк в таблице истинности."
    },
    {
      question: "Что такое КНФ в логике?",
      answers: ["Конъюнктивная нормальная форма", "Конечная нормальная функция", "Карта нормальных форм", "Квантовая функция"],
      correct: 0,
      explanation: "КНФ — это конъюнкция дизъюнктов переменных и их отрицаний."
    },
    {
      question: "Чему равна симметричная логическая функция двух переменных?",
      answers: ["Функция, значение которой зависит только от числа единиц", "ИЛИ", "КНФ", "Импликация"],
      correct: 0,
      explanation: "Симметричная функция зависит от количества true, а не от их положения."
    },
    {
      question: "Можно ли выразить любую логическую функцию через И, ИЛИ, НЕ?",
      answers: ["Да", "Нет", "Только бинарные", "Только тернарные"],
      correct: 0,
      explanation: "И, ИЛИ, НЕ образуют полную систему логических операций."
    },
    {
      question: "Что обозначает логическая полнота системы операций?",
      answers: ["Возможность выразить любую функцию", "Полное покрытие таблицы", "Максимальное число переменных", "Двойное отрицание"],
      correct: 0,
      explanation: "Полная система позволяет выразить любую логическую функцию."
    }
  ]
];

// =======================
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const livesEl = document.getElementById("lives");
const progressEl = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const timeEl = document.getElementById("time");

const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");
const soundTimeout = document.getElementById("sound-timeout");

const mainMenu = document.getElementById("main-menu");
const startButton = document.getElementById("start-button");
const menuLevelSelect = document.getElementById("menu-level-select");
const lastScoreEl = document.getElementById("last-score");

// =======================
let level = 0;
let questionIndex = 0;
let score = 0;
let lives = 3;
let timer = null;
let timeLeft = 20;
let gameOver = false;
let questionsOrder = [];
let currentAnswerMap = [];

// =======================
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

function resetAnswers() {
  answersEl.innerHTML = "";
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

function disableAnswers() {
  const buttons = answersEl.querySelectorAll("button");
  const q = levels[level][questionsOrder[questionIndex]];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (currentAnswerMap[i] === q.correct) {
      btn.style.backgroundColor = "#c8e6c9";
    }
  });
}

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

  let answersArr = q.answers.map((text, idx) => ({ text, index: idx }));
  shuffleArray(answersArr);
  currentAnswerMap = [];

  answersArr.forEach((ansObj, btnIdx) => {
    const btn = document.createElement("button");
    btn.textContent = ansObj.text;
    btn.onclick = () => checkAnswer(btnIdx);
    answersEl.appendChild(btn);
    currentAnswerMap.push(ansObj.index);
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
    if (currentAnswerMap[i] === q.correct) {
      btn.style.backgroundColor = "#c8e6c9";
    }
    if (i === btnIdx && currentAnswerMap[i] !== q.correct) {
      btn.style.backgroundColor = "#ffcdd2";
    }
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

function startGame() {
  score = 0;
  lives = 3;
  questionIndex = 0;
  updateLives();

  questionsOrder = Array.from(Array(levels[level].length).keys());
  shuffleArray(questionsOrder);

  loadQuestion();
}

function showMainMenu() {
  mainMenu.style.display = "block";
  document.getElementById("quiz-container").style.display = "none";

  const last = localStorage.getItem("quizScore");
  if (last) {
    lastScoreEl.textContent = `Ваш предыдущий результат: ${last} очков`;
  }
}

startButton.onclick = () => {
  level = +menuLevelSelect.value;
  mainMenu.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  startGame();
};

nextBtn.onclick = () => {
  nextQuestion();
};

showMainMenu();

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

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Применение сохранённой темы
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
  }

  // Переключение темы
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
