import { useEffect, useRef } from "react";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";

type LocationPinProps = {
  state: "searching" | "granted";
};

const PERIOD_MS = 1500;
const TRAVEL_PX = 20;

function usePinpointBounce() {
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const startedAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const turn = ((now - startedAt) / PERIOD_MS) % 1;
      const y = (TRAVEL_PX / 2) * (1 - Math.cos(Math.PI * 2 * turn));
      marker.style.transform = `translate3d(0, ${y}px, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return markerRef;
}

export function LocationPin({ state }: LocationPinProps) {
  const markerRef = usePinpointBounce();

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
      <div className="ao-location-pin__ripple">
        <img alt="" src={assets.pinRipple} />
      </div>
      <div className="ao-location-pin__marker" ref={markerRef}>
        <img alt="" src={assets.pinMarker} />
      </div>
    </div>
  );
}
