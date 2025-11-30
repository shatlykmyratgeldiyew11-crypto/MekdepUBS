// script.js

let questions = [
  {
    prompt: "Diñe dodak çekimlisi bolan sözi tapyñ",
    options: ["göle", "balyk", "oglan", "çukur"],
    answer: "çukur",
  },
  {
    prompt: "-ym, -im, -um, -üm, -m haýsy ýöňkemäniň goşulmasy?",
    options: [
      "Menlik ýöňkemäniň goşulmasy",
      "Senlik ýöňkemäniň goşulmasy",
      "Olluk ýöňkemäniň goşulmasy",
    ],
    answer: "Menlik ýöňkemäniň goşulmasy",
  },
  {
    prompt: "“Orazyň kakasy ussa” birinji yazylan at haýsy düşümde gelipdir?",
    options: ["Baş düşüm", "Eýelik düşüm", "Ýöneliş düşüm"],
    answer: "Eýelik düşüm",
  },
  {
    prompt: "Sypatlar nähili soraglara jogap bolÿarlar ?",
    options: ["nädip", "nähili, neneñsi, nätüÿsli", "kim, näme, nire"],
    answer: "nähili, neneñsi, nätüÿsli",
  },
  {
    prompt: "English",
    options: ["Indiki"],
    answer: "Indiki",
  },
  {
    prompt: "My father… a doctor.",
    option: ["is", "am", "are"],
    answer: "is",
  },
  {
    prompt: "… her mother  teaches   at school?",
    options: ["is", "am", "are"],
    answer: "is",
  },
  {
    prompt: "Mary … tennis on Sundays.",
    options: ["plays", "playing", "play"],
    answer: "plays",
  },
  {
    prompt: "It is … in Summer.",
    options: ["cold", "hot", "rainy"],
    answer: "hot",
  },
  {
    prompt: "I … in the living room.",
    options: ["play", "have a shower", "relax"],
    answer: "relax",
  },
  {
    prompt: "Сколько букв в русском алфавите",
    options: ["25", "30", "33"],
    answer: "33",
  },
  {
    prompt: "Состав слова это-",
    options: [
      "приставка, корень, суффикс, окончание, основа.",
      " слог",
      "ударение",
    ],
    answer: "приставка, корень, суффикс, окончание, основа.",
  },
  {
    prompt: "Звонкие согласные звуки это-",
    options: [" с, ж, г, ш, ф, п", "б, в, г, д, ж, з", "п, ф, к, т, ш, с."],
    answer: "",
  },
  {
    prompt: "Главные члены предложение это-",
    options: ["Определение", " Слог ", "Подлежащее и сказуемое"],
    answer: "Подлежащее и сказуемое",
  },
  {
    prompt: "Личные местоимения ",
    options: [
      "Я, ТЫ, ОН, ОНО, МЫ, ВЫ, ОНИ.",
      "МОЙ, ТВОЙ, МОЁ, ТВОЁ.",
      "ЕЁ, ЕГО, ИХ,",
    ],
    answer: "МОЙ, ТВОЙ, МОЁ, ТВОЁ.",
  },
  {
    prompt: "Adama uky näme üçin gerek?",
    options: [
      "ösmek üçin",
      "semremek üçin",
      "dynç almak we bedeniňi berkitmek üçin",
    ],
    answer: "dynç almak we bedeniňi berkitmek üçin",
  },
  {
    prompt: "Ýaşy 7-den 10-na çenli bolan mekdep okuwçysy näçe sagat ýatmaly",
    options: ["8 sagat", "9 sagat", "10-11 sagat"],
    answer: "",
  },
  {
    prompt: " Bedenterbiýe we sport näme üçin gerek?",
    options: [
      " owadan bolmak üçin",
      "saglygyňy berkitmek üçin",
      "bedeniňi işe taýýarlamak üçin",
    ],
    answer: "saglygyňy berkitmek üçin",
  },
  {
    prompt: "Hasaplaň.  390 – (240 + 100 : 2) =",
    options: ["200", "100", "220"],
    answer: "100",
  },
  {
    prompt: "Haýsysy  dogry",
    options: [
      "100 sm = 1 m hem 1 kg = 100 g",
      " 100 sm = 10 m hem 1 kg = 1000 g",
      "100 sm = 1m hem 1 kg = 1000 g",
    ],
    answer: "100 sm = 1m hem 1 kg = 1000 g",
  },
  {
    prompt:
      " Birinji gün ýük maşyny ekin meýdanyndan 360 sentner kelem äkitdi, bu bolsa,ikinji gündäkiden 50 sentner az. Maşyn iki günde näçe sentner kelem äkitdi",
    options: ["670 sentner", "770 sentner", "410 sentner"],
    answer: "670 sentner",
  },
];

// Get Dom Elements

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 60;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  let landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let promptEl = document.getElementById("question-words");
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  currentQuestion.options.forEach(function (choice, i) {
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = questionClick;
    choicesEl.appendChild(choiceBtn);
  });
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 60;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent =
      "Nädogry! Dogry jogap:  " + questions[currentQuestionIndex].answer;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Jogap dogry!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 3000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// Soraglary gizlemek bilen wiktorinany tamamlaň,
//taýmeri duruzyň we jemleýji balyňyzy görkeziň

function quizEnd() {
  clearInterval(timerId);
  let endScreenEl = document.getElementById("quiz-end");
  endScreenEl.removeAttribute("class");
  let finalScoreEl = document.getElementById("score-final");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

// Taýmer 0-a ýetýän bolsa, wiktorina gutar

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

// Ballary ulanyjylaryň ady bilen birlikde ýerli ammarda saklaň

function saveHighscore() {
  let name = nameEl.value.trim();
  if (name !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    let newScore = {
      score: time,
      name: name,
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    alert(name + " Siziň balyňyz ýatda saklandy");
  }
}

// Save users' score after pressing enter

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
    alert(" Siziň balyňyz ýatda saklandy");
  }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
