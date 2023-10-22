class fondo {
  constructor() {
    this.load();
    this.num = 0;
  }

  load() {
    this.imagenes = [];
    for (let i = 0; i < 20; i++) {
      this.imagenes[i] = loadImage("data/horse" + i + ".png");
    }
  }
}
