import { useCallback, useRef, useState } from 'react';
import StarField from './StarField.jsx';
import DetailOverlay from './DetailOverlay.jsx';

export default function SkyWrap() {
  const [card, setCard] = useState(null);
  const isDetailOpenRef = useRef(false);

  isDetailOpenRef.current = card !== null;

  const handleShowCard = useCallback((con, item) => {
    setCard({ con, item });
  }, []);

  const handleHideCard = useCallback(() => {
    setCard(null);
  }, []);

  return (
    <div id="sky-wrap">
      <StarField
        isDetailOpenRef={isDetailOpenRef}
        onShowCard={handleShowCard}
        onHideCard={handleHideCard}
      />
      <DetailOverlay card={card} onClose={handleHideCard} />
    </div>
  );
}
