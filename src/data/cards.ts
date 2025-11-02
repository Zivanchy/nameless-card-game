import { type Card, cardSuits, cardSymbols, cardValues } from '../types/Card';

export const cards: Card[] = cardSuits.flatMap((suit) => {
  return cardValues.map((value, index) => ({
    id: `${suit}-${value}`,
    value,
    symbol: cardSymbols[index],
    suit,
  }));
});
