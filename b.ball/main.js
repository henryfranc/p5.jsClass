	var xpos=100;
	var ypos=100;
	var xspeed=8;
	var yspeed=10;
	var diameter=40;


function setup() {
	createCanvas(1000,900);
	
}
	
function draw() {
    background(0);

	//nostroke();
	fill(random(255), random(255), random(255));
	ellipse(xpos, ypos, diameter, diameter);

	xpos += xspeed;

	if(xpos >=width || xpos <=0) {
		xspeed *= -1;

	}

	ypos += yspeed;

	if(ypos >=height || ypos <=0){
		yspeed *= -1;
	}

	if(xpos < width /3){
		background(4, 140, 60);
	}
	else if(xpos > width / 3 && xpos < width * 2/3){
		background(255);
	}
	else{
		background(255, 0, 0);
	}
}