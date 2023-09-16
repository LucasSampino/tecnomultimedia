//TP#4 — Introducción a p5.js
//Alumno: Sampino Lucas David
//Legajo: 93080/8
//Juego elejido: Space invaders
//Link del video: https://youtu.be/k_sEXl3LW1k


let cx, cy, can, calt;               // variables del cañón
let bx, by, btam;                    // variables de la bala
let nx, ny, nan, nalto;              // variables de la nave individual
let disp;                            // disparo
let estado = "inicio";               // pantallas

let foto = [];                       //variable imagen
let velI =0.1;

let nvsx = [];
let nvsy = [];
let velnx = [];
let cant = 5;
let eliminadas = 0;
let pasaron = 0;
let cargas = 0;
let cargasT= true;

function setup() {
  createCanvas(600, 500);
  can = 40;
  calt = 80;
  cx = width/2;
  cy=420;
  bx = cx;
  by = cy;
  btam = can;
  disp = false;
  nx = 0;
  ny = 50;
  nan = 100;
  nalto = 40;
  
  foto[0] = loadImage("data/image_0.PNG");
  foto[1] = loadImage("data/image_1.PNG");
  foto[2] = loadImage("data/image_2.PNG");
  foto[3] = loadImage("data/image_3.PNG");
  foto[4] = loadImage("data/image_4.PNG");
  
  for (let i=0; i<cant; i++) {
    nvsx[i] = random(-300, -100);
    nvsy[i] = i*nalto;
    velnx[i] = random(1, 3);
  }
}

function draw() {
  background(0);
  image(foto[0],0,0);

  if(estado == "inicio"){                      //pantalla de inicio
     push();
     fill(0,0,255);
     rect(100,300,120,60);
     rect(400,300,120,60);
     pop();
     push();
     fill(255);
     push();
     textSize(50);
     textAlign(CENTER);
     //text("Space Invaders",width/2,100);
     imageMode(CENTER);
     if(velI <= 200){
       velI += 0.2;
     }
     image(foto[3], width/2,150,velI+100,velI);
     pop();
     text("play", 145,330);            
     text("créditos e\ninstrucciones", 435,330);
     pop();
  } else if(estado == "perder"){                    //pantalla de perdiste
     velI =0.1;
     push();
     fill(255);
     textSize(30);
     textAlign(CENTER);
     text("Naaa amigo, cómo perdés así\n\n\nQueres reiniciar?",width/2,100);
     for(let r=0; r<cant; r++){
       nvsx[r] = random(-300, -100);
     }
     eliminadas = 0;
     pasaron = 0;
     cargas = 0;
     pop();
  } else if(estado == "ganaste"){                   //pantalla de ganaste
     velI =0.1;
      for(let r=0; r<cant; r++){
       nvsx[r] = random(-300, -100);
     }
     push();
     fill(255);
     textSize(30);
     textAlign(CENTER);
     text("viste que se pudo Bró?\n\n\nToca para reiniciar", width/2,100);
     eliminadas = 0;
     pasaron = 0;
     cargas = 0;
     pop();
  } else if(estado=="credito"){                    //pantalla de creditos
     velI =0.1;
     push();
     fill(255);
     textAlign(CENTER);
     push();
     textSize(25);
     text(" Turorial:",width/2,100);
     pop();
     text("\n\n    <-              moverse a la izquierda\n   ->             moverse a la derecha\nESPACIO          disparar\n\nObjetivo: eliminar a diez naves enemigas\nSi cinco naves enemigas\nlogran pasar, pierdes la partida",width/2,100);
     text("CRÉDITOS:\n\n\nSampino Lucas 93080/8\n\ntp4 Intodución al p5.js", width/2,400);
     pop();
  } else if(estado == "juego"){                     //comienzo del juego
      
     if (nx>width) {           
          nx = -nan;
     }
     if (keyIsPressed===true) {
       if (keyCode=== RIGHT_ARROW && cx<width-can/2) {
         cx+=3;
       }
       if (keyCode=== LEFT_ARROW) { 
         cx-=3;
       }
     }
     if (disp && by>0) {
       by -= 4;
       by = by-2;
     } else {
        bx = cx;
        by = cy;
        disp = false;
     }
     proyectil(bx, by, btam);
        if (impacto(bx, by, nx, ny, nan, nalto)) {
        disp = false;
        nx = -nan;
     }
  
     for (let i=0; i<cant; i++) {
        nave(nvsx[i], nvsy[i], nan, nalto);
        nvsx[i] += velnx[i];
        if (nvsx[i]>width) {
          nvsx[i] = random(-300, -100);
          pasaron++;
        }
        if (impacto(bx, by, nvsx[i], nvsy[i], nan, nalto)) {
          disp = false;
          nvsx[i] = random(-300, -100);
          eliminadas++;
        }
      }
      
      arma(cx, cy, can, calt);      
      push();
      rect(0,450, 600, 50);
      text("derribadas"+eliminadas, width/2-240, 480);
      text("escapes" +pasaron, width/2+140, 480);
      text("disparos realizados:"+cargas, width/2-60, 480);
      pop();
      if(pasaron >= 5){
        estado = "perder";
      }else if(eliminadas >= 10){
        estado = "ganaste";
      }  
   } 
}  

function mousePressed(){
  if(estado=="perder"){
    estado="inicio";
  }else if(estado=="ganaste"){
    estado="inicio";
  }else if(estado=="credito"){
    estado="inicio";
  }else if((mouseX>100) && (mouseX<220) && (mouseY>300) && (mouseY<360) && (estado=="inicio")){
    estado="juego";
  }else if((mouseX>400) && (mouseX<520) && (mouseY>300) && (mouseY<360) && (estado=="inicio")){
    estado="credito";
  }
}  

function nave(x, y, ancho, alto) {              //Naves enemigas
  push();
  fill(0, 255, 0);
  rectMode(CORNER);
  imageMode(CORNER);
  image(foto[2], x, y-20, ancho+30, alto+60);
  //rect(x, y, ancho, alto);
  pop();
}

function proyectil(x, y) {                       //misil a disparar
  push();
  fill(255, 140, 20);
  rectMode(CENTER);
  imageMode(CENTER);
  image(foto[4], x,y, 200, 50);
  //rect(x,y, 20, 50);
  pop();
}
function impacto(x, y, px, py, ancho, alto) {        //impacto del misil con las naves enemigas
  if (x>px && x<px+ancho && y>py && y<py+alto) {
    return true;
  } else {
    return false;
  }
}

function arma(x, y, ancho, alto) {                 //Nave aliada
  push();
  fill(0, 0, 255);
  rectMode(CENTER);
  imageMode(CENTER);
  image(foto[1], x, y-20, ancho+30, alto+60);
  //rect(x, y, ancho, alto);
  pop();
}

function keyPressed() {                           //disparar misil
  if (cargas<30) {
    if (keyCode=== 32) {
      disp = true;
      cargas++;
    }
  } else {
    cargasT = false;
  }
}
