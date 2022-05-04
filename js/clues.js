var clues=[
  "What element is atomic number 1?",
  "This element was discovered in 1868 and is gaseous",
  "This element is a metal that that has a possible atomic weight of 7",
  "What element has an average atomic mass of 78?",
  "What element has a melting point of 1538 degrees celcius?",
  "This element is a period 2 element that has no valence electrons",
  "This element has an allotrope that is commonly called 'lead' ",
  "This element has many colors, and a boiling point of 280.5 degrees celcius for one of its colors?"
];
var answers=[
  "hydrogen",
  "helium",
  "lithium",
  "selenium",
  "iron",
  "neon",
  "carbon",
  "phosphorus"
];
var closeAnswers=[
  "helium",
  "hydrogen",
  "beryllium",
  "bromine",
  "cobalt",
  "potassium",
  "nitrogen",
  "sulfur"
];

var currentClue;
var currentAnswer;
var currentCloseAnswer;

publishClue();

function publishClue()
{
  var intneeded = getRandomInt(0, clues.length-1);
  currentClue = clues[intneeded];
  currentAnswer = answers[intneeded];
  currentCloseAnswer = closeAnswers[intneeded];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
