function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background("blue");
  
  fill ("pink");
  stroke("yellow")
  
 //console.log(mouseIsPressed)
  
  if(mouseIsPressed){ 
  rect(mouseX,mouseY,30,20);

  
  }
}
