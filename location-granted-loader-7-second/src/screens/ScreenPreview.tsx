import { useState } from "react";
import { LocationGrantedLoaderFlow } from "./LocationGrantedLoaderFlow";
import { LocationGrantedScreen } from "./LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./SevenSecondLoaderScreen";

type ScreenId = "flow" | "loader" | "granted";

function screenFromSearch(): ScreenId {
  const screen = new URLSearchParams(window.location.search).get("screen");
  if (screen === "loader" || screen === "granted" || screen === "flow") {
    return screen;
  }
  return "loader";
}

function ScreenContent({ screenId }: { screenId: ScreenId }) {
  switch (screenId) {
    case "flow":
      return <LocationGrantedLoaderFlow />;
    case "loader":
      return <SevenSecondLoaderScreen />;
    case "granted":
      return <LocationGrantedScreen />;
  }
}

export function ScreenPreview() {
  const [screenId] = useState<ScreenId>(screenFromSearch);

  return <ScreenContent key={screenId} screenId={screenId} />;
}
