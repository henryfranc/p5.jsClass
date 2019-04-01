var xpos = 15;
var ypos = 15;
var diameter = 20;
var xspeed = 8;
var yspeed = 5;





function setup(){
	createCanvas(500, 500);
	
}

function draw(){
	background(0);

	fill(random(255), random(255), random(255));
	ellipse(xpos, ypos, diameter, diameter);

	
	if(xpos > 500 || xpos <= 0);
	xspeed *= -1;

}