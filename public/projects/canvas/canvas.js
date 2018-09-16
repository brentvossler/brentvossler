var canvas = document.querySelector('canvas');
console.log("canvas");
canvas.width = window.innerWidth;
console.log("canvas");
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)
c.fillRect(100, 100, 100, 100);

console.log('canvas');