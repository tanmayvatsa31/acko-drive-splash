import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";

type LocationPinProps = {
  state: "searching" | "granted";
};

export function LocationPin({ state }: LocationPinProps) {
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
        data-node-id="2320:4878"
        aria-hidden
      >
      <div className="ao-location-pin__ripple">
        <img alt="" src={assets.pinRipple} />
      </div>
      <div className="ao-location-pin__marker">
        <img alt="" src={assets.pinMarker} />
      </div>
    </div>
  );
}
