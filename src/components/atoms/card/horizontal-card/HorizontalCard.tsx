import type { Card as CardType } from '../../../../types/Card';

import styles from './HorizontalCard.module.css';

interface CardProps extends Pick<CardType, 'id'> {
  cardIndex: number;
  cardDirection: 'left' | 'right';
}

function HorizontalCard({ id, cardIndex, cardDirection }: CardProps) {
  return (
    <div
      className={`${styles.card} ${
        styles[`card-${cardIndex}-${cardDirection}`]
      }`}
    >
      <p>{id}</p>
    </div>
  );
}

export default HorizontalCard;
