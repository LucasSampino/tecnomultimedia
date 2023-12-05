class Personaje {
  constructor(posX, posY, tamX, tamY) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
    this.movimiento = 10;
    this.miColor = color(0, 0, 200);
    this.alicia = loadImage('data/alicia.png');
  }

  dibujar() {
    push();
    rectMode(CENTER);
    fill(this.miColor);
    //rect(this.posX, this.posY, this.tamX, this.tamY);
    imageMode(CENTER);
    image(this.alicia, this.posX, this.posY, this.tamX, this.tamY);
    pop();
  }

  movimientoConTecla(keyCode) {

    switch(keyCode) {

    case LEFT_ARROW:
      this.posX -= this.movimiento;
      if (this.posX <= 135) {
        this.posX = 365;
      }
      break;

    case RIGHT_ARROW:
      this.posX += this.movimiento;
      if (this.posX >= 365) {
        this.posX = 135;
      }
      break;
    }
  }

  colDer() {
    this.posX -= this.movimiento
  }
  colIzq() {
    this.posX += this.movimiento;
  }
  
}
