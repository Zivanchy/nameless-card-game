import { cards } from '../../data/cards';

export function dealCards() {
  const firstPlayerCards = [];
  const secondPlayerCards = [];
  const thirdPlayerCards = [];

  const leftoverCards = [];

  const cardsToDeal = [...cards];

  for (let i = 0; i < cards.length; i++) {
    const randomIndex = Math.floor(Math.random() * cardsToDeal.length);
    const randomCard = cardsToDeal[randomIndex];

    if (firstPlayerCards.length < 10) {
      firstPlayerCards.push(randomCard);
    } else if (secondPlayerCards.length < 10) {
      secondPlayerCards.push(randomCard);
    } else if (thirdPlayerCards.length < 10) {
      thirdPlayerCards.push(randomCard);
    } else {
      leftoverCards.push(randomCard);
    }

    cardsToDeal.splice(cardsToDeal.indexOf(randomCard), 1);
  }

  console.log('Dealt cards to players:', {
    firstPlayerCards,
    secondPlayerCards,
    thirdPlayerCards,
    leftoverCards,
  });

  return {
    firstPlayerCards,
    secondPlayerCards,
    thirdPlayerCards,
    leftoverCards,
  };
}
