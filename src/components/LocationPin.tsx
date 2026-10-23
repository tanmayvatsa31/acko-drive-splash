import { useEffect, useRef } from "react";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";

type LocationPinProps = {
  state: "searching" | "granted";
};

const PIN_TRAVEL_PX = 12;
const RIPPLE_SCALE = 0.06;
const CYCLES_PER_SECOND = 0.65;

function useSearchingPinMotion() {
  const markerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const ripple = rippleRef.current;
    if (!marker || !ripple) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const startedAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const wave = Math.sin(
        (now - startedAt) * 0.001 * Math.PI * 2 * CYCLES_PER_SECOND,
      );
      marker.style.transform = `translate3d(0, ${wave * PIN_TRAVEL_PX}px, 0)`;
      const scale = 1 + wave * RIPPLE_SCALE;
      ripple.style.transform = `translateX(-50%) scale(${scale})`;
      ripple.style.opacity = String(0.82 + wave * 0.18);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return { markerRef, rippleRef };
}

export function LocationPin({ state }: LocationPinProps) {
  const { markerRef, rippleRef } = useSearchingPinMotion();

  if (state === "granted") {
    return (
      <div
        className="ao-location-pin ao-location-pin--granted"
        data-name="Location"
        aria-hidden
      >
        <div className="ao-location-pin__granted">
          <img alt="" src={assets.pinGranted} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="ao-location-pin ao-location-pin--searching"
      data-name="Location"
      aria-hidden
    >
      <div className="ao-location-pin__ripple" ref={rippleRef}>
        <img alt="" src={assets.pinRipple} />
      </div>
      <div className="ao-location-pin__marker" ref={markerRef}>
        <img alt="" src={assets.pinMarker} />
      </div>
    </div>
  );
}
