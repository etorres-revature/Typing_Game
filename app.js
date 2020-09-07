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
//ternary for pulling from local storage
//if it isn't null get the difficulty set from local storage and put it into the variable
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    //otherwise set the difficulty to medium as default
    : "medium";

//set difficulty select value
difficultySelectEl.value =
//ternary for pulling from local storage
//if it isn't null get the difficulty and set the select to that value
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    //otherwise set the difficulty to medium as defualt in select
    : "medium";

//focus on text input on start
textEl.focus();

//start counting down timer by 1 second
const timeInterval = setInterval(updateTime, 1000);

//get a random word from array
function getRandomWord() {
  //returns random word from words array
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
  //setting randomWord variable to the get random work function
  randomWord = getRandomWord();

  wordEl.innerHTML = randomWord;
}

//update score
function updateScore() {
  //incrementing the score
  score++;
  //putting the new score value into the html
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  //decrementing time
  time--;
  //putting the time value into the html
  timeEl.innerHTML = time + "s";

  //logice for end game when time reaches zero
  if (time === 0) {
    //stop the timer
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

//function to add word to DOM
addWordToDOM();

// event listeners
textEl.addEventListener("input", (e) => {
  //setting the value of a variable to the typed in letters
  const insertedText = e.target.value;

  //when the typed in text is the same as the randomword to this
  if (insertedText === randomWord) {
    //add new random word to DOM
    addWordToDOM();
    //update score
    updateScore();

    //clear
    e.target.value = "";

    //different time increments for getting the word typed in correctly based on difficulty
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    //updating the time
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
