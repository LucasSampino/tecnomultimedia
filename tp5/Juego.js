class juego{
  constructor(){
    this.hansel = new hansel(width/2,height-50);
    this.bruja = new bruja(width/2,15);
    this.gretel = new gretel(30,500);
    
    this.candy = [];
    for(let i=0; i<10; i++){
      this.candy[i] = new candy(150+i*30,50);
    }
    
    this.vidas = 3;
    this.time = 0;
    this.timeFinal = 500;
    //this.historia = new historia();
   
  }
  
  //actualizar(){
  //  this.hansel.actualizar();
  //  this.candy.actualizar();
  //  if(this.candy[i].posY+25 >= this.hansel.posY-25){
  //    this.candy[i].posY = 10;
  //  }
  //}
  
  dibujar(){
    line(100,height,100,0);
    line(500,height,500,0);
    rect(0,0,100,height);
    rect(500,0,100,height);
    if((this.vidas > 0) && (this.time <= this.timeFinal)){
      this.hansel.dibujar();
      this.bruja.dibujar();
      this.gretel.dibujar();
      for(let i=0; i<10;i++){
        this.candy[i].dibujar();
      }
      this.timer();
      this.loComio();
      text("vidas actuales:",0,10); text(this.vidas,90,10);
      text("tiempo transcurrido:",0,20); text(this.time,110,20)
      this.hanselGano();
    }
  }
  
  timer(){
    this.time += 1;
  }
  
  teclaPresionada(keyCode){
    this.hansel.teclaPresionada(keyCode);
  }
  
  hanselGano(){
    if(this.vidas > 0 && this.time >= this.timeFinal){
      this.historia.historia = 8;
    }
  }
  hanselPerdio(){
    if(this.hansel.hanselMuerto()){
      return true;
    }
  }
  
  
  colicion(cx, cy, candyAlto, hx, hy, hancho, halto) {
    return cx + candyAlto > hx && cx < hx+hancho && cy+candyAlto/2>hy && cy<hy+halto;
  }
  
  loComio(){
    for (let i=0; i<10; i++) {
      if (this.colicion(this.candy[i].posX, this.candy[i].posY, 50, this.hansel.posX, this.hansel.posY, 30, 50) && this.candy[i].comido) {
        this.candy[i].comido = false;
        this.candy[i].posY = 10;
        this.vidas -= 1;
      }
    }
  }
}
