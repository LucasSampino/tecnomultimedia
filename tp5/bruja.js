class bruja{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor= color(0,255,0); 
  }
  dibujar(){ 
    push();
    rectMode(CENTER);
    fill(this.miColor);
    rect(this.posX, this.posY, 20, 40);
    pop();
  }

}
