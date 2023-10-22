//TP#5 — MiniJuego con POO orientado a la Aventura Gráfica
//Alumno: Sampino Lucas David
//Legajo: 93080/8
//Historia elejida: Hansel y Gretel
//Link del video: https://youtu.be/AJyGEe-VTls

let objJuego;

function setup() {
  createCanvas(600,600); 
  objJuego = new historia();
}


function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}
