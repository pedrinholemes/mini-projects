const longWord = "Word is long";
const sortWord = "Word is sort";

var wordOneChar;
var wordTwoChar;
var wordThreeChar;
var wordOneCharCurrent=0;
var wordTwoCharCurrent=0;
var wordThreeCharCurrent=0;
var wordOneMemory;
var wordTwoMemory;
var wordThreeMemory;
var lastLetter;
var letterMemory = [];

var point = 0 ;

function themeGame() {
	var themeNumber = Math.floor(Math.random() * themes.length);
	var tema = themes[themeNumber];
	for (var i = theme.length - 1; i >= 0; i--) {
		if (theme[i][0]==tema) {
			initGame(i);
		}
	}
}
function setWords(arrayTheme) {
	wordOneChar = arrayTheme[1].length;
	wordTwoChar = arrayTheme[2].length;
	wordThreeChar = arrayTheme[3].length;
}
function initGame(i) {
	setWords(theme[i]);
	setWordOne(theme[i][1]);
	setWordTwo(theme[i][2]);
	setWordThree(theme[i][3]);
	setTip(theme[i][0]);
	document.getElementById('gameSettings').style.display = 'none';
	document.getElementById('gameDisplay').style.display = 'inline-block';
}
function setTip(tip) {
	document.getElementById('dica').innerText = tip;
}
function searchLetter(letter) {
	document.getElementById('letterSearch').value = "";
	if (letterMemory.length == 0) {
		letterSearch(letter);
	} else {
		for (var i = letterMemory.length - 1; i >= 0; i--) {
			if (letterMemory[i]==letter) {
				console.log('Esta letra já foi utilizada');
			} else if (letterMemory[i]!=letter) {}{
				letterSearch(letter);
			}
		}		
	}
}

function letterSearch(letter) {
	if(letter!= lastLetter){
		lastLetter = letter;
		letterMemory.push(letter);
		document.getElementById('boardLetter').innerText += ` ${letter.toUpperCase()} `;
		var letterSearch = letter;
		point = 0;
		for (var i = wordOneMemory.length - 1; i >= 0; i--) {
			if (wordOneMemory[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '')==letterSearch) {
				console.log(`letra: ${letterSearch} em ${wordOneC[i]}/${wordOneMemory[i]}`);
				setLetter(wordOneMemory[i],wordOneC[i],'black')
				point++;
			}
		}
		for (var i = wordTwoMemory.length - 1; i >= 0; i--) {			
			if (wordTwoMemory[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '')==letterSearch) {
				console.log(`letra: ${letterSearch} em ${wordTwoC[i]}/${wordTwoMemory[i]}`);
				setLetter(wordTwoMemory[i],wordTwoC[i],'black')
				point++;
			}
		}
		for (var i = wordThreeMemory.length - 1; i >= 0; i--) {
			if (wordThreeMemory[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '')==letterSearch) {
				console.log(`letra: ${letterSearch} em ${wordThreeC[i]}/${wordThreeMemory[i]}`);
				setLetter(wordThreeMemory[i],wordThreeC[i],'black')
				point++;
			}
		}
	}
}
// 
function showWordsAll() {
	setWordThree(document.getElementById('terceiraPalavra').value);
	setWordTwo(document.getElementById('segundaPalavra').value);
	setWordOne(document.getElementById('primeiraPalavra').value);
}

function clearBoard(lineClear) {
	if (lineClear == 1) {
		for (var i = wordOneC.length - 1; i >= 0; i--) {
		setLetter("+",wordOneC[i],'white');
		wordOneMemory = undefined;
		}
	}else if (lineClear == 2) {
		for (var i = wordTwoC.length - 1; i >= 0; i--) {
		setLetter("+",wordTwoC[i],'white');
		wordTwoMemory = undefined;
		}
	}else if (lineClear == 3) {
		for (var i = wordThreeC.length - 1; i >= 0; i--) {
		wordThreeMemory = undefined;
		setLetter("+",wordThreeC[i],'white');
		}
	}else if (lineClear == 0) {
		for (var i = wordOneC.length - 1; i >= 0; i--) {
		setLetter("+",wordOneC[i],'white');
		wordOneMemory = undefined;
		}
		for (var i = wordTwoC.length - 1; i >= 0; i--) {
		wordTwoMemory = undefined;
		setLetter("+",wordTwoC[i],'white');
		}
		for (var i = wordThreeC.length - 1; i >= 0; i--) {
		wordThreeMemory = undefined;
		setLetter("+",wordThreeC[i],'white');
		}
	}	
}

function showWords() {
	console.log("Deu Certo")
}

function setLetter(letter,character,colorFont) {
	document.getElementById(character).innerText = letter.toUpperCase();
	document.getElementById(character).style.color = colorFont;
	if (letter == "+") {
		document.getElementById(character).style.color = 'gray';
		document.getElementById(character).style.backgroundColor = 'gray';
	}else{
		document.getElementById(character).style.backgroundColor = 'white';
	}
}