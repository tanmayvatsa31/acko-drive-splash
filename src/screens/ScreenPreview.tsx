import { useEffect, useState } from "react";
import { INTRO_SPLASH_VISIBLE_MS } from "../constants/introSplash";
import { LOCATION_LOADER_VISIBLE_MS } from "../constants/loader";
import { AckoDriveIntroSplashScreen } from "./AckoDriveIntroSplashScreen";
import { AckoDriveSplashScreen } from "./AckoDriveSplashScreen";
import { LocationGrantedScreen } from "./LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./SevenSecondLoaderScreen";

type ScreenId =
  | "location-flow"
  | "loader"
  | "granted"
  | "flow"
  | "intro"
  | "main";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "location-flow", label: "Location 7s flow" },
  { id: "loader", label: "Location loader" },
  { id: "granted", label: "Location granted" },
  { id: "flow", label: "Splash auto flow" },
  { id: "intro", label: "Intro splash" },
  { id: "main", label: "Main splash" },
];

function LocationAutoFlowPreview() {
  const [showGranted, setShowGranted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGranted(true);
    }, LOCATION_LOADER_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return showGranted ? <LocationGrantedScreen /> : <SevenSecondLoaderScreen />;
}

function AutoFlowPreview() {
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

function ScreenContent({ screenId }: { screenId: ScreenId }) {
  switch (screenId) {
    case "location-flow":
      return <LocationAutoFlowPreview />;
    case "loader":
      return <SevenSecondLoaderScreen />;
    case "granted":
      return <LocationGrantedScreen />;
    case "flow":
      return <AutoFlowPreview />;
    case "intro":
      return <AckoDriveIntroSplashScreen />;
    case "main":
      return <AckoDriveSplashScreen />;
  }
}

function initialScreen(): ScreenId {
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
  return "location-flow";
}

export function ScreenPreview() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(initialScreen);

  return (
    <div className="min-h-dvh bg-[#0a0a0a]">
      <nav
        aria-label="Screen preview"
        className="fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-center gap-8 border-b border-[#262626] bg-[#141414]/95 px-16 py-10 backdrop-blur-sm"
      >
        {SCREENS.map((screen) => (
          <button
            key={screen.id}
            type="button"
            onClick={() => setActiveScreen(screen.id)}
            className={`rounded-full px-14 py-6 text-[13px] leading-none transition-colors ${
              activeScreen === screen.id
                ? "bg-white text-black"
                : "bg-[#262626] text-[#d4d4d4] hover:bg-[#404040]"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </nav>

      <div className="flex min-h-dvh items-center justify-center px-16 py-24 pt-[72px]">
        <ScreenContent key={activeScreen} screenId={activeScreen} />
      </div>
    </div>
  );
}
