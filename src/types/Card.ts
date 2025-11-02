export interface Card {
  id: string;
  value: (typeof cardValues)[number];
  symbol: (typeof cardSymbols)[number];
  suit: (typeof cardSuits)[number];
}

export const cardSuits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
export const cardValues = [7, 8, 9, 10, 12, 13, 14, 15] as const;
export const cardSymbols = [7, 8, 9, 10, 'J', 'Q', 'K', 'A'] as const;
