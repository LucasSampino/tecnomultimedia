class Juego {
  constructor() {
    this.cantEnemi = 7;
    this.personaje = new Personaje(width/2, height-12.5, 30, 60);
    this.enemigo = [];
    for (let i=0; i<this.cantEnemi; i++) {
      this.enemigo[i] = new Enemigo(150+i*40, -50, 30, 50);
    }
    this.timer = 0;
    this.timerSeg = 0;
    this.tocaron = 0;
    this.estado = "menu";

    this.capTotal = 16;
    this.cap = [];
    for (let i=0; i<this.capTotal; i++) {
      this.cap[i] = new Historia(i);
    }
    this.game = [];
    this.carga();
  }

  dibujar() {
    if (this.estado == "menu") {
      this.cap[0].dibujar();
    } else if (this.estado == "cap1") {
      this.cap[1].dibujar();
    } else if (this.estado == "cap2") {
      this.cap[2].dibujar();
    } else if (this.estado == "cap3") {
      this.cap[3].dibujar();
    } else if (this.estado == "cap4") {
      this.cap[4].dibujar();
    } else if (this.estado == "cap5") {
      this.cap[5].dibujar();
    } else if (this.estado == "cap6") {
      this.cap[8].dibujar();
    } else if (this.estado == "cap7") {
      this.cap[9].dibujar();
    } else if (this.estado == "final1") {
      this.cap[11].dibujar();
    } else if (this.estado == "final2") {
      this.cap[12].dibujar();
    } else if (this.estado == "final3") {
      this.cap[13].dibujar();
    } else if (this.estado == "final4") {
      this.cap[14].dibujar();
    } else if (this.estado == "final5") {
      this.cap[10].dibujar();
    } else if (this.estado == "instru") {
      this.cap[6].dibujar();
    } else if (this.estado == "juego") {
      this.juego();
    } else if (this.estado == "ganaste") {
      this.ganaste();
    } else if (this.estado == "perdiste") {
      this.perdiste();
    } else if (this.estado == "creditos") {
      this.cap[15].dibujar();
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
    image(this.game [1], 0,0,500,500);
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
    image(this.game [0], 0, 0, 135, 500);
    image(this.game [0], 365, 0, 500, 500);
    pop();
    push();
    fill(255);
    text("tiempo: "+this.timerSeg, 0, 10);
    text("te tocaron: "+this.tocaron, 0, 20);
    pop();
    pop();
  }

  ganaste() {
    background(0);
    push();
    image(this.game [2], 0, 0, 500, 500);
    push();
    fill(98, 64, 0, 200);
    rectMode(CENTER);
    rect(width/2, height/2-5, 80, 30);
    rect(width/2, 400-5, 210, 30);
    pop();
    push();
    textAlign(CENTER);
    fill(255)
    textSize(20); 
    text("ganaste", width/2, height/2);
    textSize(15);
    text("Presione Enter para continuar", width/2, 400);
    pop();
    pop();
    this.reinicio();
  }

  perdiste() {
    background(0);
    push();
    image(this.game [0], 0, 0);
    fill(98, 64, 0, 200);
    rectMode(CENTER);
    rect(width/2, height/2-5, 80, 30);
    rect(width/2, 400-5, 210, 30);
    pop();
    push();
    textAlign(CENTER);
    fill(255);
    textSize(20);
    text("perdiste", width/2, height/2);
    textSize(15);
    text("Presione Enter para continuar", width/2, 400);
    pop();
    pop();
    this.reinicio();
  }

  movimientoConTecla(keyCode) {
    this.personaje.movimientoConTecla(keyCode);
    if (keyCode == ENTER && this.estado == "menu") {
      this.estado = "cap1";
    } else if (keyCode == ENTER && this.estado == "cap1") {
      this.estado = "cap2";
    } else if (keyCode == CONTROL && this.estado == "cap1") {
      this.estado = "final1";
    } else if (keyCode == ENTER && this.estado == "cap2") {
      this.estado = "cap3";
    } else if (keyCode == CONTROL && this.estado == "cap2") {
      this.estado = "final2";
    } else if (keyCode == ENTER && this.estado == "cap3") {
      this.estado = "cap4";
    } else if (keyCode == ENTER && this.estado == "cap4") {
      this.estado = "cap5";
    } else if (keyCode == ENTER && this.estado == "cap5") {
      this.estado = "instru";
    } else if (keyCode == ENTER && this.estado == "instru") {
      this.estado = "juego";
    } else if (keyCode == ENTER && this.estado == "ganaste") {
      this.estado = "cap6";
    } else if (keyCode == ENTER && this.estado == "perdiste") {
      this.estado = "final3";
    } else if (keyCode == ENTER && this.estado == "cap6") {
      this.estado = "cap7";
    } else if (keyCode == CONTROL && this.estado == "cap6") {
      this.estado = "final4";
    } else if (keyCode == ENTER && this.estado == "cap6") {
      this.estado = "cap7";
    } else if (keyCode == ENTER && this.estado == "cap7") {
      this.estado = "final5";
    } else if (keyCode == ENTER && this.estado == "final1") {
      this.estado = "creditos";
    } else if (keyCode == ENTER && this.estado == "final2") {
      this.estado = "creditos";
    } else if (keyCode == ENTER && this.estado == "final3") {
      this.estado = "creditos";
    } else if (keyCode == ENTER && this.estado == "final4") {
      this.estado = "creditos";
    } else if (keyCode == ENTER && this.estado == "final5") {
      this.estado = "creditos";
    }else if (keyCode == ENTER && this.estado == "creditos") {
      this.estado = "menu";
    }
  }

  colision(ex, ey, eal, ean, px, py, pan, pal) {
    //return ey+eal/2 > py-pal/2 && px > ex-ean && px < ex+ean;
    return ey+eal/2 > py-pal/2 && px > ex-ean/2 && px < ex+ean/2 && ey-eal/2 < py+pal/2;
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
    this.personaje = new Personaje(width/2, height-12.5, 30, 60);
    this.timer = 0;
    this.timerSeg = 0;
    this.tocaron = 0;
  }
  
  carga() {
    for (let i=0; i<15; i++) {
      this.game.push(loadImage('data/game' +i+ '.png'));
    }
  }

  mouseClicked() {
    if (this.estado == "menu" && mouseX>100 && mouseX<200 && mouseY>300 && mouseY<400) {
      this.estado = "juego";
    }
  }
}
