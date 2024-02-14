let _img;
let _w;
let _h;
// let filters = [THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, ERODE, DILATE, BLUR];
// let filters = ["ERODE"];
// let filterIdx = 0;
let _isPaused = false;

function preload() {
  _img = loadImage("assets/wartlord.png");
  _imgReset = loadImage("assets/wartlord.png");
}

function setup() {
  initDimensions();
  let cnv = createCanvas(_w, _h);
  // cnv.mousePressed(() => (_img = _imgReset)); // only works on first click!
  cnv.mousePressed(() => (_isPaused = !_isPaused)); 
  image(_img, 0, 0, _w, _h);
}

function draw() {
  if (_isPaused) return;
  // if (frameCount % 120 == 0) {
  //   console.log("reset");
  //   _img = _imgReset;
  // } else {
  _img.filter(DILATE);
  image(_img, 0, 0, _w, _h);
  // }
}

function initDimensions() {
  let margin = 0.9;
  let aspect = _img.height / _img.width;
  _w = min(windowWidth, windowHeight / aspect);
  _h = min(windowHeight, _w * aspect);
  _w *= 0.9;
  _h *= 0.9;
}

function windowResized() {
  initDimensions();
  resizeCanvas(_w, _h);
  image(_img, 0, 0, _w, _h);
}
