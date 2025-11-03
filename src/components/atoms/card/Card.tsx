import type { Card as CardType } from '../../../types/Card';

import styles from './Card.module.css';

interface CardProps extends Pick<CardType, 'id'> {
  cardIndex: number;
}

function Card({ id, cardIndex }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[`card-${cardIndex}`]}`}>
      <p>{id}</p>
    </div>
  );
}

export default Card;
