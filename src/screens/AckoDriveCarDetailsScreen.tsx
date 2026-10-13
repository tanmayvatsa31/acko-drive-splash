import { useEffect, useRef, useState } from "react";
import {
  AskSidSection,
  ColourWallSection,
  CompetitionSection,
  DetailsNavBar,
  DetailsStatusBar,
  DetailsTabBar,
  DimensionsSection,
  ExpertOpinionSection,
  HeroSection,
  KeyFeaturesSection,
  KeySpecsSection,
  MileageSection,
  PricingSection,
  ServiceCostSection,
  StickyCta,
  VariantsSection,
} from "../components/details/CarDetailsSections";
import {
  DETAILS_TABS,
  detailsFrameClassName,
  type DetailsTabId,
} from "../constants/carDetails";

type AckoDriveCarDetailsScreenProps = {
  onBack?: () => void;
};

type FuelFilter = "Petrol" | "Diesel";
type GearFilter = "Manual" | "Automatic";

export function AckoDriveCarDetailsScreen({
  onBack,
}: AckoDriveCarDetailsScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const skipObserver = useRef(false);
  const [activeTab, setActiveTab] = useState<DetailsTabId>("expert");
  const [heroSlide, setHeroSlide] = useState(0);
  const [expertExpanded, setExpertExpanded] = useState(false);
  const [fuel, setFuel] = useState<FuelFilter | null>(null);
  const [transmission, setTransmission] = useState<GearFilter | null>(null);
  const [showAllVariants, setShowAllVariants] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [dimensionIndex, setDimensionIndex] = useState(0);
  const [serviceFuel, setServiceFuel] = useState<FuelFilter>("Petrol");
  const [shortlisted, setShortlisted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const chip = document.querySelector(`[data-details-tab="${activeTab}"]`);
    chip?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [activeTab]);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id.replace("section-", "") as DetailsTabId | undefined;
        if (id && DETAILS_TABS.some((tab) => tab.id === id)) {
          setActiveTab(id);
        }
      },
      { root, rootMargin: "-12% 0px -70% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    DETAILS_TABS.forEach((tab) => {
      const section = root.querySelector(`#section-${tab.id}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTab = (id: DetailsTabId) => {
    const root = scrollRef.current;
    const section = root?.querySelector(`#section-${id}`);
    if (!root || !(section instanceof HTMLElement)) return;
    skipObserver.current = true;
    setActiveTab(id);
    root.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    window.setTimeout(() => {
      skipObserver.current = false;
    }, 500);
  };

  return (
    <div className={detailsFrameClassName}>
      <div className="sticky top-0 z-20 shrink-0 bg-[#121212]">
        <DetailsStatusBar />
        <DetailsNavBar onBack={onBack} />
        <DetailsTabBar active={activeTab} onSelect={scrollToTab} />
      </div>

      <div ref={scrollRef} className="details-scroll min-h-0 flex-1 overflow-y-auto">
        <HeroSection slide={heroSlide} onSlide={setHeroSlide} />
        <ExpertOpinionSection
          expanded={expertExpanded}
          onToggleReadMore={() => setExpertExpanded((open) => !open)}
        />
        <AskSidSection
          onAsk={(query) => showToast(`Sid is on it — “${query}”`)}
        />
        <VariantsSection
          fuel={fuel}
          transmission={transmission}
          onFuel={(value) => setFuel((current) => (current === value ? null : value))}
          onTransmission={(value) =>
            setTransmission((current) => (current === value ? null : value))
          }
          onHelp={() => showToast("We'll help you buy this car.")}
          onCompare={() => showToast("Compare variants to pick the right one.")}
          showAll={showAllVariants}
          onShowAll={() => setShowAllVariants((open) => !open)}
        />
        <KeyFeaturesSection index={featureIndex} onIndex={setFeatureIndex} />
        <KeySpecsSection />
        <ColourWallSection />
        <PricingSection />
        <MileageSection />
        <DimensionsSection index={dimensionIndex} onIndex={setDimensionIndex} />
        <ServiceCostSection fuel={serviceFuel} onFuel={setServiceFuel} />
        <CompetitionSection />
      </div>

      <div className="sticky bottom-0 z-20 shrink-0">
        <StickyCta
          shortlisted={shortlisted}
          onHelp={() => showToast("We'll help you buy this car.")}
          onShortlist={() => {
            setShortlisted((value) => !value);
            showToast(shortlisted ? "Removed from shortlist" : "Added to shortlist");
          }}
        />
      </div>

      {toast ? (
        <div
          role="status"
          className="pointer-events-none absolute inset-x-[20px] bottom-[100px] z-30 rounded-[12px] bg-[#121212]/92 px-[16px] py-[12px] text-center text-[12px] font-medium leading-[18px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}
