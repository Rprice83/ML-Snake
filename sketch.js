var scl = 20;
var food;

function setup() {
  createCanvas(360,360);
  snake = new Snake();
  frameRate(8);
  pickLocation();
}

function draw() {
  background(51);
  
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();
  
  fill(255, 0, 100)
  rect(food.x, food.y, scl/2, scl/2);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.xspeed = 0;
    snake.yspeed = -1;
  }
  if (keyCode === RIGHT_ARROW) {
    snake.xspeed = 1;
    snake.yspeed = 0;
  }
  if (keyCode === DOWN_ARROW) {
    snake.xspeed = 0;
    snake.yspeed = 1;
  }
  if (keyCode === LEFT_ARROW) {
    snake.xspeed = -1;
    snake.yspeed = 0;
  }
}
