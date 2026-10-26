import { useEffect, useState } from "react";
import { INTRO_SPLASH_VISIBLE_MS } from "../constants/introSplash";
import { AckoDriveIntroSplashScreen } from "./AckoDriveIntroSplashScreen";
import { AckoDriveSplashScreen } from "./AckoDriveSplashScreen";
import { LocationGrantedLoaderFlow } from "./LocationGrantedLoaderFlow";
import { LocationGrantedScreen } from "./LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./SevenSecondLoaderScreen";

type ScreenId =
  | "location-flow"
  | "loader"
  | "granted"
  | "flow"
  | "intro"
  | "main";

function SplashAutoFlow() {
  const [showMainSplash, setShowMainSplash] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowMainSplash(true);
    }, INTRO_SPLASH_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return showMainSplash ? (
    <AckoDriveSplashScreen />
  ) : (
    <AckoDriveIntroSplashScreen />
  );
}

function screenFromSearch(): ScreenId {
  const screen = new URLSearchParams(window.location.search).get("screen");
  if (
    screen === "location-flow" ||
    screen === "loader" ||
    screen === "granted" ||
    screen === "flow" ||
    screen === "intro" ||
    screen === "main"
  ) {
    return screen;
  }
  return "loader";
}

function ScreenContent({ screenId }: { screenId: ScreenId }) {
  switch (screenId) {
    case "location-flow":
      return <LocationGrantedLoaderFlow />;
    case "loader":
      return <SevenSecondLoaderScreen />;
    case "granted":
      return <LocationGrantedScreen />;
    case "flow":
      return <SplashAutoFlow />;
    case "intro":
      return <AckoDriveIntroSplashScreen />;
    case "main":
      return <AckoDriveSplashScreen />;
  }
}

export function ScreenPreview() {
  const [screenId] = useState<ScreenId>(screenFromSearch);

  return <ScreenContent key={screenId} screenId={screenId} />;
}
