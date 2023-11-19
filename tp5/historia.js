class historia{
  constructor(){
    this.historia = "estado";
    this.juego = new juego();
  }
  
  dibujar(){
    if(this.historia == "estado"){
      this.inicio();
    } else if(this.historia == 1){
      this.historia1();
    }else if(this.historia == 2){
      this.historia2();
    }else if(this.historia == 3){
      this.historia3();
    }else if(this.historia == 4){
      this.historia4();
    }else if(this.historia == 5){
      this.historia5();
    }else if(this.historia == 6){
      this.historia6();
    }else if(this.historia == 7){
      this.juego.dibujar();
    }
    
    else if(this.historia == 8){
      this.historia8();
    }
    
    else if(this.historia == 9){
      this.historia9();
    }else if(this.historia == 10){
      this.historia10();
    }else if(this.historia == 11){
      this.historia11();
    }else if(this.historia == 12){
      this.historia12();
    }else if(this.historia == 13){
      this.historia13();
    }
  }
  
  inicio(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Hansel y Gretel", width/2,height/2);
    text("Presione ENTER para comenzar", width/2,height/2+20);
    pop();
  }
  historia1(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Hansel y Gretel vivian en una cabaña\n con su padre el leñador y su madrastra.", width/2,height/2);
    pop();
  }
  historia2(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("El leñador y esposa deciden abandonan a Hansel y Gretel\n en el bosque debido a la pobreza. Pero estos saben de su plan.", width/2,height/2);
    pop();
  }
  historia3(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Los niños dejan un rastro de pan por el camino, pero  una ves solos,\n se dan cuenta de que las aves se comen las migas", width/2,height/2);
    pop();
  }
  historia4(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Siguen caminando y encuentran una casa \n de dulces habitada por una bruja malvada.", width/2,height/2);
    pop();
  }
  historia5(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("La bruja captura a Hansel y Gretel. Encierra a Hansel.", width/2,height/2);
    pop();
  }
  historia6(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("La bruja enciende el horno \n y comienza el juego:", width/2,height/2);
    pop();
  }
  historia8(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Gretel empuja a la bruja, agarra la las llaves, y libera a su hermano", width/2,height/2);
    pop();
  }
  historia9(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Los hermanos escapan y buscan el camino de regreso a casa.", width/2,height/2);
    pop();
  }
  historia10(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Se reencuentran con su padre, quien los buscaba desesperadamente.", width/2,height/2);
    pop();
  }
  historia11(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Superan las dificultades y encuentran la felicidad en familia.", width/2,height/2);
    pop();
  }
  historia12(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Aprenden la importancia de la astucia, el coraje\n y el amor en su increíble historia.", width/2,height/2);
    pop();
  }
  historia13(){
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Creditos: \n Alumno: Sampino Lucas David \n Legajo: 93080/8 \n Cuento: Hansel y gretel \n Autor: Hermanos Grimm\n profesor: David Bedoian", width/2,height/2);
    pop();
  }
  
  teclaPresionada(keyCode){
    this.juego.teclaPresionada(keyCode);
    
    if((keyCode == ENTER) && (this.historia == "estado")){
      this.historia = 1;
    }else if((keyCode == ENTER) && (this.historia == 1)){
      this.historia = 2;
    }else if((keyCode == ENTER) && (this.historia == 2)){
      this.historia = 3;
    }else if((keyCode == ENTER) && (this.historia == 3)){
      this.historia = 4;
    }else if((keyCode == ENTER) && (this.historia == 4)){
      this.historia = 5;
    }else if((keyCode == ENTER) && (this.historia == 5)){
      this.historia = 6;
    }else if((keyCode == ENTER) && (this.historia == 6)){
      this.historia = 7;
    }else if((keyCode == ENTER) && (this.historia == 8)){
      this.historia = 9;
    }else if((keyCode == ENTER) && (this.historia == 9)){
      this.historia = 10;
    }else if((keyCode == ENTER) && (this.historia == 10)){
      this.historia = 11;
    }else if((keyCode == ENTER) && (this.historia == 11)){
      this.historia = 12;
    }else if((keyCode == ENTER) && (this.historia == 12)){
      this.historia = 13;
    }else if((keyCode == ENTER) && (this.historia == 13)){
      this.historia = "estado";
    }
  }
}
