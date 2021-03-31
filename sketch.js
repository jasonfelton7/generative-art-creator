let x, y;
let speedX, speedY;
let redVal, greenVal, blueVal;
let alphaVal = 70;
let angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    //Randomize variables used to draw shapes
    x = random(0, width);
    y = random(0, height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
}

function draw() {

    // Map key inputs to various shape drawing functions
  if(keyIsPressed && key !== ' ') {
    if(keyCode % 5 === 0) {
      parametricLines();
    } 
    if (keyCode %  5 === 1) {
      bouncingEllipse(random(-100, 50));
    } 
    if (keyCode % 5 === 2) {
      flower();
    }
  }
}

// keyPressed() function ensures that the drawing functions don't repeat on single key presses

function keyPressed() {
    if (key !== ' ') {
      if (keyCode % 5 === 3) {
        roundedRect();
      }
      if (keyCode % 5 === 4) {
        star(random(30, 50), random(30, 50), random(4, 7));
      }
      // Save image on Return/Enter press
      if (keyCode === 13) {
        saveCanvas('canvas-' + frameCount, 'png');
      }
    } else {
        // Reset canvas on spacebar press
        clear();
        background(0);
    }
  }

  // keyReleased() function to randomize values again on key release
function keyReleased() {
    x = random(0, width);
    y = random(0, height);
    speedX = random(-3, 3);
    speedY = random(-3, 3);
  }
