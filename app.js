//variables for DOM elements
const wordEl = document.querySelector("#word");
const textEl = document.querySelector("#text");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const endGameEl = document.querySelector("#end-game-container");
const settingBtn = document.querySelector("#settings-btn");
const settingEl = document.querySelector("#settings");
const settingFormEl = document.querySelector("#settings-form");
const difficultySelectEl = document.querySelector("#difficulty");

//list of words for game
let words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warrior",
  "bad",
  "north",
  "south",
  "east",
  "west",
  "dependency",
  "steer",
  "silver",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "lovingly",
  "wednesday",
  "november",
];

//initialize word
let randomWord;

//initialize score
let score = 0;

//initialize time
let time = 10;

//initialize difficulty and set difficulty to value in local storage
//or if no local storage set default as medium
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set difficulty select value
difficultySelectEl.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//focus on text input on start
textEl.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//get a random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();

  wordEl.innerHTML = randomWord;
}

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

//game over/show end screen
function gameOver() {
  endGameEl.innerHTML = `
<h1>TIME RAN OUT!!</h1>
<p>Your final score: ${score}</p>
<button onclick="location.reload()">Play Again</button>
`;
  endGameEl.style.display = "flex";
}

addWordToDOM();

// event listeners
textEl.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    //add new random word to DOM
    addWordToDOM();
    //update score
    updateScore();

    //clear
    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

//hide settings button click
settingBtn.addEventListener("click", () => {
  settingEl.classList.toggle("hide");
});

//select setting
settingFormEl.addEventListener("change", (e) => {
  difficulty = e.target.value;
  console.log(difficulty);
  localStorage.setItem("difficulty", difficulty);
});
