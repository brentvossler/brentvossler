// ensure the users' browser is capable of running the script by calling a function and loading the game or returning an alert.
window.onload = _bv_initAll;
var _bv_usedNums = new Array(76);


function _bv_initAll() {
	if (document.getElementById) {
		document.getElementById("_bv_reload").onclick = _bv_anotherCard;
		_bv_newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

// this function runs another function 24 times. personally, i would rewrite this...
function _bv_newCard() {
	for (var i=0; i<24; i++) {
		_bv_setSquare(i);
	}
}
// Another function that should be rewritten for clarity...
// brings in a number from the above function to be handled
function _bv_setSquare(_bv_thisSquare) {
	// assigns a variable to be the html ID plus the appends the number from the loop to match the bingo board ID.
	var _bv_currSquare = "_bv_square" + _bv_thisSquare;
	// assigns a variable to an array mapped to rows on the bingo square.
	var _bv_colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	// assigns another variable to hold the value of an array index *
	var _bv_colBasis = _bv_colPlace[_bv_thisSquare] * 15;
	// sets a variable to do somethin in the next block of code
	var _bv_newNum;

	do {
		// brings in the random number generated below to replace the number in the above array.
		// +1 is added to ensure we do not get a 0 on the bingo board
		_bv_newNum = _bv_colBasis + _bv_getNewNum() + 1;
	}
	while (_bv_usedNums[_bv_newNum]);
	// checks to see that the same number is not placed on the board twice. works with the function below "_bv_anotherCard()"
	_bv_usedNums[_bv_newNum] = true;
	document.getElementById(_bv_currSquare).innerHTML = _bv_newNum;
	document.getElementById(_bv_currSquare).className = "";
	document.getElementById(_bv_currSquare).onmousedown = _bv_toggleColor;
}
// picks a random new number up to 15
function _bv_getNewNum() {
	return Math.floor(Math.random() * 15);
}

// if a number is placed on the baord twice, this function will be called to generate a new bingo board.
function _bv_anotherCard() {
	for (var i=1; i<_bv_usedNums.length; i++) {
		_bv_usedNums[i] = false;
	}

	_bv_newCard();
	return false;
}

// this function is fired when a square is clicked and toggles the ".pickedBG css" class for that clicked target
function _bv_toggleColor(_bv_evt) {
	if (_bv_evt) {
		var _bv_thisSquare = _bv_evt.target;
	}
	else {
		var _bv_thisSquare = window.event.srcElement;
	}
	if (_bv_thisSquare.className == "") {
		_bv_thisSquare.className = "pickedBG";
	}
	else {
		_bv_thisSquare.className = "";
	}
	_bv_checkWin();
}


function _bv_checkWin() {
	var _bv_winningOption = -1;
	var _bv_setSquares = 0;
	var _bv_winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var _bv_currSquare = "_bv_square" + i;
		if (document.getElementById(_bv_currSquare).className != "") {
			document.getElementById(_bv_currSquare).className = "pickedBG";
			_bv_setSquares = _bv_setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<_bv_winners.length; i++) {
		if ((_bv_winners[i] & _bv_setSquares) == _bv_winners[i]) {
			_bv_winningOption = i;
		}
	}
	
	if (_bv_winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (_bv_winners[_bv_winningOption] & Math.pow(2,i)) {
				_bv_currSquare = "_bv_square" + i;
				document.getElementById(_bv_currSquare).className = "winningBG";
			}
		}
	}
}