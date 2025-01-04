class Jugador {
  constructor(apuesta, cashTotal) {
    this.valor;
    this.cartas = [];
    this.apuesta = apuesta;
    this.cashTotal = cashTotal;
  }
  setCartas(cartas) {
    this.cartas = cartas;
  }
  setValor(valor) {
    this.valor = valor;
  }
  getValor() {
    return this.valor;
  }
  pedir() {
    // Pedir carta
  }
  plantar() {
    // Plantar
  }
  doblar() {
    // Doblar apuesta
  }
  dividir() {
    // dividir cartas
  }
  asegurar() {
    // Asegurar apuesta
  }
}

class Carta {
  constructor(valor, img, nombre, id) {
    this.valor = valor;
    this.img = img;
    this.nombre = nombre;
    this.id = id;
  }
  getValor() {
    return this.valor;
  }
}
