import { calculateCardTransform } from '../../../helpers/calculateCardTransform';
import type { Card as CardType } from '../../../types/Card';

import styles from './Card.module.css';

interface Props extends Pick<CardType, 'id'> {
  cardIndex: number;
  totalCards: number;
  onClick: () => void;
}

function Card({ id, cardIndex, totalCards, onClick }: Props) {
  const calculatedStyles = calculateCardTransform(totalCards, cardIndex);

  return (
    <div className={styles.card} style={calculatedStyles} onClick={onClick}>
      <p>{id}</p>
    </div>
  );
}

export default Card;
