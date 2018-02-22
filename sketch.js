//import html2canvas from 'html2canvas';

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(255);

  ellipse(100, 100, 100, 100);

}


function mouseClicked() {

  print("miau");

}

function keyPressed() {

  html2canvas(document.body).then(function(canvas) {
   // document.body.appendChild(canvas);
    var base64image = canvas.toDataURL("image/png");

    // Open the image in a new window
    window.open(base64image, "_blank");


  });

}