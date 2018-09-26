
// Set a startpoint for a loop through an array index
var theAd = 0;
// the links to websites
var adURL = new Array("joescrabshack.com","starbucks.com","pepto-bismol.com");
// the images to be cycled
var adImages = new Array("img/banner1.gif", "img/banner2.gif", "img/banner3.gif");


function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

function newLocation() {
	document.location.href = "http://www." + adURL[theAd];
	// return false;
}

function rotate() {
	theAd++;
	if (theAd == adImages.length) {
		theAd = 0;
	}
	document.getElementById("adBanner").src = adImages[theAd];

	setTimeout(rotate, 3 * 1000);
}
