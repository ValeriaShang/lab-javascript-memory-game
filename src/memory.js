class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards.length) return undefined;
    let i = this.cards.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[randIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randIndex],
      ];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    const card = card1 == card2;

    if (card) this.pairsGuessed += 1;
    return card;
  }

  checkIfFinished() {
    if (this.pairsClicked == 0) return false;

    return this.pairsGuessed == this.cards.length / 2;
  }
}
