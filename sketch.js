//import html2canvas from 'html2canvas';

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(100,100,100);

  ellipse(100, 100, 100, 100);

}


function mouseClicked() {

  print("miau");
  shareImage();

}

function keyPressed() {

  shareImage();

}


function shareImage() {

  html2canvas(document.body).then(function(canvas) {
    //document.body.appendChild(canvas);
    var base64image = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = "image.png";
    link.href = base64image.replace("image/png", "image/octet-stream");
    link.click();

    // Open the image in a new window
    //window.open(base64image, "_blank");


  });
}