import { useEffect, useRef } from "react";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";

type LocationPinProps = {
  state: "searching" | "granted";
};

const PIN_TRAVEL_PX = 16;
const HALF_CYCLE_MS = 900;

function smootherstep(value: number) {
  const x = Math.min(1, Math.max(0, value));
  return x * x * x * (x * (x * 6 - 15) + 10);
}

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
      const pingpong = ((now - startedAt) / HALF_CYCLE_MS) % 2;
      const progress = pingpong < 1 ? pingpong : 2 - pingpong;
      const eased = smootherstep(progress);
      marker.style.transform = `translate3d(0, ${eased * PIN_TRAVEL_PX}px, 0)`;
      const scale = 0.96 + eased * 0.08;
      ripple.style.transform = `translateX(-50%) scale(${scale})`;
      ripple.style.opacity = String(0.75 + eased * 0.25);
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
