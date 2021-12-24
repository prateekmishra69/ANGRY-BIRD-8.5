class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
   //initially the pig bill be fully visible
    this.visiblity = 255;
  }
display(){
  console.log(this.body.speed)
  //if the speed of the pig will less than 3 then it will appear 
  if(this.body.speed <3){
    super.display();
  }
  else{
    //make pig dissapear
  World.remove(world,this.body);
  push();
  this.visiblity = this.visiblity-5;
  tint(255,this.visiblity);
  image(this.image, this.body.position.x,this.body.position.y,50,50);
 pop(); }
}
};

