function wordLineOne(sWordOne){
	for (var i = sWordOne.length - 1; i >= 0; i--) {
		setLetter(sWordOne[i],wordOneC[i],'white')
	}
}
function wordLineTwo(sWordTwo){
	for (var i = sWordTwo.length - 1; i >= 0; i--) {
		setLetter(sWordTwo[i],wordTwoC[i],'white')
	}
}
function wordLineThree(sWordThree){
	for (var i = sWordThree.length - 1; i >= 0; i--) {
		setLetter(sWordThree[i],wordThreeC[i],'white')
	}
}