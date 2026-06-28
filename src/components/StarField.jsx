import { useEffect, useRef } from 'react';
import { initConstellationCanvas } from '../canvas/constellationCanvas.js';

export default function StarField({ isDetailOpenRef, onShowCard, onHideCard }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const cleanup = initConstellationCanvas(canvas, {
      isDetailOpen: () => isDetailOpenRef.current,
      onShowCard,
      onHideCard,
    });

    return cleanup;
  }, [isDetailOpenRef, onShowCard, onHideCard]);

  return <canvas id="bg" ref={canvasRef} />;
}
