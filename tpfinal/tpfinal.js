//tpfinal — Prueba de minijuego integrado a historia grafica
//Alumnos: Sampino Lucas David y Sanchez Guadalupe
//Legajos: 93080/8 - 93088/6
//Historia elejida: Alicia en el paiz de las maravillas
//Minijuego: runer

let objJuego;

function setup() {
  createCanvas(500, 500);
  objJuego = new Juego();
}


function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.movimientoConTecla(keyCode);
}

function mouseClicked() {
  objJuego.mouseClicked();
}
