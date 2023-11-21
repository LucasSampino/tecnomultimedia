class Juego {
  constructor() {
    this.cantEnemi = 7;
    this.personaje = new Personaje(width/2, height-12.5, 25, 25);
    this.enemigo = [];
    for (let i=0; i<this.cantEnemi; i++) {
      this.enemigo[i] = new Enemigo(150+i*40, -50, 30, 50);
    }
    this.timer = 0;
    this.timerSeg = 0;
    this.tocaron = 0;
    this.estado = "menu";

    this.capTotal = 15;
    this.cap = [];
    for (let i=0; i<this.capTotal; i++) {
      this.cap[i] = new Historia(i);
    }
  }

  dibujar() {
    if (this.estado == "menu") {
      this.cap[0].dibujar();
    } else if (this.estado == "cap1") {
      this.cap[1].dibujar();
    } else if (this.estado == "cap2") {
      this.cap[2].dibujar();
    } else if (this.estado == "final1") {
      this.cap[10].dibujar();
    } else if (this.estado == "juego") {
      this.juego();
    } else if (this.estado == "ganaste") {
      this.ganaste();
    } else if (this.estado == "perdiste") {
      this.perdiste();
    }
  }

  actualizar() {
    this.tocado();
    this.timer++;
    if (this.timer >= 60) {
      this.timerSeg++;
      this.timer = 0;
    }
    if (this.timerSeg >= 30) {
      this.estado = "ganaste";
    }
    if (this.tocaron >= 5) {
      this.estado = "perdiste"
    }
  }

  juego() {
    background(200);
    this.actualizar();
    this.personaje.dibujar();
    for (let i=0; i<this.cantEnemi; i++) {
      this.enemigo[i].dibujar();
    }
    push();
    push();
    fill(0, 49, 20);
    rect(0, 0, 135, 500);
    rect(365, 0, 500, 500);
    pop();
    push();
    fill(255);
    text("tiempo: "+this.timerSeg, 0, 10);
    text("te tocaron: "+this.tocaron, 0, 20);
    pop();
    pop();
  }

  ganaste() {
    background(200);
    push();
    textAlign(CENTER);
    text("ganaste", width/2, height/2);
    text("apreta Enter", width/2, height/2+10);
    pop();
    this.reinicio();
  }

  perdiste() {
    background(200);
    push();
    textAlign(CENTER);
    text("perdiste", width/2, height/2);
    text("apreta Enter", width/2, height/2+10);
    pop();
    this.reinicio();
  }

  movimientoConTecla(keyCode) {
    this.personaje.movimientoConTecla(keyCode);
    if (keyCode == ENTER && this.estado == "menu") {
      this.estado = "cap1";
    } else if (keyCode == ENTER && this.estado == "cap1") {
      this.estado = "cap2";
    } else if (keyCode == CONTROL && this.estado == "cap2") {
      this.estado = "final1";
    } else if (keyCode == ENTER && this.estado == "cap2") {
      this.estado = "juego";
    } else if (keyCode == ENTER && this.estado == "ganaste") {
      this.estado = "menu";
    } else if (keyCode == ENTER && this.estado == "perdiste") {
      this.estado = "menu";
    } else if (keyCode == ENTER && this.estado == "final1") {
      this.estado = "menu";
    }
  }

  colision(ex, ey, eal, ean, px, py, pan, pal) {
    return ey+eal/2 > py-pal/2 && px > ex-ean && px < ex+ean;
  }

  tocado() {
    for (let i=0; i<this.cantEnemi; i++) {
      if (this.colision(this.enemigo[i].posX, this.enemigo[i].posY, this.enemigo[i].tamY, this.enemigo[i].tamX, this.personaje.posX, this.personaje.posY, this.personaje.tamX, this.personaje.tamY) && this.enemigo[i].chocado) {
        this.enemigo[i].posY = -50;
        this.tocaron++;
      }
    }
  }

  reinicio() {
    for (let i=0; i<this.cantEnemi; i++) {
      this.enemigo[i] = new Enemigo(150+i*40, -50, 30, 50);
    }
    this.personaje = new Personaje(width/2, height-12.5, 25, 25);
    this.timer = 0;
    this.timerSeg = 0;
    this.tocaron = 0;
  }

  mouseClicked() {
    if (this.estado == "menu" && mouseX>100 && mouseX<200 && mouseY>300 && mouseY<400) {
      this.estado = "juego";
    }
  }
}
