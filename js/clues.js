var clues={
	/*hydrogen*/"What element is atomic number 1?":"hydrogen",
	/*helium*/"This element was discovered in 1868 and is gaseous":"helium",
	/*lithuium*/"This element is a metal that that has a possible atomic weight of 7":"lithium",
	/*beryllium*/"This element is an alkali earth metal that has an average atomic weight of 9.012":"beryllium",
	/*boron*/"This element is the first metalloid listed.":"boron",
	/*carbon*/"This element has an allotrope that is commonly called 'pencil lead' ":"carbon",
	/*nitrogen*/"This element has a melting point of -210.01°C":"nitrogen",
	/*oxygen*/"This element is used to give blood its red color.":"oxygen",
	/*fluorine*/"":"fluorine",
	/*neon*/"This element is a period 2 element that has no valence electrons":"neon",
	/*sodium*/"This element is used to make salt.":"sodium",
	/*magnesium*/"This element is atomic number 12.":"magnesium",
	/*aluminium*/"This element is used in soda cans.":"aluminium",
	/*silicon*/"This element is used in a varitey of computer parts":"silicon",
	/*phosphorus*/"This element has varying boiling points and resides in period 3":"phosphorus",
	/*sulfur*/"This element produces a bad smell":"sulfur",
	/*chlorine*/"Used in water purification.":"chlorine",
	/*argon*/"This element has an oxidation number of 0 and makes up 1% of the Earth's atmosphere.":"argon",
	/*iron*/"This element has a melting point of 1538°C.":"iron",
	/*selenium*/"This element has an average atomic mass of 78.":"selenium",
};

var currentClue;
var currentAnswer;
var currentCloseAnswer;
var arrClues = [];
var arrAnswers = [];

publishClue();

function reworkIntoArray(object)
{
  arrClues = Object.keys(object);
  arrAnswers = Object.values(object);
}

function publishClue()
{
	reworkIntoArray(clues);
	var intneeded = getRandomInt(0, arrClues.length-1);
	currentClue = arrClues[intneeded];
	currentAnswer = arrAnswers[intneeded];
	currentCloseAnswer = "hydrogen";
}

function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
