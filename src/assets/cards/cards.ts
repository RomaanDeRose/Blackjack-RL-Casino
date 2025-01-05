// valor string, as []
// img string
// nombre string
// id number

interface Card {
  valor: string[];
  img: string;
  nombre: string;
  id: number;
}

const cards: Card[] = [
  // clubs
  {
    valor: ["2"],
    img: "https://deckofcardsapi.com/static/img/2C.png",
    nombre: "2C",
    id: 1,
  },
  {
    valor: ["3"],
    img: "https://deckofcardsapi.com/static/img/3C.png",
    nombre: "3C",
    id: 2,
  },
  {
    valor: ["4"],
    img: "https://deckofcardsapi.com/static/img/4C.png",
    nombre: "4C",
    id: 3,
  },
  {
    valor: ["5"],
    img: "https://deckofcardsapi.com/static/img/5C.png",
    nombre: "5C",
    id: 4,
  },
  {
    valor: ["6"],
    img: "https://deckofcardsapi.com/static/img/6C.png",
    nombre: "6C",
    id: 5,
  },
  {
    valor: ["7"],
    img: "https://deckofcardsapi.com/static/img/7C.png",
    nombre: "7C",
    id: 6,
  },
  {
    valor: ["8"],
    img: "https://deckofcardsapi.com/static/img/8C.png",
    nombre: "8C",
    id: 7,
  },
  {
    valor: ["9"],
    img: "https://deckofcardsapi.com/static/img/9C.png",
    nombre: "9C",
    id: 8,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/0C.png",
    nombre: "10C",
    id: 9,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/JC.png",
    nombre: "JC",
    id: 10,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/QC.png",
    nombre: "QC",
    id: 11,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/KC.png",
    nombre: "KC",
    id: 12,
  },
  {
    valor: ["1", "11"],
    img: "https://deckofcardsapi.com/static/img/AC.png",
    nombre: "AC",
    id: 13,
  },
  // diamonds
  {
    valor: ["2"],
    img: "https://deckofcardsapi.com/static/img/2D.png",
    nombre: "2D",
    id: 14,
  },
  {
    valor: ["3"],
    img: "https://deckofcardsapi.com/static/img/3D.png",
    nombre: "3D",
    id: 15,
  },
  {
    valor: ["4"],
    img: "https://deckofcardsapi.com/static/img/4D.png",
    nombre: "4D",
    id: 16,
  },
  {
    valor: ["5"],
    img: "https://deckofcardsapi.com/static/img/5D.png",
    nombre: "5D",
    id: 17,
  },
  {
    valor: ["6"],
    img: "https://deckofcardsapi.com/static/img/6D.png",
    nombre: "6D",
    id: 18,
  },
  {
    valor: ["7"],
    img: "https://deckofcardsapi.com/static/img/7D.png",
    nombre: "7D",
    id: 19,
  },
  {
    valor: ["8"],
    img: "https://deckofcardsapi.com/static/img/8D.png",
    nombre: "8D",
    id: 20,
  },
  {
    valor: ["9"],
    img: "https://deckofcardsapi.com/static/img/9D.png",
    nombre: "9D",
    id: 21,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/0D.png",
    nombre: "10D",
    id: 22,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/JD.png",
    nombre: "JD",
    id: 23,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/QD.png",
    nombre: "QD",
    id: 24,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/KD.png",
    nombre: "KD",
    id: 25,
  },
  {
    valor: ["1", "11"],
    img: "https://deckofcardsapi.com/static/img/AD.png",
    nombre: "AD",
    id: 26,
  },
  // hearts
  {
    valor: ["2"],
    img: "https://deckofcardsapi.com/static/img/2H.png",
    nombre: "2H",
    id: 27,
  },
  {
    valor: ["3"],
    img: "https://deckofcardsapi.com/static/img/3H.png",
    nombre: "3H",
    id: 28,
  },
  {
    valor: ["4"],
    img: "https://deckofcardsapi.com/static/img/4H.png",
    nombre: "4H",
    id: 29,
  },
  {
    valor: ["5"],
    img: "https://deckofcardsapi.com/static/img/5H.png",
    nombre: "5H",
    id: 30,
  },
  {
    valor: ["6"],
    img: "https://deckofcardsapi.com/static/img/6H.png",
    nombre: "6H",
    id: 31,
  },
  {
    valor: ["7"],
    img: "https://deckofcardsapi.com/static/img/7H.png",
    nombre: "7H",
    id: 32,
  },
  {
    valor: ["8"],
    img: "https://deckofcardsapi.com/static/img/8H.png",
    nombre: "8H",
    id: 33,
  },
  {
    valor: ["9"],
    img: "https://deckofcardsapi.com/static/img/9H.png",
    nombre: "9H",
    id: 34,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/0H.png",
    nombre: "10H",
    id: 35,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/JH.png",
    nombre: "JH",
    id: 36,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/QH.png",
    nombre: "QH",
    id: 37,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/KH.png",
    nombre: "KH",
    id: 38,
  },
  {
    valor: ["1", "11"],
    img: "https://deckofcardsapi.com/static/img/AH.png",
    nombre: "AH",
    id: 39,
  },
  // spades
  {
    valor: ["2"],
    img: "https://deckofcardsapi.com/static/img/2S.png",
    nombre: "2S",
    id: 40,
  },
  {
    valor: ["3"],
    img: "https://deckofcardsapi.com/static/img/3S.png",
    nombre: "3S",
    id: 41,
  },
  {
    valor: ["4"],
    img: "https://deckofcardsapi.com/static/img/4S.png",
    nombre: "4S",
    id: 42,
  },
  {
    valor: ["5"],
    img: "https://deckofcardsapi.com/static/img/5S.png",
    nombre: "5S",
    id: 43,
  },
  {
    valor: ["6"],
    img: "https://deckofcardsapi.com/static/img/6S.png",
    nombre: "6S",
    id: 44,
  },
  {
    valor: ["7"],
    img: "https://deckofcardsapi.com/static/img/7S.png",
    nombre: "7S",
    id: 45,
  },
  {
    valor: ["8"],
    img: "https://deckofcardsapi.com/static/img/8S.png",
    nombre: "8S",
    id: 46,
  },
  {
    valor: ["9"],
    img: "https://deckofcardsapi.com/static/img/9S.png",
    nombre: "9S",
    id: 47,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/0S.png",
    nombre: "10S",
    id: 48,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/JS.png",
    nombre: "JS",
    id: 49,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/QS.png",
    nombre: "QS",
    id: 50,
  },
  {
    valor: ["10"],
    img: "https://deckofcardsapi.com/static/img/KS.png",
    nombre: "KS",
    id: 51,
  },
  {
    valor: ["1", "11"],
    img: "https://deckofcardsapi.com/static/img/AS.png",
    nombre: "AS",
    id: 52,
  },
];

export default cards;
