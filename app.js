//variables for DOM elements
const wordEl = document.querySelector("#word");
const textEl = document.querySelector("#text");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const endGameEl = document.querySelector("#end-game");
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

//get a random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM 
function addWordToDOM(){
    randomWord = getRandomWord();

    wordEl.innerHTML = randomWord;
}

//update score
function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

addWordToDOM();


// event listeners
textEl.addEventListener("input", e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        //add new random word to DOM
        addWordToDOM();
        updateScore();
        //clear
        e.target.value = ""
        //update score
        s
    }
});