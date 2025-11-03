import { useState } from 'react';
import { dealCards } from '../../../features/game-logic/deal-cards';
import Card from '../../atoms/card/Card';
import type { Card as CardType } from '../../../types/Card';

import styles from './CardsInHand.module.css';
import HiddenCardsInHand from './hidden-cards/HiddenCardsInHand';

function CardsInHand() {
  const { firstPlayerCards } = dealCards();
  const [cards, setCards] = useState(firstPlayerCards);

  function handleCardClick(cardId: CardType['id']) {
    console.log('Card clicked in CardsInHand component');
    const remainingCards = cards.filter((card) => card.id !== cardId);
    setCards(remainingCards);
    console.log({ cards, remainingCards });
  }

  return (
    <div className={styles.container}>
      <HiddenCardsInHand direction="left" />
      <HiddenCardsInHand direction="right" />
      <div className={styles.cards}>
        {cards.map(({ id, ...restProps }, index) => (
          <Card
            key={id}
            id={id}
            cardIndex={index}
            totalCards={cards.length}
            {...restProps}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsInHand;
