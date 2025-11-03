import { dealCards } from '../../../features/game-logic/deal-cards';
import Card from '../../atoms/card/Card';

import styles from './CardsInHand.module.css';
import HiddenCardsInHand from './hidden-cards/HiddenCardsInHand';

function CardsInHand() {
  const { firstPlayerCards } = dealCards();

  return (
    <div className={styles.container}>
      <HiddenCardsInHand direction="left" />
      <HiddenCardsInHand direction="right" />
      <div className={styles.cards}>
        {firstPlayerCards.map(({ id, ...restProps }, index) => (
          <Card key={id} id={id} cardIndex={index + 1} {...restProps} />
        ))}
      </div>
    </div>
  );
}

export default CardsInHand;
