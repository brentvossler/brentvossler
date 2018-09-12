window.onload = initAll;

function initAll() {
	document.getElementById("quote1").onclick = bv_trumpQuotes;
	document.getElementById("quote2").onclick = bv_trumpQuotes;
	document.getElementById("quote3").onclick = bv_trumpQuotes;
}

function bv_trumpQuotes() {
	switch(this.id) {
		case "quote1":
			alert("'I will be phenomenal to the women. I mean, I want to help women.' -Face the Nation, 9/8/15");
			break;
		case "quote2":
			alert("'The U.S. cannot allow EBOLA-infected people back. People that go to far away places to help out are great - but must suffer the consequences!' - Twitter, 2/9/14");
			break;
		case "quote3":
			alert("'All of the women on The Apprentice flirted with me - consciously or unconsciously. That's to be expected.' -Trump: How To Get Rich, 2004");
			break;
		default:
	}
}


