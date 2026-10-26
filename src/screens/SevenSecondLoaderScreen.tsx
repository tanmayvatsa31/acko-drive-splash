import { Typography } from "@acko/typography";
import { LocationPin } from "../components/LocationPin";
import { MobileScreen } from "../components/MobileScreen";

export function SevenSecondLoaderScreen() {
  return (
    <MobileScreen name="7 Second Loader" nodeId="2209:20662">
      <main className="ao-screen" aria-busy="true" aria-live="polite">
        <div className="ao-stack ao-stack--400 ao-stack--center">
          <LocationPin state="searching" />
          <div className="ao-stack ao-stack--300 ao-stack--center">
            <Typography
              as="p"
              variant="paragraph-small"
              weight="regular"
              color="secondary"
              align="center"
            >
              Detecting your location...
            </Typography>
          </div>
        </div>
      </main>
    </MobileScreen>
  );
}
