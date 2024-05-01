var input;
var img;
var button;

function setup() {
  img = loadImage('arctic.png');
  
  createCanvas(500, 500);
  
  input = createFileInput(handleImage);
  
  button = createButton('Glitch')
  button.mousePressed(glitch)
  
  save_button = createButton('Save Image')
  save_button.mousePressed(save);
  
  r_slider = createSlider(-20, 20, 0);
  g_slider = createSlider(-20, 20, 0);
  b_slider = createSlider(-20, 20, 0);
  
  
}

function draw() {
  clear()
  if(img){
    image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN)
  }
}

// Create an image if the file is an image.
function handleImage(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, '');
  } else {
    img = null;
  }
}

function glitch(){
  //const { r_offset = 0, g_offset = 0, b_offset = 0} = options;
  let r_offset = r_slider.value()
  let g_offset = g_slider.value()
  let b_offset = b_slider.value()
  
  
  img.loadPixels()
  var new_pixels = img.pixels.slice()
  
  for(let i = 0; i < img.pixels.length; i+=4){
    new_pixels[i + r_offset * 4] = img.pixels[i]
    new_pixels[i + 1 + g_offset * 4] = img.pixels[i + 1];
    new_pixels[i + 2 + b_offset * 4] = img.pixels[i + 2];
  }
  
  for(let i = 0; i < new_pixels.length; i++){
    img.pixels[i] = new_pixels[i]
  }
  
  img.updatePixels()
}

function save(){
  saveCanvas('glitch.png')
}
