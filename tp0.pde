PImage imagen;
  
void setup(){
  size(800, 400);
  imagen = loadImage("data/retrato.jpg");  
  
}

void draw(){
  background(255, 255, 255);
  image(imagen, 400, 0, 400, 400);
  //pelo-----------------------------------------
  fill(73, 73, 73);
  stroke(73, 73, 73);
  ellipse(200, 116, 160, 130);
  //cara------------------------------------------
  fill(255, 203, 191);
  strokeWeight(2);
  stroke(0, 0, 0);
  ellipse(200, 200, 200, 275);//cara
  //pelo, parte 2---------------------------------
  stroke(73, 73, 73);
  fill(73, 73, 73);
  arc(200, 96, 125, 68, 3.14159, 6.28319);
  //nariz-----------------------------------------
  stroke(0, 0, 0);
  strokeWeight(6);
  line(200, 165, 175, 222);//nariz1
  line(175, 222, 210, 222);//nariz2
  //cejas-----------------------------------------
  strokeWeight(2);
  line(140, 107, 165, 107);
  line(205, 107, 230, 107);
  //anteojos--------------------------------------
  strokeWeight(1);
  line(140, 107, 195, 107);//anteojos, linea 1
  line(140, 146, 195, 146);//anteojos, linea 2
  line(140, 107, 140, 146);//anteojos, linea 3
  line(195, 107, 195, 146);//anteojos, linea 4 
  //anteojos2-------------------------------------
  line(205, 107, 260, 107);//anteojos2, linea 1
  line(205, 146, 260, 146);//anteojos2, linea 2
  line(205, 107, 205, 146);//anteojos2, linea 3
  line(260, 107, 260, 146);//anteojos2, linea 4
  //anteojos3--------------------------------------
  line(120, 115, 140, 115);
  line(195, 115, 205, 115);
  line(260, 115, 278, 115);
  //pelo3
  strokeWeight(8);
  stroke(73, 73, 73);
  line(120, 116, 149, 84);
  line(251, 84, 280, 116);
  strokeWeight(3);
  line(155, 90, 145, 102);
  line(165, 90, 155, 102);
  line(175, 90, 165, 102);
  line(185, 90, 175, 102);
  line(195, 90, 185, 102);
  line(200, 90, 195, 102);
  line(200, 90, 205, 102);
  line(205, 90, 215, 102);
  line(215, 90, 225, 102);
  line(225, 90, 235, 102);
  line(235, 90, 245, 102);
  line(245, 90, 255, 102);
  //ojos-------------------------------------------
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  ellipse(155, 125, 15, 15);
  ellipse(220, 125, 15, 15);
  strokeWeight(2);
  point(153, 125);
  point(218, 125);
  //barbilla----------------------------------------
  fill(228, 197, 189);
  stroke(228, 197, 189);
  arc(200, 235, 190, 205, 0, 3.14159);
  //boca--------------------------------------------
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(2);
  line(160, 275, 200, 275);
  
}
