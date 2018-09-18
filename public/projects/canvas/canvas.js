var canvas = document.querySelector('canvas');
console.log("canvas");
canvas.width = window.innerWidth;
console.log("canvas");
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)
	c.fillStyle = "red";
	c.fillRect(100, 100, 100, 100);
	c.fillStyle = "orange";
	c.fillRect(300, 400, 100, 100);

// lines
	c.beginPath();
	// c.moveTo(x, y)
	c.moveTo(50, 300);
	c.lineTo(300, 100);
	c.lineTo(400, 300);
	// colors
	c.strokeStyle = "red";
	// the line
	c.stroke();

// arcs & circles
	c.beginPath();
	c.arc(200, 200, 30, Math.PI * 2, false);
	c.stroke();

// drawing many 
	for (var i = 0; i < 10; i++) {
		x = Math.random() * window.innerWidth;
		y = Math.random() * window.innerHeight;
		c.beginPath();
		c.arc(x, y, 30, 0, Math.PI * 2, false);
		c.strokeStyle = "green";
		c.stroke()
	}
