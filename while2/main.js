function setup(){
	createCanvas(1000, 900);
}

function draw(){
	background(0, 0, 255);
	let Ypos = 20
	while(Ypos < height){
		fill(255, 0, 0);
		ellipse(width / 2, Ypos, 50, 50);
		Ypos += 80;
	}
}