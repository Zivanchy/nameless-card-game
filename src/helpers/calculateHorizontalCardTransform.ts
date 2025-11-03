export const calculateHorizontalCardTransform = (
  totalCards: number,
  cardIndex: number,
  cardDirection: 'left' | 'right'
) => {
  const cardHeight = 100; // Card height in pixels (matches CSS)
  const maxAngle = 12; // Maximum angle in degrees for the arc
  const baseCurveRadius = 2000; // Base radius for maximum cards

  // Dynamically adjust curve radius based on number of cards
  const curveRadius = baseCurveRadius - cardHeight * (10 - totalCards) * 2;

  // Convert to 0-based index
  const zeroBasedIndex = cardIndex - 1;

  // Normalize index to -1 to 1 range (center at 0)
  // -1 is top, +1 is bottom
  const normalizedIndex =
    totalCards > 1 ? (zeroBasedIndex / (totalCards - 1)) * 2 - 1 : 0;

  // Calculate angle for this card position along the arc
  const angle =
    (cardDirection === 'right' ? -normalizedIndex : normalizedIndex) * maxAngle;
  const angleInRadians = (angle * Math.PI) / 180;

  // Calculate vertical position using arc length for true circular distribution
  const verticalOffset =
    (cardDirection === 'right' ? -curveRadius : curveRadius) *
    Math.sin(angleInRadians);

  // Calculate horizontal offset based on circular arc
  // This ensures the left edges of cards follow the curve precisely
  const horizontalOffset =
    (cardDirection === 'right' ? curveRadius : -curveRadius) *
    (1 - Math.cos(angleInRadians));

  return {
    transform: `translateX(${horizontalOffset}px) translateY(${verticalOffset}px) rotate(${angle}deg)`,
    transformOrigin: 'center center',
    zIndex: cardIndex,
  };
};
