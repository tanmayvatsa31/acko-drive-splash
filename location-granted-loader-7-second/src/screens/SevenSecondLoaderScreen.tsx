import { Typography } from "@acko/typography";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";
import { LocationPin } from "../components/LocationPin";

export function SevenSecondLoaderScreen() {
  return (
    <main
      className="ao-screen"
      data-name="7 Second Loader"
      data-node-id="2209:20662"
      data-theme="light"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="ao-location-glow" aria-hidden>
        <img alt="" src={assets.glowEllipse} />
      </div>

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
            Finding your current location...
          </Typography>
        </div>
      </div>
    </main>
  );
}
