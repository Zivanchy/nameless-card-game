import { calculateHorizontalCardTransform } from '../../../../helpers/calculateHorizontalCardTransform';
import type { Card as CardType } from '../../../../types/Card';

import styles from './HorizontalCard.module.css';

interface Props extends Pick<CardType, 'id'> {
  cardIndex: number;
  totalCards: number;
  cardDirection: 'left' | 'right';
}

function HorizontalCard({ id, cardIndex, cardDirection, totalCards }: Props) {
  return (
    <div
      className={styles.card}
      style={calculateHorizontalCardTransform(
        totalCards,
        cardIndex,
        cardDirection
      )}
    >
      <p>{id}</p>
    </div>
  );
}

export default HorizontalCard;
