class Historia {
  constructor(capitulo) {
    this.cap = capitulo;
  }

  dibujar() {
    if (this.cap == 0) {
      this.inicio();
    } else if (this.cap == 1) {
      this.cap1();
    } else if (this.cap == 2) {
      this.cap2();
    } else if (this.cap == 10) {
      this.final1();
    }
  }
  inicio() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("Alicia en el pais de las maravillas", width/2, height/2);
    text("Presione ENTER para comenzar", width/2, height/2+20);
    pop();
  }
  cap1() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("cap1", width/2, height/2);
    text("Presione ENTER para pasar al cap2", width/2, height/2+20);
    pop();
  }

  cap2() {
    push();
    background(0);
    textAlign(CENTER);
    fill(255);
    text("cap2", width/2, height/2);
    text("Presione ENTER para pasar al cap3", width/2, height/2+20);
    text("Presione CONTROL para pasar al final1", width/2, height/2+30);
    pop();
  }

  final1() {
    push();
    background(0);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("perdiste", width/2, height/2);
    text("Presione ENTER para pasar al menu de inicio", width/2, height/2+30);
    pop();
  }
}
