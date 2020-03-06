// canvas access and context rendering
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ball = document.getElementById('ball');

//canvas attributes
var width = screen.width-20;
var height = 600;

canvas.width = width;
canvas.height = height;

//drawing shapes
context.fillStyle = 'teal';
context.fillRect(20,20,100,100);

//clear canvas
context.clearRect(0,0,width,height);

//paths
context.beginPath();
context.moveTo(50,50);
context.lineTo(100,50);
context.lineTo(100,100);
context.fill();
context.closePath();

context.clearRect(0,0,width,height);

//arcs
context.beginPath();
context.arc(width/2,height/2,100,Math.PI*2, false);
context.stroke();
context.closePath();

context.clearRect(0,0,width,height);

//animation
var a = 100;
var b = 100;
var size = 40;
var directionX = 10;
var directionY = 10;

function drawCircle() {

  context.drawImage(ball, a, b, size, size);

  a = a + directionX;
  b = b + directionY;

  if(a+size > width || a==0)
  {
    directionX = directionX * -1;
  }
  else if (b+size > height || (b<0)) {
    directionY = directionY * -1;
  }
}

function update() {

  context.clearRect(0,0,width,height);

  drawCircle();

  requestAnimationFrame(update);

}

update();
