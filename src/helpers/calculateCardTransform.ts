export function calculateCardTransform(totalCards: number, cardIndex: number) {
  const cardWidth = 100; // Card width in pixels (matches CSS)
  const maxRotation = 12; // Maximum rotation angle in degrees
  const baseCurveRadius = 2000; // Base radius for maximum cards

  // Dynamically adjust curve radius based on number of cards
  // Subtract card width for each card to tighten the curve as cards are removed
  const curveRadius = baseCurveRadius - cardWidth * (10 - totalCards) * 2;

  // Normalize index to -1 to 1 range (center at 0)
  const normalizedIndex =
    totalCards > 1 ? (cardIndex / (totalCards - 1)) * 2 - 1 : 0;

  // Calculate rotation (creates the fan effect)
  const rotation = normalizedIndex * maxRotation;
  const angleInRadians = (rotation * Math.PI) / 180;

  // Calculate horizontal position using arc length for true circular distribution
  const horizontalOffset = curveRadius * Math.sin(angleInRadians);

  // Calculate vertical offset based on circular arc
  // This ensures the tops of cards follow the curve precisely
  const verticalOffset = curveRadius * (1 - Math.cos(angleInRadians));

  return {
    transform: `translateX(${horizontalOffset}px) translateY(${verticalOffset}px) rotate(${rotation}deg)`,
    transformOrigin: 'center center',
    zIndex: cardIndex + 1,
  };
}
