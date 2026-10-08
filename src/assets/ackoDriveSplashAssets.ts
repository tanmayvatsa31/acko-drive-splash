/** Local copies of Figma-exported assets (ACKO Drive splash, node 15979:5909). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const ackoDriveSplashAssets = {
  gradientGlow: asset("/assets/acko-drive-splash/gradient-glow.png"),
  ackoDriveLogo: asset("/assets/acko-drive-splash/acko-drive-logo.svg"),
  headerLogoLockup: asset("/assets/acko-drive-splash/header-logo-lockup.png"),
  headerLogoMark: asset("/assets/acko-drive-splash/header-logo/mark.svg"),
  headerLogoWordmarkUpper:
    asset("/assets/acko-drive-splash/header-logo/wordmark-acko-line.svg"),
  headerLogoWordmarkLower:
    asset("/assets/acko-drive-splash/header-logo/wordmark-drive-line.svg"),
  ackoDriveLogoTransparent:
    asset("/assets/acko-drive-splash/acko-drive-logo-transparent.png"),
  statusBar: asset("/assets/acko-drive-splash/status-bar.svg"),
  photoGarage: asset("/assets/acko-drive-splash/photo-garage.jpg"),
  photoEstimateLayer: asset("/assets/acko-drive-splash/photo-estimate-layer.jpg"),
  photoSameDayDelivery:
    asset("/assets/acko-drive-splash/photo-same-day-delivery.png"),
  photoPickup: asset("/assets/acko-drive-splash/photo-pickup.jpg"),
  photoGenuineSpareParts:
    asset("/assets/acko-drive-splash/photo-genuine-spare-parts.png"),
  logoMark: asset("/assets/acko-drive-splash/logo-mark.png"),
  logoWordmarkTop: asset("/assets/acko-drive-splash/logo-wordmark-top.png"),
  logoWordmarkBottom: asset("/assets/acko-drive-splash/logo-wordmark-bottom.png"),
  closeLinePrimary: asset("/assets/acko-drive-splash/close-line-1.png"),
  closeLineSecondary: asset("/assets/acko-drive-splash/close-line-2.png"),
  arrowPartA: asset("/assets/acko-drive-splash/arrow-part-a.png"),
  arrowPartB: asset("/assets/acko-drive-splash/arrow-part-b.png"),
  statusBattery: asset("/assets/acko-drive-splash/status-battery.png"),
  statusWifi1: asset("/assets/acko-drive-splash/status-wifi-1.png"),
  statusWifi2: asset("/assets/acko-drive-splash/status-wifi-2.png"),
  statusWifi3: asset("/assets/acko-drive-splash/status-wifi-3.png"),
  statusCellular: asset("/assets/acko-drive-splash/status-cellular.png"),
  introSplashBackground: asset("/assets/acko-drive-splash/intro-splash-background.png"),
  introSplashLogoLockup: asset("/assets/acko-drive-splash/intro-splash-logo-lockup.png"),
  introSplashRating: asset("/assets/acko-drive-splash/intro-splash-rating.png"),
  introVariant61Background:
    asset("/assets/acko-drive-splash/intro-variant-61/background.png"),
  introVariant61LogoLockup:
    asset("/assets/acko-drive-splash/intro-variant-61/logo-lockup.png"),
  introVariant61LogoMark:
    asset("/assets/acko-drive-splash/intro-variant-61/logo-mark.png"),
  introVariant61LogoWordmarkAcko:
    asset("/assets/acko-drive-splash/intro-variant-61/logo-wordmark-acko.png"),
  introVariant61LogoWordmarkDrive:
    asset("/assets/acko-drive-splash/intro-variant-61/logo-wordmark-drive.png"),
  introVariant61LogoDivider:
    asset("/assets/acko-drive-splash/intro-variant-61/logo-divider.svg"),
  introVariant61CityDot:
    asset("/assets/acko-drive-splash/intro-variant-61/city-dot.svg"),
  mainSplashBackground: asset("/assets/acko-drive-splash/main-splash-background.png"),
  splashUspArrow: asset("/assets/acko-drive-splash/splash-usp-arrow.svg"),
  variant68GlowEllipse: asset("/assets/acko-drive-splash/variant-68/glow-ellipse.svg"),
  variant68HeaderLogoLockup:
    asset("/assets/acko-drive-splash/variant-68/header-logo-lockup.png"),
  variant68Close: asset("/assets/acko-drive-splash/variant-68/close.png"),
  variant68PhotoPickupBase:
    asset("/assets/acko-drive-splash/variant-68/photo-pickup-base.png"),
  variant68PhotoPickupOverlay:
    asset("/assets/acko-drive-splash/variant-68/photo-pickup-overlay.png"),
  variant68PhotoSpareParts:
    asset("/assets/acko-drive-splash/variant-68/photo-spare-parts.png"),
  variant68PhotoSameDay: asset("/assets/acko-drive-splash/variant-68/photo-same-day.png"),
  variant68ArrowPartA: asset("/assets/acko-drive-splash/variant-68/arrow-part-a.svg"),
  variant68ArrowPartB: asset("/assets/acko-drive-splash/variant-68/arrow-part-b.svg"),
} as const;
