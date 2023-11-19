class gretel{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(230,230,0);
  }
  
  dibujar(){
    push();
    fill(this.miColor);
    rect(this.posX, this.posY, 20,30);
    pop();
  }
}
