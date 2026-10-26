import { LocationGrantedLoaderFlow } from "./screens/LocationGrantedLoaderFlow";
import { LocationGrantedScreen } from "./screens/LocationGrantedScreen";
import { SevenSecondLoaderScreen } from "./screens/SevenSecondLoaderScreen";

function screenFromSearch() {
  const screen = new URLSearchParams(window.location.search).get("screen");
  if (screen === "loader" || screen === "granted" || screen === "flow") {
    return screen;
  }
  return "loader";
}

function App() {
  const screen = screenFromSearch();

  if (screen === "loader") {
    return <SevenSecondLoaderScreen />;
  }
  if (screen === "granted") {
    return <LocationGrantedScreen />;
  }
  return <LocationGrantedLoaderFlow />;
}

export default App;
