import { Typography } from "@acko/typography";
import { LocationPin } from "../components/LocationPin";

export type LocationGrantedScreenProps = {
  locality?: string;
  address?: string;
};

export function LocationGrantedScreen({
  locality = "Neha Vrindavan Apartments",
  address = "27th main road, Sector 2, HSR Layout, Bengaluru, Karnataka, 560102",
}: LocationGrantedScreenProps) {
  return (
    <main
      className="ao-screen"
      data-name="Location Permission given"
      data-node-id="2218:22282"
      data-theme="light"
    >
      <div className="ao-stack ao-stack--400 ao-stack--center">
        <LocationPin state="granted" />
        <div className="ao-stack ao-stack--300 ao-stack--center">
          <Typography
            as="p"
            variant="paragraph-small"
            weight="regular"
            color="tertiary"
            align="center"
          >
            Your current location
          </Typography>
          <div className="ao-stack ao-stack--200 ao-stack--center">
            <Typography
              as="h1"
              variant="heading-small"
              weight="semibold"
              color="primary"
              align="center"
            >
              {locality}
            </Typography>
            <Typography
              as="p"
              variant="paragraph-small"
              weight="regular"
              color="secondary"
              align="center"
            >
              {address}
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}
