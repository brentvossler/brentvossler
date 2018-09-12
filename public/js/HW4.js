window.onload = diceRoll;

// function helloWorld() {
// 	for (var i=1; i<10; i++) {
// 		document.write("Brent is the #" + i + " programmer in the world. <br>");
// 	}
// }

function diceRoll() {
	do {
		var userPrompt = prompt("want to roll again? (y or n)", "");
		dice1 = Math.floor((Math.random() * 6) + 1);
		dice2 = Math.floor((Math.random() * 6) + 1);
		alert("You rolled a " + dice1 + " and " + dice2 + ".");
	}
	while (userPrompt == "y");	
}