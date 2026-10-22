import { Typography } from "@acko/typography";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";
import { loaderFrameClassName } from "../constants/loader";

export type LocationGrantedScreenProps = {
  locality?: string;
  address?: string;
};

export function LocationGrantedScreen({
  locality = "Neha Vrindavan Apartments",
  address = "27th main road, Sector 2, HSR Layout, Bengaluru, Karnataka, 560102",
}: LocationGrantedScreenProps) {
  return (
    <div
      className={loaderFrameClassName}
      data-name="Location Permission given"
      data-node-id="2218:22282"
      data-theme="light"
    >
      <div
        className="absolute top-1/2 left-1/2 flex w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[16px]"
        data-node-id="2218:22283"
      >
        <div
          className="relative size-[104px] shrink-0 overflow-clip"
          data-name="Location"
          data-node-id="2218:22284"
        >
          <div
            className="absolute top-[9.87%] bottom-[10.13%] left-[calc(50%-0.36px)] w-[79.803px] -translate-x-1/2"
            data-node-id="2218:22285"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={assets.pinGranted}
            />
          </div>
        </div>

        <div
          className="relative flex w-full shrink-0 flex-col items-center gap-[12px] text-center break-words"
          data-node-id="2218:22292"
        >
          <Typography
            as="p"
            variant="body-sm"
            weight="regular"
            color="tertiary"
            className="w-[320px]"
          >
            Your current location
          </Typography>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="2218:22298"
          >
            <Typography
              as="p"
              variant="heading-sm"
              weight="semibold"
              color="primary"
              className="w-full"
            >
              {locality}
            </Typography>
            <Typography
              as="p"
              variant="body-sm"
              weight="regular"
              color="secondary"
              className="w-full"
            >
              {address}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
