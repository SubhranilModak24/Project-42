var iss, spacecraft;
var bg, issimg, space , space1 , space2 , space3;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  space = loadImage("spacecraft1.png");
  space1 = loadImage("spacecraft2.png");
  space2= loadImage("spacecraft3.png");
  space3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(space);
  spacecraft.scale = 0.17;
  
  iss = createSprite(332,132);
  iss.addImage(issimg);
  iss.scale = 0.28;
}
function draw() {
  background(bg);
  
  spacecraft.addImage(space);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(space3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(space2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(space1);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}