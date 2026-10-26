import { useEffect, useState } from "react";
import { LOCATION_LOADER_VISIBLE_MS } from "../constants/loader";
import { LocationGrantedScreen } from "./LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./SevenSecondLoaderScreen";

export function LocationGrantedLoaderFlow() {
  const [showGranted, setShowGranted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGranted(true);
    }, LOCATION_LOADER_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return showGranted ? <LocationGrantedScreen /> : <SevenSecondLoaderScreen />;
}
