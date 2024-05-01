var img;
var imgFileName = "arctic";
var fileType = "png";

function setup() {
  //Image file parsing code taken from https://github.com/kimasendorf/ASDFPixelSort/blob/master/ASDFPixelSort.pde
  img = loadImage(imgFileName + "." + fileType);
  
  createCanvas(500, 500)
  image(img, 0, 0);
  
  
  
  document.getElementById("submit").onclick = function() {
   console.log("button was clicked");
  };
}

function draw() {
  rect(100,100)
}
