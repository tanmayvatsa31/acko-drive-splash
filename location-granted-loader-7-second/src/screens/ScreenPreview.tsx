import { useEffect, useState } from "react";
import { LOCATION_LOADER_VISIBLE_MS } from "../constants/loader";
import { LocationGrantedScreen } from "./LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./SevenSecondLoaderScreen";

type ScreenId = "flow" | "loader" | "granted";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "flow", label: "Auto flow (7s)" },
  { id: "loader", label: "7 Second Loader" },
  { id: "granted", label: "Location granted" },
];

function AutoFlowPreview() {
  const [showGranted, setShowGranted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGranted(true);
    }, LOCATION_LOADER_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return showGranted ? (
    <LocationGrantedScreen />
  ) : (
    <SevenSecondLoaderScreen />
  );
}

function ScreenContent({ screenId }: { screenId: ScreenId }) {
  switch (screenId) {
    case "flow":
      return <AutoFlowPreview />;
    case "loader":
      return <SevenSecondLoaderScreen />;
    case "granted":
      return <LocationGrantedScreen />;
  }
}

function initialScreen(): ScreenId {
  const screen = new URLSearchParams(window.location.search).get("screen");
  if (screen === "loader" || screen === "granted" || screen === "flow") {
    return screen;
  }
  return "flow";
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
