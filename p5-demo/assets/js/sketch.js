// for red, green, and blue color values
// let r, g, b;


let angle = 0;

function setup() {
  createCanvas(3000, 3000);
  // Pick colors randomly
  // r = random(255);
  // g = random(255);
  // b = random(255);
}

// function draw() {
//   // Draw a circle
//   strokeWeight(2);
//   stroke(r, g, b);
//   fill(r, g, b, 127);
//   ellipse(360, 200, 200, 200);
// }

// // When the user clicks the mouse
// function mousePressed() {
//   // Check if mouse is inside the circle
//   let d = dist(mouseX, mouseY, 360, 200);
//   if (d < 100) {
//     // Pick new random color values
//     r = random(255);
//     g = random(255);
//     b = random(255);
//   }
// }


function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 20;
    let val = cos(radians(angle)) * 18.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(255, 196, 231);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);
  }
}