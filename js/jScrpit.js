// window.addEventListener("load", init);

// levele
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// to change level
const currentLevel = levels.easy;
// zmienne globalne
let time = currentLevel;
let score = 0;
let isPlaying;
const timeBar = document.querySelector(".timebar");

const wordInput = document.querySelector("#word-input");
const wordInput2 = document.querySelector("#word-input").innerHTML;

const showingWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messge = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const startGame = document.querySelector(".startGame");
// tablica ze słowami
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];
startGame.addEventListener("click", init);

// funkcja inicjalizująca  gre
function init() {
  seconds.innerHTML = currentLevel;
  document.querySelector(".startGame").style.display = "none";
  // console.log("inicjalizaja funkcji");
  // losowanie randamowych słow z tablicy words

  showWord(words);

  // start matchin on word input
  wordInput.addEventListener("input", startMatch);

  //   Call countdawn every second
  setInterval(countdown, 1000);
  //   check games status
  setInterval(checkStatus, 50);
}

// startMatch
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === showingWord.innerHTML) {
    message.innerHTML = "Prawidłowo ";
    return true;
  } else {
    message.innerHTML = " ";
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  showingWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  //  if sprawdzający czy nie przekroczono czasu
  if (time > 0) {
    // decrement
    timeBar.classList.add("active");
    time--;
  } else if (time === 0) {
    // game over

    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// sprawdz status gry
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over ";
    document.querySelector("div.col-md-6 h3").innerHTML = "Koniec czasu";
    score = -1;
    document.querySelector(".again").classList.add("active");
    document.querySelector(".startGame").style.display = "none";
  }
}

document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});

// modal pop-up
const btnModal = document.querySelector(" nav .instruction");

btnModal.addEventListener("click", () => {
  document.querySelector(".modal-wrap").classList.toggle("active");
  // document.querySelector(".row").classList.toggle("blur");
});

const btnHide = document.querySelector("span.hide");

btnHide.addEventListener("click", () => {
  document.querySelector(".modal-wrap").classList.toggle("active");
  // document.querySelector(".article").classList.toggle("blur");
});
// ========================BURGER======================
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
burger.addEventListener("click", () => {
  iconBurger.classList.toggle("show");
  iconX.classList.toggle("show");
  column.classList.toggle("show");
});
