//TP#3 — Aventura Gráfica 
//Sampino Lucas
//com3
//tema: Crear una aventura gráfica al estilo de los viejos cuentos "Elije tu propia aventura"
//cuento: Hansel y Gretel de los Hermanos Grimm
//enlace al video explicativo: https://youtu.be/udNm1yh-uU8

//vaiables y constantes
int pag, final_malo, pag_image;
String[] textos;
String[] boton_sig;
String[] boton_fin;
PImage[] fondos;
PFont fuente;

//solo una vez 
void setup(){
  size(600,600);
  fuente = loadFont("Century-48.vlw");
  pag = 0;
  final_malo = 0;
  pag_image=0;
  fondos = new PImage[14];
  for(int i=0;i<14;i++){
    fondos[i] = loadImage("data/image_"+i+".jpg");
  }
  
  textos = new String[20];
  textos[0]="Hansel y Gretel";
  textos[1]="Hansel y Gretel vivian en una cabaña\n con su padre el leñador y su madrastra.";
  textos[2]="El leñador y esposa deciden abandonan a Hansel y Gretel\n en el bosque debido a la pobreza. Pero estos saben de su plan. ";
  textos[3]="Camino al bosque, los niños deben tomar una desición:";
  textos[4]="Los niños dejan un rastro de pan por el camino, pero  una ves solos,\n se dan cuenta de que las aves se comen las migas";
  textos[5]="Siguen caminando y encuentran una casa \n de dulces habitada por una bruja malvada.";
  textos[6]="La bruja captura a Hansel y Gretel. Encierra a Hansel.";
  textos[7]="La bruja enciende el horno y Gretel tiene dos opciones:";
  textos[8]="Gretel empuja a la bruja, agarra la las llaves, y libera a su hermano";
  textos[9]="Los hermanos escapan y buscan el camino de regreso a casa.";
  textos[10]="Se reencuentran con su padre, quien los buscaba desesperadamente.";
  textos[11]="Superan las dificultades y encuentran la felicidad en familia.";
  textos[12]="Aprenden la importancia de la astucia, el coraje\n y el amor en su increíble historia.";
    
  textos[13]="Creditos: \n Alumno: Sampino Lucas David \n Legajo: 93080/8 \n Cuento: Hansel y gretel \n Autor: Hermanos Grimm\n profesor: David Bedoian";
  
  textos[14]="Los niños se pierden y no consiguen regresar nunca.";
  textos[15]="La bruja no deja rastro de los niños.";
  
  boton_sig = new String[20];
  boton_sig[0]="siguiente";
  boton_sig[1]="siguiente";
  boton_sig[2]="siguiente";
  boton_sig[3]="Dejar un rastro \n de migas de pan";
  boton_sig[4]="siguiente";
  boton_sig[5]="siguiente";
  boton_sig[6]="siguiente";
  boton_sig[7]="Empujar a la\n bruja al horno";
  boton_sig[8]="siguiente";
  boton_sig[9]="siguiente";
  boton_sig[10]="siguiente";
  boton_sig[11]="siguiente";
  boton_sig[12]="creditos";
  
  boton_sig[13]="Reiniciar\n cuento";
  
  boton_sig[14]="creditos";
  boton_sig[15]="creditos";
  
  boton_fin = new String[4];
  boton_fin[1]="Buscar un camino\n de regreso solos";
  boton_fin[2] ="Eperar a que\n los rescate.";
}  
//repeticion

void draw(){
  background(255);
  textFont(fuente, 24);
  if(pag == 0){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 1){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  } else if(pag == 2){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 3){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
    boton_con_texto_2( 110, 530, 120, 50, boton_fin );
  }else if(pag == 4){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 5){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  } else if(pag == 6){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 7){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
    boton_con_texto_2( 110, 530, 120, 50, boton_fin );
  }else if(pag == 8){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 9){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 10){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 11){
    image(fondos[pag_image], 0, 0, width, height);
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 12){
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 13){
    boton_y_texto( 490, 530, 120, 50, textos, 300, 450, boton_sig );;
  } else if(pag == 14){
    image(fondos[pag_image], 0, 0, width, height);
    push();
    rectMode(CENTER);
    rect(300, 450, 550, 45);
    pop();
    botonfinal( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }else if(pag == 15){
    image(fondos[pag_image], 0, 0, width, height);
    push();
    rectMode(CENTER);
    rect(300, 450, 550, 45);
    pop();
    botonfinal( 490, 530, 120, 50, textos, 300, 450, boton_sig );
  }
  
 
}

//clickeando

void mouseClicked(){
  if ( colisionConBoton(490, 530, 120, 50) && pag<13 ) {
    pag++;
    pag_image++;
    background(255);
  } else if ( colisionConBoton(490, 530, 120, 50) && pag==13 ) {
    pag_image=0;
    pag=0;
    background(255);
  }
  if ( colisionConBoton(110, 530, 120, 50) && pag==3 ) {
    pag=14;
    pag_image=12;
    background(255);
  }else if ( colisionConBoton(490, 530, 120, 50) && pag==14 ) {
    pag=13;
    background(255);
  }
  if ( colisionConBoton(110, 530, 120, 50) && pag==7 ) {
    pag=15;
    pag_image=13;
    background(255);
  }else if ( colisionConBoton(490, 530, 120, 50) && pag==15) {
    pag=13;
    background(255);
  }
}
