var pic;
var img;

function setup() {
	createCanvas(1000, 1000); 
	pic =loadImage('2_16397_e.jpg');
	img =loadImage('DSLR-Camera-Lens-Reviews.jpg');


}

function draw() {
	background(0);
	image(pic, 20, 30, 600, 400);
	image(img, 300, 500, 600, 500);
}