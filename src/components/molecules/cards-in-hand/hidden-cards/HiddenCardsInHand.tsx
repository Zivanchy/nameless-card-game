import HorizontalCard from '../../../atoms/card/horizontal-card/HorizontalCard';

import styles from './HiddenCardsInHand.module.css';

interface Props {
  direction: 'left' | 'right';
}

function HiddenCardsInHand({ direction }: Props) {
  const hiddenCards = Array.from({ length: 10 });

  return (
    <div className={styles[`hidden-${direction}`]}>
      {hiddenCards.map((_, index) => (
        <HorizontalCard
          key={`hidden-card-${index + 1}`}
          id={`hidden-${direction}-${index}`}
          cardIndex={index + 1}
          cardDirection={direction}
          totalCards={hiddenCards.length}
        />
      ))}
    </div>
  );
}

export default HiddenCardsInHand;
