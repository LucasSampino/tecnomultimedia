void boton_y_texto(float x, float y, float ancho, float alto, String[] textos, float x1, float y1, String[] boton_sig) {
  push();
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  if(pag != 13){
  rect(x1, y1, 550, 45);
  }
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(16); 
  text(textos[pag], x1, y1 );
  text(boton_sig[pag], x, y );
  pop();
    
}

boolean colisionConBoton(float x, float y, float ancho, float alto ) {
  return ( mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2 );
}


void boton_con_texto_2(float x, float y, float ancho, float alto, String[] boton_fin) {
  push();
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(16); 
  if(pag == 3){
    text(boton_fin[1],110, 530);
  } else if(pag == 7){
    text(boton_fin[2],110, 530);
  }
  pop();
    
}

void botonfinal(float x, float y, float ancho, float alto, String[] textos, float x1, float y1, String[] boton_sig) {
  push();
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(16); 
  text(textos[pag], x1, y1 );
  text(boton_sig[pag], x, y );
  pop();
    
}
