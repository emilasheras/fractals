console.log(`sketch init`);

var lenReduction, weightReduction;
var angle;
var angleSlider, hueSlider;
var startVal;
var fractalColor_CSS = getComputedStyle(
        document.querySelector(':root')
    ).getPropertyValue('--fractal-color');

function setup() {
    let canvas = createCanvas(800, 560);
    canvas.class('primarycnv'); // canvas class
    document.querySelector("#cnvContainer")?canvas.parent('cnvContainer'):null; // append canvas to a div that centers it

    colorMode(HSB, 255); // set color mode from RGB to Hue/Saturation/Brightness

    lenReduction = (2 / 3); // multiplicative factor by which the lenght of lines decreases
    weightReduction = .9; // stroke weight reduction factor
    
    angleSlider = createSlider(0, TWO_PI, PI / 4.5, 0.01);
    angle = angleSlider.value();

    startVal = int(random(0, 256));
    hueSlider = createSlider(0, 255, startVal, 1);
    
    //console.log(fractalColor_CSS);

};
function draw() {
    var len = 170;
    var weight = 9;
    var colorHUE = hueSlider.value();
    //console.log(colorHUE);

    background(40);
    angle = angleSlider.value();
    let s = stroke(colorHUE, 255, 255);
    //console.log(s);
    strokeWeight(weight);
    translate(width / 2, height);
    branch(len, weight);
}

function branch(len, weight) {
    strokeWeight(weight);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 3) {
        push();
        rotate(angle);
        branch((len * lenReduction), weight - weightReduction);
        pop();
        push();
        rotate(-angle);
        branch((len * lenReduction), weight - weightReduction);
        pop();
    }

}