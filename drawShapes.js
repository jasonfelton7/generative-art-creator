/*
Function drawing animated spiralling lines which trail each other across the canvas.
*/
function parametricLines() {
    push();
    // Map x and y positions to a color range
    redVal = map(y, 0, height, 0, 255);
    greenVal = map(x, 0, width, 0, 255);
    blueVal = 200;
  
    translate(x, y);
    let rotation = map(x, 0, height, 0, TWO_PI);
    rotate(rotation);
  
    stroke(redVal, greenVal, blueVal, alphaVal);
    line(-200, 0, 200, x);
  
    x = x + speedX;
    y = y + speedY;
  
    // Make sure that the lines don't go beyond the canvas width
    if (x > width || x < 0) {
      speedX = -speedX;
    }
    // Make sure that the lines don't go beyond the canvas height
    if (y > height || y < 0) {
      speedY = -speedY;
    }
    pop();
  }
  
  /*
  Function drawing a trailing ellipse which moves across the screen at varying sizes
  */
  function bouncingEllipse(size) {
    // Set the size of the ellipse based on the y value
    if (y > 0) {
      size = map(y, 0, height, 0, 100);
    } else {
      size = map(speedX, 0, height, 0, 100);
    }
    // Map x and y positions to a color range 
    redVal = map(y, 0, height, 0, 255);
    greenVal = map(x, 0, width, 0, 255);
    blueVal = map(x + y, 0, width + height, 0, 255);
  
    stroke(redVal, greenVal, blueVal, alphaVal);
    fill(redVal, 255, blueVal, alphaVal);
    x = x + speedX;
    y = y + speedY;
  
    // Make sure that the ellipse doesn't go beyond the canvas width in either direction
    if (x > width || x < 0) {
      speedX = -speedX;
    }
    // Make sure that the ellipse doesn't go beyond the canvas height in either direction
    if (y > height || y < 0) {
      speedY = -speedY;
    }
    ellipse(x, y, size, size);
  }
  
  /*
  Function drawing a rectangle with rounded corners and various sizes at random positions across the canvas.
  */
  function roundedRect() {
    push();
    rectMode(CENTER);
    // Randomize the shape position 
    let shapeX = random(width);
    let shapeY = random(height);
    // Randomize the shape size
    let size = random(100, 300);
    
    // Map red fill value to the shape's size
    redVal = map(size, 100, 300, 0, 255);
    noStroke();
    fill(120, redVal, 160, alphaVal * 0.5);
    rect(shapeX, shapeY, size * 0.1, size, size * 0.03, size * 0.03, size * 0.03, size * 0.03);
    pop();
  }
  
  /*
  Function which creates stars at random positions across the canvas. Each star has a randomized number of points and random size.
  */
  function star(radius1, radius2, npoints) {
    push();
    // Randomize star position
    let posX = random(width);
    let posY = random(height);
    
    // Displace by x and y position
    translate(posX, posY);
    
    //rotate the star based on frame count 
    rotate(frameCount / 200);
    noStroke();
    
    blueVal = map(posY, 0, height, 0, 255);
    fill(240, 0, blueVal, alphaVal / 2);
    
    let angle = TWO_PI / int(npoints);
    let halfAngle = angle / 2.0;
    
    // Begin drawing custom shape 
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = cos(a) * radius2;
      let sy = sin(a) * radius2;
      vertex(sx, sy);
      sx = cos(a + halfAngle) * radius1;
      sy = sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }
  
  /*
  Function which draws flower animation at random positions across the canvas.
  */
  function flower() {
    push();
    // Displace based on random x and y values
    translate(x, y);
    
    // Rotate by angle value at bottom of function
    rotate(radians(angle));
    
    // Randomize x and y postion
    let posX = random(25, 50);
    let posY = random(25, 50);
  
    // Set the red value based on the noise mapping 
    redVal = noise(frameCount * 0.01) * 50 + 150;
    greenVal = map(x + y, 0, width + height, 0, 255);
    
    noStroke();
    fill(redVal, greenVal, 100, alphaVal);
    ellipse(posX, posY, 20, 20);
    
    stroke(redVal, greenVal, 100, alphaVal * 1.5);
    line(0, 0, posX, posY);
  
    angle += 12;
    pop();
  }
