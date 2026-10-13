import { useEffect, useState } from "react";
import { INTRO_SPLASH_VISIBLE_MS } from "../constants/introSplash";
import { AckoDriveIntroSplashScreen } from "./AckoDriveIntroSplashScreen";
import { AckoDriveSplashScreen } from "./AckoDriveSplashScreen";

type ScreenId = "flow" | "intro" | "main";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "flow", label: "Auto flow" },
  { id: "intro", label: "Intro splash" },
  { id: "main", label: "Main splash" },
];

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
    case "flow":
      return <AutoFlowPreview />;
    case "intro":
      return <AckoDriveIntroSplashScreen />;
    case "main":
      return <AckoDriveSplashScreen />;
    case "details":
      return <AckoDriveCarDetailsScreen />;
  }
}

export function ScreenPreview() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>("flow");

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

      <div className="flex min-h-dvh items-center justify-center px-16 py-24 pt-[56px]">
        <ScreenContent screenId={activeScreen} />
      </div>
    </div>
  );
}
