class Historia {
  constructor(capitulo) {
    this.cap = capitulo;
    this.photo = [];
    this.carga();
    this.fondo = loadImage('data/game0.png');
  }

  dibujar() {
    if (this.cap == 0) {
      this.inicio();
    } else if (this.cap == 1) {
      this.cap1();
    } else if (this.cap == 2) {
      this.cap2();
    } else if (this.cap == 3) {
      this.cap3();
    } else if (this.cap == 4) {
      this.cap4();
    } else if (this.cap == 5) {
      this.cap5();
    } else if (this.cap == 6) {
      this.instrucciones();
    } else if (this.cap == 8) {
      this.cap6();
    } else if (this.cap == 9) {
      this.cap7();
    } else if (this.cap == 10) {
      this.final5();
    } else if (this.cap == 11) {
      this.final1();
    } else if (this.cap == 12) {
      this.final2();
    } else if (this.cap == 13) {
      this.final3();
    } else if (this.cap == 14) {
      this.final4();
    } else if (this.cap == 15) {
      this.creditos();
    }
  }
  inicio() { // (0)
    push();
    background(0);
    image(this.photo [0], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);
    push();
    fill(98, 64, 0, 200);
    rectMode(CENTER);
    rect(width/2, 460, 300, 40);
    pop();
    text("Presione ENTER para comenzar", width/2, 460);
    pop();
  }
  cap1() { //final 1  (1)
    push();
    background(0);
    image(this.photo [1], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(100, 410, 150);
    this.eleccion();

    text("Alicia se encontraba descansando,\njunto a su gata Diana en el jardín de su casa,\ncuando vió a un conejo blanco pasar\nbastante apurado junto a ella,\ndeberia seguirlo?", width/2, 50);
    textSize(15);
    text("Presione ENTER \npara seguir al conejo", 100, 400);
    text("Presione CONTROL para \nno seguirlo", 400, 400);
    pop();
  }

  cap2() {//final 2 (2)
    push();
    background(0);
    image(this.photo [2], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(100, 410, 150);
    this.eleccion();

    text("Alicia decide seguir al conejo blanco y\naveriguar hacia donde va.\nEntonces llega a un pozo\nescondido entre los árboles del jardín,\ndebería saltar?", width/2, 50);
    textSize(15);
    text("Presione ENTER \npara saltar", 100, 400);
    text("Presione CONTROL \npara regresar", 400, 400);
    pop();
  }

  cap3() { // (3)
    push();
    background(0);
    image(this.photo [3], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(85, 440, 130);
    this.siguiente(230);

    text("Despues de caer por ese extraño y mágico pozo\nAlicia llega a una tierra bastante pequiliar,\nqueda maravillada de todas las cosas extrañas\nque hay en él y decide explorarlo", width/2, 50);
    textSize(15);
    text("Presione ENTER para continuar", width/2, 400);
    pop();
  }

  cap4() { //(4)
    push();
    background(0);
    image(this.photo [4], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(100, 470, 150);
    this.siguiente(230);

    text("Caminando por los magicos caminos del País\nde las Maravillas Alicia\nse encuentra con un señor de apariencia\nchistosa y desarreglada quién se presenta a la niña\ncomo el Sombrerero Loco", width/2, 50);
    textSize(15);
    text("Presione ENTER para continuar", width/2, 400);
    pop();
  }

  cap5() {  //inicia juego/final 3 (5)
    push();
    background(0);
    image(this.photo [5], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(90, 430, 130);
    this.siguiente(300);

    text("Alicia le plantea al Sombrerero no saber\ndonde esta y de como puede volver a su hogar,\nel Sombrerero la invita a su casa a tomar el té\n Alicia acepta y se ponen en marcha", width/2, 50);
    textSize(15);
    text("Presione ENTER para ir con el sombrerero", width/2, 400);
    pop();
  }

  cap6() {  //final 4 (8)
    push();
    background(0);
    image(this.photo [6], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(120, 460, 200);
    this.eleccion();

    text("Alicia y el sombrerero llegan a tiempo, en su casa, \nfueron al patio donde habia una larga mesa llena\nde tazas con té y cosas dulces. Pasaron toda\nla tarde de celebracion con el ¨No cumpleaños¨.\n Luego de la celebración le ofrecen ayuda \na Alicia para que vuelva a su casa\naceptara la invitacion?", width/2, 50);
    textSize(15);
    text("Presione ENTER \npara volver a casa", 100, 400);
    text("Presione CONTROL \npara quedarse en ese lugar", 400, 400);
    pop();
  }

  cap7() { //(9)
    push();
    background(0);
    image(this.photo [7], 0, 0, 500, 500);
    textAlign(CENTER);
    fill(255);
    textSize(20);

    this.cuadro(90, 500, 120);
    this.siguiente(230);

    text("Alicia acepta la ayuda del Sombrerero y la Liebre\ny la llevan a otro pozo similar al del jardín de su casa,\nAlicia agradece la linda tarde que pasaron\ny luego de despedirse, salta al pozo", width/2, 50);
    textSize(15);
    text("Presione ENTER para continuar", width/2, 400);
    pop();
  }

  final1() { //(11)
    push();
    background(0);
    image(this.photo [8], 0, 0, 500, 500);
    textAlign(CENTER);
    textSize(20);
    fill(255);

    this.cuadro(55, 430, 70);
    this.siguiente(300);

    text("FINAL1:Alicia decide ignorar al conejo blanco\ny seguir pasando la tarde en su jardin", width/2, 50);
    textSize(15);
    text("Presione ENTER para pasar a los creditos", width/2, 400);
    pop();
  }

  final2() { //(12)
    push();
    background(0);
    image(this.photo [9], 0, 0, 500, 500);
    textAlign(CENTER);
    textSize(20);
    fill(255);

    this.cuadro(55, 500, 70);
    this.siguiente(300);

    text("FINAL2:A Alicia le pareció muy peligroso tirarse, por lo\nque prefirió volver a su casa y ver una pelicula", width/2, 50);
    textSize(15);
    text("Presione ENTER para pasar a los creditos", width/2, 400);
    pop();
  }

  final3() { //(13)
    push();
    background(0);
    image(this.photo [10], 0, 0, 500, 500);
    textAlign(CENTER);
    textSize(20);
    fill(255);

    this.cuadro(50, 500, 50);
    this.siguiente(300);

    text("FINAL3: Alicia y el sombrerero se pierden en el bosque", width/2, 50);
    textSize(15);
    text("Presione ENTER para pasar a los creditos", width/2, 400);
    pop();
  }

  final4() {// (14)
    push();
    background(0);
    image(this.photo [11], 0, 0, 500, 500);
    textAlign(CENTER);
    textSize(20);
    fill(255);

    this.cuadro(70, 500, 100);
    this.siguiente(300);

    text("FINAL4: Alicia decide quedarse a vivir con ellos\nen esa tierra magica y celebrar las fiestas\nde no cumpleaños", width/2, 50);
    textSize(15);
    text("Presione ENTER para pasar a los creditos", width/2, 400);
    pop();
  }

  final5() { // (10)
    push();
    background(0);
    image(this.photo [12], 0, 0, 500, 500);
    textAlign(CENTER);
    textSize(20);
    fill(255);

    this.cuadro(110, 4700, 190);
    this.siguiente(300);

    text("FINAL5: Alicia despierta en su jardín junto a su gatita\npareciera que nada hubiera ocurrido como\nsi el tiempo no hubiera pasado\nAlicia se dedico lo que quedaba de\nla tarde para contarle\na Diana la aventura que acababa de tener", width/2, 50);
    textSize(15);
    text("Presione ENTER para pasar a los creditos", width/2, 400);
    pop();
  }

  instrucciones() {
    push();
    background(0);
    image(this.fondo,0,0);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("para llegar a la casa del sombrerero, \ndeven atravesar el bosque en 30 segundos \nsin chocar no mas de 5 veces \ncon los objetos del bosque\n\nControles:\n<- para moverte hacia la izquierda\n->para moverte hacia la derecha", width/2, 100);
    textSize(15);
    text("Presione ENTER para jugar", width/2, 400);
    pop();
  }

  creditos() { //15
    push();
    background(0);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("Créditos\n\n\n\nGuadalupe Sanchez Rodriguez legajo 93088/6\n\nSampino Lucas David legajo 93080/8 \n\ntp5 Aventura Gráfica + minijuego", width/2, 100);
    textSize(15);
    text("Presione ENTER para pasar al menu de inicio", width/2, 400);
    pop();
  }

  eleccion() {
    push();
    rectMode(CENTER);
    fill(98, 64, 0, 200);
    rect(100, 400, 150, 50);
    rect(400, 400, 190, 50);
    pop();
  }

  siguiente(tam) {
    push();
    rectMode(CENTER);
    fill(98, 64, 0, 200);
    rect(width/2, 400, tam, 40);
    pop();
  }
  
  cuadro(posY, tamAn, tamAl){
    push();
    fill(98, 64, 0, 200);
    rectMode(CENTER);
    rect(width/2, posY, tamAn, tamAl);
    pop();
  }

  carga() {
    for (let i=0; i<13; i++) {
      this.photo.push(loadImage('data/photo' +i+ '.png'));
    }
  }
}
