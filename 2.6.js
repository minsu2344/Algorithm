const input = Number(require('fs').readFileSync('/dev/stdin').toString());
// const input = 6;

class Card {
  constructor(num) {
    this.card = num;
    this.next = null;
    this.prev = null;
  }
}

class Deck {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(num) {
    const newCard = new Card(num);
    if(!this.head) this.head = newCard;
    else {
      this.tail.next = newCard;
      newCard.prev = this.tail;
    }
    this.tail = newCard;
    this._size++;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getHead() {
    return this.head.card;
  }

  getSize() {
    return this._size;
  }
}

const deck = new Deck();

for(let i=1; i<=input; i++) {
  deck.add(i);
}

while(deck.getSize() !== 1) {
  deck.removeHead();
  deck.add(deck.getHead());
  deck.removeHead();
}

console.log(deck.getHead());