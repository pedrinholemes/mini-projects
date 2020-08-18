function setWordOne(wordOne) {
	if(wordOne.length <= 11&& wordOne.length > 3&& wordOne != " "){
		const sWordOne = wordOne.split("");
		clearBoard(1);
		wordOneMemory = sWordOne.slice();
		 wordLineOne(sWordOne);
	} else if (wordOne.length > 11) {
		alert(`1 - ${longWord} = ${wordOne}`);
	} else if (wordOne.length<=3) {
		alert(`1 - ${sortWord} = ${wordOne}`);
	}
}
function setWordTwo(wordTwo) {
	if(wordTwo.length <= 11&& wordTwo.length > 3&& wordTwo != " "){
		const sWordTwo = wordTwo.split("");
		clearBoard(2);
		wordTwoMemory = sWordTwo.slice();
		wordLineTwo(sWordTwo);
	} else if (wordTwo.length > 11) {
		alert(`2 - ${longWord} = ${wordTwo}`);
	} else if (wordTwo.length<=3) {
		alert(`2 - ${sortWord} = ${wordTwo}`);
	}
}
function setWordThree(wordThree) {
	if(wordThree.length <= 11&& wordThree.length > 3&& wordThree != " "){
		const sWordThree = wordThree.split("");
		clearBoard(3);
		wordThreeMemory = sWordThree.slice();
		wordLineThree(sWordThree);
	} else if (wordThree.length > 11) {
		alert(`3 - ${longWord} = ${wordThree}`);
	} else if (wordThree.length<=3) {
		alert(`3 - ${sortWord} = ${wordThree}`);
	}
}