class hansel{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor= color(255);
    //this.vida = 3;
    //this.time = 0;
    //this.timeFinal = 500;
    //this.hanselMuerto = false;
  }
  
  dibujar(){
    push();
    rectMode(CENTER);
    //if((this.vida >= 0) && (this.time <= this.timeFinal)){
      //this.time += 1;
      fill(this.miColor);
      rect(this.posX, this.posY, 30, 50);
      //text("vidas actuales:",0,10); text(this.vida,90,10);
      //text("tiempo transcurrido:",0,20); text(this.time,110,20)
    //}
    pop()
  }
  
  moverDerecha(){
    this.posX += 10;
    if(this.posX >= 500){
      this.posX = 100;
    }
  }
  
  moverIzquierda(){
    this.posX -= 10;
    if(this.posX <= 100){
      this.posX = 500;
    }
  }
  
  teclaPresionada(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moverIzquierda();
    }else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    }
  }
  
  //herir(){
  //  this.vida -= 1;
  //}
  
  //hanselMuerto(){
  //  if(this.vida <= 0){
  //    return  true;
  //  }
  //}
  //hanselVivo(){
  //  if((this.vida > 0) && (this.time >= this.timeFinal)){
  //    return  true;
  //  }
  //}
  
  // actualizar(){
  //   if((candy.posY()+25) >= (this.posY()-25)){
  //     this.herir();
  //   }
  // }
}
