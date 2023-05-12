//TP#1 — Variables y Condicionales 
//Sampino Lucas
//com3
//tema Obra de arte electrónico

int timer;
int pantalla;
int tamaño;
float text3y, despY;
String estado; 
PFont miFuente;
PImage imagen0, imagen1, imagen2, imagen3, imagen4;


void setup(){
  size(640, 480);
  miFuente=loadFont("MS-Mincho-48.vlw");
  pantalla=0;
  tamaño=0;
  text3y = 0;
  despY = 2;
  estado="inicio";
  imagen1 = loadImage("data/image1.jpg");
  imagen2 = loadImage("data/image2.jpg");
  imagen3 = loadImage("data/image3.jpg");
  imagen4 = loadImage("data/image4.jpg");
  imagen0 = loadImage("data/image0.jpg");
}

void draw(){
  background(255);
  textFont(miFuente, 24);
  if(pantalla == 0){//pantalla
    push();
    image(imagen0, 0, 0, 640, 480);
    textAlign(CENTER);
    fill(255);
    textSize(40);
    text("Si desea iniciar", width/2, height/2-40);
    text("haga click aquí", width/2, height/2);
    fill(0, 22, 162);
    ellipse(320, 300, 100, 100);
    pop();
  } else if(pantalla == 1){ //pantalla 1----------------------------------------------------------------------------------------
    fill(255);
    textSize(30);
    image(imagen1, 0, 0, 640, 480);
    text("A mediado de año, París inauguraba su primer centro de arte digital:", (-timer+350)*640/250, 160);
    text("LAtelier des Lumières. Este se encuentra localizado en una antigua", (-timer+350)*640/250, 200);
    text("fundición de 1835 da vida a las pinturas de artistas de renombre gracias", (-timer+350)*640/250, 240);
    text("a un impresionante sonido envolvente y un espectáculo visual.", (-timer+350)*640/250, 280);
    timer++;
    if(timer==600){
      timer=0;
      pantalla=2;
    }
  } else if(pantalla==2){ //pantalla 2-------------------------------------------------------------------------------------------
      push();
      image(imagen2, 0, 0, 640, 480);
      fill(255);
      textAlign(CENTER);
      textSize(tamaño);
      if(tamaño<30){
        tamaño++;
      }
      text("Para la inauguración del centro se", width/2, height/2-80);
      text("¿presentó una exposición que ofrece?", width/2, height/2-40);
      text("una experiencia digital inmersiva en", width/2, height/2);
      text("torno al trabajo de Gustav Klimt", width/2, height/2+40);
      timer++;
        if(timer==600){
          timer=0;
          pantalla=3;
        }
      pop();
  } else if(pantalla==3){ //pantalla 3-------------------------------------------------------------------------------------------
      push();
      textAlign(CENTER);
      image(imagen3, 0, 0, 640, 480);
      fill(255);
      textSize(30);
      timer++;
      text("La exposición inmersiva está compuesta", width/2, text3y+40);
      text("por miles de imágenes de obras de arte", width/2, text3y+80);
      text("digitalizadas, proyectadas en el piso,", width/2, text3y+120);
      text("en las paredes así como en el techo", width/2, text3y+160);
      text("y otros elementos típicos del lugar.", width/2, text3y+200);
      text3y+=despY;
  if ( text3y>480-200 ) {
    despY = -2;
  }
  if ( text3y<0 ) {
    despY = 2;
  }
        if(timer==600){
          timer=0;
          pantalla=4;
        } 
   pop();
  } else if(pantalla==4){ //pantalla final-------------------------------------------------------------------------------------------
    estado="reinicio";
    fill(0);    
    push();
    image(imagen4, 0, 0, 640, 480);
    textAlign(CENTER);
    textSize(40);
    text("Si desea reiniciar", width/2, height/2-40);
    text("haga click aquí", width/2, height/2);
    fill(162, 10, 0);
    ellipse(320, 300, 100, 100);
    pop();
  }
}

void mousePressed(){
  if(pantalla==0){
    if(estado.equals("inicio")){
      if(dist(mouseX, mouseY, 320, 300) <50) {
        pantalla=1;
        timer=0;
      }
    }
  } else if(pantalla==4){
    if(estado.equals("reinicio")){
      if(dist(mouseX, mouseY, 320, 300) <50) {
        pantalla=1;
        timer=0;
      }
    }
  }
}
