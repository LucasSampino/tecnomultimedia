//TP#2 — Funciones y Ciclos FOR 
//Sampino Lucas
//com3
//Enlace al video explicativo: https://youtu.be/kojqc4rmM8I

PImage imagen;
float giro=0;
String rotacion="estado"; 

void setup(){
  size(800,400);
  imagen = loadImage("data/optico.jpg");
}

void draw(){
  background(255);
  image(imagen, 0, 0, 400, 400);
  
  rectangulos(); 
  
  push();
  
  translate(600,200);
  
  rotate(rotacion());
  
  for(int I=0; I<12; I++){
    float trian=16.66;
    noStroke();
    triangle(-200, 0, 0-(I*trian), 200-(I*trian), 0-(I*trian), -200+(I*trian));
    triangle(200, 0, 0+(I*trian), 200-(I*trian), 0+(I*trian), -200+(I*trian));
    if((I)%2==0){
    fill(0);
    }else{
      fill(255);
    }
  }
  pop();
  
}


void mousePressed(){
  if(rotacion.equals("estado")){
    if(dist(mouseX, mouseY, 600, 200) <150){
      giro=0;
    }
  }  
}
