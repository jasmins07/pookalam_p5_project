function setup() {
  createCanvas(700,700);
  background(250, 249, 181);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2,height/2);
  fill(255, 255, 233);
  circle(0,0,560);
  noStroke();
  stroke(255, 255, 255);
  strokeWeight(1);


  for(let i=0;i<12;i++){
    rotate(30);
    fill(255, 135, 7);
    ellipse(0,-200,100,90);
    fill(247, 255, 0);
    ellipse(0,-170,60,180);
    fill(8, 115, 74);
    ellipse(0,-150,50,180)
    
  }
  fill(255, 244, 225);
  circle(0,0,350);
  for(let i=0;i<16;i++){
    rotate(22.5);
    fill(255, 239, 0);
    ellipse(0,-125,90,150);
    fill(201, 76, 38);
    ellipse(0,-120,30,100);
  }
  fill(176, 4, 4);
  noStroke();
  circle(0,0,100);
  for(let i=0;i<8;i++){

    rotate(45);

    fill(255, 251, 251);
    ellipse(0,-60,50,10);
    
  }
  for(let i=0;i<12;i++){
    rotate(45);
    fill(255,255,255);
    circle(0,0,80);
    fill(242, 110, 4);
    ellipse(0,-50,110,20)
    fill(255, 250, 100);
    circle(0,0,50);
    fill(255, 243, 200);
    circle(0,0,30);
    
  }
  
}
