import HorizontalCard from '../../../atoms/card/horizontal-card/HorizontalCard';

import styles from './HiddenCardsInHand.module.css';

interface HiddenCardsInHandProps {
  direction: 'left' | 'right';
}

function HiddenCardsInHand({ direction }: HiddenCardsInHandProps) {
  return (
    <div className={styles[`hidden-${direction}`]}>
      {Array.from({ length: 10 }).map((_, index) => (
        <HorizontalCard
          key={`hidden-card-${index + 1}`}
          id={`hidden-${direction}-${index}`}
          cardIndex={index + 1}
          cardDirection={direction}
        />
      ))}
    </div>
  );
}

export default HiddenCardsInHand;
