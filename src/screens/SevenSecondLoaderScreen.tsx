import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { Typography } from "@acko/typography";
import { locationLoaderAssets as assets } from "../assets/locationLoaderAssets";
import { loaderFrameClassName } from "../constants/loader";

export function SevenSecondLoaderScreen() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={loaderFrameClassName}
      data-name="7 Second Loader"
      data-node-id="2209:20662"
      data-theme="light"
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2"
        data-node-id="2209:22280"
      >
        <div className="absolute inset-[-41.67%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src={assets.glowEllipse}
          />
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 flex w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[16px]"
        data-node-id="2209:21722"
      >
        <div
          className="relative size-[156px] shrink-0 overflow-clip"
          data-name="Location"
          data-node-id="2231:23105"
        >
          <div
            className="absolute top-[69.49%] bottom-[10.13%] left-[calc(50%-0.55px)] w-[119.705px] -translate-x-1/2"
            data-node-id="2231:23106"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={assets.pinRipple}
            />
          </div>
          <motion.div
            className="absolute inset-[0_24.48%_32.44%_20.07%]"
            data-node-id="2231:23112"
            initial={{ x: 0, y: 0 }}
            animate={
              reduceMotion
                ? { x: 0, y: 0 }
                : { x: [0, -0.312], y: [0, 14] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    x: {
                      duration: 1,
                      times: [0, 1],
                      ease: "linear",
                      repeat: Infinity,
                    },
                    y: {
                      duration: 1,
                      times: [0, 1],
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }
            }
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={assets.pinMarker}
            />
          </motion.div>
        </div>

        <div
          className="relative flex w-full shrink-0 flex-col items-center gap-[12px]"
          data-node-id="2209:21731"
        >
          <Typography
            as="p"
            variant="body-sm"
            weight="regular"
            color="secondary"
            className="w-[320px] text-center break-words"
          >
            Finding your current location...
          </Typography>
        </div>
      </div>
    </div>
  );
}
