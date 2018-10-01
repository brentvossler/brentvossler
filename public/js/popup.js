// function to be executed on loading
window.onload = bv_newWinLinks;

// gathers all of the links on the page and makes them accessible by the loop so that if they are clicked on, the 2nd function will execute
function bv_newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "bv_newWin") {
			document.links[i].onclick = bv_newWindow;
		}
	}
}

// Whenever there is a link clicked, this function will execute. 
function bv_newWindow() {
	// as assigned, I also changed position of the popup by adding "left=300, top=300"
	var bv_carWindow = window.open(this.href,"bv_carWin","width=350,height=260, left=300, top=300");
	// This makes the new window the active window
	bv_carWindow.focus();
	return false;
}
