// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

let stars = [];

let speed;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseY, 0, width, 0, 50);
  background(0);
  translate(mouseX, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
