// canvas access and context rendering
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ball = document.getElementById('ball');

//canvas attributes
var width = 300;
var height = 300;

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

//animation
var a = 100;
var b = 100;
var direction = 2;

function drawCircle() {

  if(a+40 == width || a==0)
  {
    direction = direction * -1;
  }

  a = a + direction;
  //b = b + direction;
  context.drawImage(ball, a, b, 40, 40);
}


function update() {

  context.clearRect(0,0,300,300);

  drawCircle();

  requestAnimationFrame(update);

}

update();
