class candy{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor= color(0,255,255);
    this.vel = random(0.5,1.6);
    this.comido = true;
  }
  dibujar(){
    push();
    rectMode(CENTER);
    fill(this.miColor);
    rect(this.posX, this.posY, 20, 50);
    this.mover();
    pop();
  }

  mover(){
    this.posY += this.vel;
    if(this.posY >= 600){
      this.posY = 10;  
    }
  }
  
  //actualizar(){
  //  if((this.posY()+25) >= (hansel.posY()-25)){
  //    this.posY = 10;
  //  }
  //}
  
}
