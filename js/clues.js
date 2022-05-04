var clues=[
  "What element is atomic number 1?",
  "What element has an average atomic mass of 78?",
  "What element has a melting point of 1538 degrees celcius?"
];
var answers=[
  "hydrogen",
  "selenium",
  "iron"
];
var closeAnswers=["helium"];

var currentClue;
var currentAnswer;
var currentCloseAnswer;

publishClue();

function publishClue()
{
  currentClue = clues[getRandomInt(0, clues.length-1)];
  currentAnswer = answers[getRandomInt(0, answers.length-1)];
  currentCloseAnswer = closeAnswers[0];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
