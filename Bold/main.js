function setup() {
	createCanvas(1000, 900);

}

function draw() {
	background(140);

	var xpos = 30;
	var ypos = 30;
	var diameter = 35;

	//nostroke();
	fill(random(200), random(200), random(200));
	ellipse(xpos, ypos, diameter, diameter);

	for(xpos = 30; xpos < width; xpos += 40) {
		for(ypos = 30; ypos < height; ypos += 40) {
			ellipse(xpos, ypos, diameter, diameter);
		}
	}
	
}