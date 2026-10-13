import { useEffect, useRef, useState } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { carDetailsAssets as a } from "../../assets/carDetailsAssets";
import {
  COLOUR_TILES,
  DETAILS_TABS,
  EXPERT_BULLETS,
  EXPERT_BULLETS_MORE,
  EXPERT_RATINGS,
  EXPERT_VIDEOS,
  FEATURE_SLIDES,
  SERVICE_ROWS,
  VARIANTS,
  type DetailsTabId,
  type VariantCard,
} from "../../constants/carDetails";

type NamedAsset = Exclude<keyof typeof a, "swatches">;

function namedAsset(key: NamedAsset): string {
  return a[key];
}

function Asset({
  src,
  alt = "",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      alt={alt}
      className={`pointer-events-none block max-w-none select-none ${className}`}
      draggable={false}
      src={src}
    />
  );
}

export function DetailsStatusBar() {
  return (
    <div className="relative h-[40px] w-full shrink-0 bg-[#121212]">
      <p className="absolute left-[15px] top-[11px] w-[52px] text-center text-[13px] font-bold leading-none text-white">
        23:10
      </p>
      <div className="absolute right-[14px] top-[14px] flex items-center gap-[4px]">
        <span className="relative h-[10px] w-[16px] overflow-clip">
          <Asset src={a.statusCellular} />
        </span>
        <span className="relative h-[11px] w-[15px] overflow-clip">
          <Asset src={a.statusWifi1} className="absolute left-0 top-0" />
          <Asset src={a.statusWifi2} className="absolute left-0 top-0" />
          <Asset src={a.statusWifi3} className="absolute left-0 top-0" />
        </span>
        <span className="relative h-[11px] w-[23px] overflow-clip">
          <Asset src={a.statusBattery} />
        </span>
      </div>
    </div>
  );
}

export function DetailsNavBar({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex h-[56px] w-full items-center justify-between bg-[#121212] pl-[14px] pr-[20px]">
      <button
        type="button"
        aria-label="Go back"
        className="flex size-[24px] items-center justify-center overflow-clip"
        onClick={onBack}
      >
        <Asset src={a.iconBack} />
      </button>
      <button
        type="button"
        className="flex items-center gap-[4px] rounded-[8px] border border-[#e8e8e8] px-[8px] py-[4px]"
      >
        <span className="flex size-[20px] items-center justify-center overflow-clip">
          <Asset src={a.iconLocation} />
        </span>
        <Typography variant="body-xs" color="invert">
          Bengaluru
        </Typography>
      </button>
    </div>
  );
}

export function DetailsTabBar({
  active,
  onSelect,
}: {
  active: DetailsTabId;
  onSelect: (id: DetailsTabId) => void;
}) {
  return (
    <div className="details-hscroll flex items-center gap-[8px] bg-[#121212] px-[20px] py-[8px]">
      {DETAILS_TABS.map((tab) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            data-details-tab={tab.id}
            className={`h-[32px] shrink-0 rounded-[8px] border border-solid px-[8px] ${
              selected ? "border-white bg-white/10" : "border-[#595959] bg-transparent"
            }`}
          >
            <Typography variant="label-xs" weight="medium" color="invert">
              {tab.label}
            </Typography>
          </button>
        );
      })}
    </div>
  );
}

export function StickyCta({
  shortlisted,
  onHelp,
  onShortlist,
}: {
  shortlisted: boolean;
  onHelp: () => void;
  onShortlist: () => void;
}) {
  return (
    <div className="flex w-full gap-[12px] bg-white px-[20px] pb-[20px] pt-[12px]">
      <Button
        variant="outline"
        size="lg"
        className="h-[48px] flex-1 rounded-[12px]"
        onClick={onHelp}
      >
        Help me buy
      </Button>
      <Button
        variant="dark"
        size="lg"
        className="h-[48px] flex-1 rounded-[12px] gap-[8px]"
        aria-pressed={shortlisted}
        onClick={onShortlist}
      >
        <span className="flex size-[24px] items-center justify-center overflow-clip">
          <Asset src={a.iconShortlist} />
        </span>
        {shortlisted ? "Shortlisted" : "Shortlist"}
      </Button>
    </div>
  );
}

function SectionHeading({ children, invert = false }: { children: string; invert?: boolean }) {
  return (
    <Typography
      variant="heading-xs"
      weight="semibold"
      color={invert ? "invert" : "primary"}
    >
      {children}
    </Typography>
  );
}

function LinkRow({
  label,
  onClick,
  invert = false,
}: {
  label: string;
  onClick?: () => void;
  invert?: boolean;
}) {
  return (
    <button type="button" className="flex items-center gap-[4px]" onClick={onClick}>
      <Typography
        variant="label-xs"
        weight="medium"
        color={invert ? "invert" : "hyperlink"}
      >
        {label}
      </Typography>
      <span className="flex size-[16px] items-center justify-center overflow-clip">
        <Asset src={invert ? a.iconChevronRightWhite : a.iconChevronRight16} />
      </span>
    </button>
  );
}

function HeroDots({ count, index }: { count: number; index: number }) {
  return (
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-[4px] rounded-[16px] bg-white ${i === index ? "w-[32px]" : "w-[8px] opacity-50"}`}
        />
      ))}
    </div>
  );
}

export function HeroSection({
  slide,
  onSlide,
}: {
  slide: number;
  onSlide: (next: number) => void;
}) {
  const slides = [a.heroSeltos, a.colorPewter, a.colorIntenseRed, a.colorImperialBlue];
  return (
    <section className="relative bg-[#121212] pb-[16px]">
      <div className="relative h-[328px] overflow-hidden bg-[#3b3b3b]">
        <div className="absolute inset-x-0 top-0 z-[1] h-[88px] bg-gradient-to-b from-[#121212] via-[rgba(18,18,18,0.7)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-[88px] bg-gradient-to-b from-transparent via-[rgba(18,18,18,0.7)] to-[#121212]" />
        <Typography
          variant="heading-md"
          weight="semibold"
          color="invert"
          className="absolute left-0 top-[8px] z-[2] w-full text-center"
        >
          Kia Seltos
        </Typography>
        <button
          type="button"
          className="absolute inset-0"
          aria-label="Next car image"
          onClick={() => onSlide((slide + 1) % slides.length)}
        >
          <Asset
            src={slides[slide]}
            alt="Kia Seltos"
            className="absolute left-[-77px] top-[-48px] h-[429px] w-[436px] object-cover"
          />
        </button>
        <div className="absolute bottom-[8px] left-1/2 z-[2] -translate-x-1/2">
          <HeroDots count={4} index={slide} />
        </div>
      </div>
      <div className="mx-auto mt-[16px] w-[320px] rounded-[12px] border border-[#2e2e2e] bg-gradient-to-b from-[#171717] to-[#1a2111] px-[16px] py-[20px] text-center">
        <Typography variant="heading-sm" weight="semibold" color="invert">
          ₹13.7 – ₹24.8 lakh on-road
        </Typography>
        <p className="mt-[8px] font-sans text-[14px] leading-[20px]">
          <span className="font-medium text-[#0fa457]">Save up to ₹82,000</span>
          <span className="text-[#a6a6a6]"> with ACKO Drive</span>
        </p>
        <Typography variant="body-sm" color="invert" className="mt-[12px]">
          EMI from ₹25,000
        </Typography>
      </div>
    </section>
  );
}

function ExclusiveBadge() {
  return (
    <span className="absolute right-[8px] top-[8px] z-[2] flex items-center gap-[4px] rounded-[40px] bg-white/10 px-[8px] py-[2px] backdrop-blur-[2px]">
      <span className="flex size-[16px] items-center justify-center overflow-clip">
        <Asset src={a.iconExclusiveBadge} />
      </span>
      <Typography variant="label-xxs" weight="medium" color="invert">
        Exclusive
      </Typography>
    </span>
  );
}

export function ExpertOpinionSection({
  expanded,
  onToggleReadMore,
}: {
  expanded: boolean;
  onToggleReadMore: () => void;
}) {
  const bullets = expanded ? [...EXPERT_BULLETS, ...EXPERT_BULLETS_MORE] : EXPERT_BULLETS;
  return (
    <section id="section-expert" className="bg-[#121212] pb-0 pt-[24px]">
      <div className="flex items-center justify-center gap-[12px] px-[20px]">
        <span className="h-px flex-1 bg-[#4b4b4b]" />
        <Typography variant="label-sm" weight="medium" color="invert" className="shrink-0 text-center">
          Hear from the ACKO Drive experts
        </Typography>
        <span className="h-px flex-1 bg-[#4b4b4b]" />
      </div>

      <div className="details-hscroll mt-[24px] flex gap-[12px] px-[20px]">
        {EXPERT_VIDEOS.map((video) => (
          <button
            key={video.title}
            type="button"
            className="relative h-[160px] w-[120px] shrink-0 overflow-hidden rounded-[12px] border border-white/20"
          >
            <Asset
              src={namedAsset(video.image)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/30" />
            <span className="absolute inset-x-0 top-0 h-[48px] bg-gradient-to-b from-[#121212] to-transparent" />
            <span className="absolute inset-x-0 bottom-0 h-[64px] bg-gradient-to-t from-black to-transparent" />
            {video.exclusive ? <ExclusiveBadge /> : null}
            <span className="absolute left-1/2 top-1/2 z-[1] size-[32px] -translate-x-1/2 -translate-y-1/2 overflow-clip">
              <Asset src={a.iconPlayExpert} />
            </span>
            <span className="absolute bottom-[8px] left-[8px] right-[8px] z-[1] text-left">
              <Typography variant="label-xs" weight="medium" color="invert">
                {video.title}
              </Typography>
            </span>
          </button>
        ))}
        <button
          type="button"
          className="relative h-[160px] w-[120px] shrink-0 overflow-hidden rounded-[12px] bg-[#e1fce4]"
        >
          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
          <span className="absolute left-1/2 top-[20px] flex -translate-x-1/2 gap-[2px]">
            <Asset src={a.iconAckoMark} className="h-[14px]" />
          </span>
          <span className="absolute left-1/2 top-1/2 z-[1] size-[32px] -translate-x-1/2 -translate-y-1/2 overflow-clip">
            <Asset src={a.iconPlayExpert} />
          </span>
          <span className="absolute bottom-[8px] left-[8px] right-[8px] z-[1] text-left">
            <Typography variant="label-xs" weight="medium" color="invert">
              How can ACKO Drive help you procure the car?
            </Typography>
          </span>
        </button>
      </div>

      <div className="relative mx-auto mt-[48px] w-[320px]">
        <div className="overflow-hidden rounded-[12px] bg-[#1e1e1e] pt-[18px]">
          <div className="absolute left-1/2 top-0 z-[2] flex -translate-x-1/2 -translate-y-1/2 items-center gap-[8px] rounded-[32px] border border-[#292929] bg-gradient-to-br from-[#212121] to-[#2a2a2a] px-[16px] py-[4px]">
            <span className="flex size-[20px] items-center justify-center overflow-clip">
              <Asset src={a.iconStarRating} />
            </span>
            <Typography variant="heading-sm" weight="semibold" color="invert">
              8.0
            </Typography>
          </div>
          <div className="bg-[#292929] px-[12px] pb-[16px] pt-[30px] shadow-[0_4px_8px_-2px_rgba(54,53,76,0.06)]">
            <Typography variant="body-xs" color="invert">
              “Forget the rest - Kia Seltos is the best-balanced SUV in its class, with killer looks, a tech-loaded cabin, and solid performance.”
            </Typography>
          </div>
          <div className="details-hscroll flex px-0 pt-[16px]">
            {EXPERT_RATINGS.map((item) => (
              <div key={item.score + item.label} className="flex w-[92px] shrink-0 flex-col items-center gap-[8px]">
                <div className="relative size-[56px]">
                  <span className="absolute left-[4px] top-[4px] size-[48px] overflow-clip">
                    <Asset src={a.ringTrack} />
                    <span className="absolute inset-0 overflow-clip">
                      <Asset src={namedAsset(item.ring)} />
                    </span>
                  </span>
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="flex size-[20px] items-center justify-center overflow-clip opacity-60">
                      <Asset src={namedAsset(item.icon)} />
                    </span>
                  </span>
                </div>
                <div className="w-full text-center">
                  <Typography variant="label-sm" weight="semibold" color="invert">
                    {item.score}
                  </Typography>
                  <Typography variant="body-xs" color="disabled" className="whitespace-pre-line">
                    {item.label}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-[24px] w-[296px] border-t border-[#2e2e2e] pt-[24px]">
            <ul className="list-disc pl-[21px] text-[14px] leading-[20px] text-[#a6a6a6]">
              {bullets.map((item) => (
                <li key={item} className="mb-[4px] last:mb-0">
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-[8px] ml-[20px] flex items-center gap-[4px]"
              onClick={onToggleReadMore}
            >
              <Typography variant="label-xs" weight="medium" color="invert">
                {expanded ? "Read less" : "Read more"}
              </Typography>
              <span className={`flex size-[16px] items-center justify-center overflow-clip ${expanded ? "rotate-180" : ""}`}>
                <Asset src={a.iconChevronDown} />
              </span>
            </button>
          </div>
          <div className="mt-[24px] border-t border-[#2e2e2e] px-[16px] py-[12px]">
            <Typography variant="body-xs" color="tertiary">
              Ratings as of 24 Jan 2025
            </Typography>
            <LinkRow label="Find out how our ratings are calculated" invert />
          </div>
        </div>
      </div>

      <RivalsCard
        dark
        items={[
          { name: "Nexon", value: "8.0", image: a.rivalNexon },
          { name: "Creta", value: "8.8", image: a.rivalCreta },
          { name: "3XO", value: "8.2", image: a.rival3xo },
        ]}
      />
    </section>
  );
}

function RivalsCard({
  dark,
  items,
}: {
  dark?: boolean;
  items: { name: string; value: string; image: string }[];
}) {
  return (
    <div
      className={`relative mx-auto mt-[12px] h-[108px] w-[320px] overflow-hidden rounded-[12px] ${
        dark ? "bg-[#1e1e1e]" : "border border-[#e5e8ec] bg-[#f6f7fb]"
      }`}
    >
      <div
        className="absolute left-0 top-0 flex h-[18px] items-center rounded-br-[12px] px-[16px]"
        style={{
          backgroundImage: dark
            ? "linear-gradient(270deg, #383838 0%, rgba(56,56,56,0) 50%, #383838 100%)"
            : "linear-gradient(270deg, #c3cddd 0%, #f8fafc 50%, #c3cddd 100%)",
        }}
      >
        <p
          className={`text-[10px] font-semibold leading-[12px] tracking-[0.5px] ${
            dark ? "text-[#bbb]" : "text-[#505e76]"
          }`}
        >
          RIVALS
        </p>
      </div>
      <div className="absolute left-[8px] top-[26px] flex items-center gap-[10px]">
        {items.map((item, i) => (
          <div key={item.name} className="flex items-center gap-[10px]">
            {i > 0 ? <span className={`h-[48px] w-px ${dark ? "bg-[#3a3a3a]" : "bg-[#d5d8de]"}`} /> : null}
            <div className="flex w-[88px] flex-col items-center gap-[4px]">
              <div className="relative h-[32px] w-[56px] overflow-hidden">
                <Asset src={item.image} className="h-full w-full object-contain" alt={item.name} />
              </div>
              <div className="w-full text-center">
                <p className={`text-[11px] leading-[16px] ${dark ? "text-[#bbb]" : "text-[#4b4b4b]"}`}>
                  {item.name}
                </p>
                <p className={`text-[12px] font-medium leading-[16px] ${dark ? "text-white" : "text-[#121212]"}`}>
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ASK_SID_CAR = "Kia Seltos";

const ASK_SID_PROMPTS = [
  "about car variants or model...",
  "about mileage and tank capacity...",
  `or anything about ${ASK_SID_CAR}...`,
];

function useAskSidPrompt() {
  const [text, setText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(ASK_SID_PROMPTS[0]);
      return;
    }

    const full = ASK_SID_PROMPTS[promptIndex];
    let delay = deleting ? 26 : 42;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text.length === 0) delay = 280;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) {
          setText(full.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setDeleting(false);
        setPromptIndex((index) => (index + 1) % ASK_SID_PROMPTS.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, promptIndex]);

  return text;
}

export function AskSidSection({ onAsk }: { onAsk: (query: string) => void }) {
  const prompt = useAskSidPrompt();
  const phraseRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const hasText = value.trim().length > 0;

  useEffect(() => {
    const phrase = phraseRef.current;
    if (phrase) phrase.scrollLeft = phrase.scrollWidth;
  }, [prompt]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    input.style.height = "0px";
    input.style.height = `${input.scrollHeight}px`;
  }, [value, focused]);

  const submit = () => {
    const query = value.trim();
    if (!query) return;
    onAsk(query);
    setValue("");
  };

  return (
    <section className="ask-sid-section">
      <div className="ask-sid-section__content">
        <Typography variant="heading-xs" weight="semibold" color="invert" className="w-full text-left">
          Looking for more details about{" "}
          <span className="whitespace-nowrap">{ASK_SID_CAR}?</span>
        </Typography>
        <div className="ask-sid-field-wrap">
          <span className="ask-sid-glow" aria-hidden />
          <form
            className={`ask-sid-field${focused || hasText ? " ask-sid-field--open" : ""}${hasText ? " ask-sid-field--has-text" : ""}`}
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest(".ask-sid-send")) return;
              inputRef.current?.focus();
            }}
          >
            <span className="ask-sid-field__spin" aria-hidden />
            <span className="ask-sid-field__face">
              <span className="ask-sid-field__inner-glow" aria-hidden />
              <span className="ask-sid-field__composer">
                {!focused && !hasText ? (
                  <span className="ask-sid-chip">
                    <span className="ask-sid-logo">
                      <span className="ask-sid-logo__glow" aria-hidden>
                        <Asset src={a.askSidChipGlow} alt="" />
                      </span>
                      <Asset src={a.askSidLogo} alt="" />
                      <span
                        className="ask-sid-logo__shine"
                        aria-hidden
                        style={{
                          maskImage: `url(${a.askSidLogo})`,
                          WebkitMaskImage: `url(${a.askSidLogo})`,
                        }}
                      />
                    </span>
                    <span className="text-[12px] font-bold leading-[18px] text-white">Ask Sid</span>
                  </span>
                ) : null}
                <span className="ask-sid-composer-text">
                  <textarea
                    ref={inputRef}
                    className="ask-sid-input"
                    rows={1}
                    value={value}
                    enterKeyHint="send"
                    inputMode="text"
                    aria-label={`Ask Sid about ${ASK_SID_CAR}`}
                    onChange={(event) => setValue(event.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        submit();
                      }
                    }}
                  />
                  {!hasText && !focused ? (
                    <span ref={phraseRef} className="ask-sid-phrase" aria-hidden>
                      {prompt}
                      <span className="ask-sid-caret" />
                    </span>
                  ) : null}
                </span>
                {hasText ? (
                  <button type="submit" className="ask-sid-send" aria-label="Send to Sid">
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                      <path
                        d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : null}
              </span>
            </span>
          </form>
        </div>
      </div>
      <Asset src={a.askSidGrid} className="ask-sid-section__grid" />
    </section>
  );
}

function VariantCardView({
  variant,
  onHelp,
  onSpecs,
}: {
  variant: VariantCard;
  onHelp: () => void;
  onSpecs: () => void;
}) {
  const badgeClass =
    variant.badgeTone === "maroon"
      ? "bg-[#f8e6f1] text-[#c2255c]"
      : variant.badgeTone === "red"
        ? "bg-[#fbeaea] text-[#95221d]"
        : "bg-[#e7e7e7] text-[#121212]";
  return (
    <div className="relative w-full overflow-hidden rounded-[12px] border border-[#f1ecfa] bg-gradient-to-b from-[#f6f2fd] to-white p-[16px]">
      <div className={`absolute right-[-1px] top-[-1px] rounded-bl-[12px] px-[12px] py-[4px] ${badgeClass}`}>
        <Typography variant="label-xs" weight="medium" className="!text-inherit">
          {variant.badge}
        </Typography>
      </div>
      <Typography variant="heading-xxs" weight="semibold">
        {variant.name}
      </Typography>
      <Typography variant="body-xs" className="mt-[4px]">
        {variant.specs}
      </Typography>
      <div className="mt-[8px]">
        <LinkRow label="View specs" onClick={onSpecs} />
      </div>
      <Typography variant="body-xs" color="tertiary" className="mt-[12px]">
        ACKO Drive price in Bengaluru
      </Typography>
      <div className="mt-[4px] flex items-center gap-[8px]">
        <Typography variant="heading-xxs" weight="semibold">
          {variant.price}
        </Typography>
        <span className="details-strike text-[14px] leading-[20px] text-[#757575]">{variant.mrp}</span>
        <Typography variant="label-xs" weight="medium" color="success">
          {variant.save}
        </Typography>
      </div>
      <Typography variant="body-xs" className="mt-[8px]">
        {variant.emi}
      </Typography>
      <div className="mt-[12px] flex items-center gap-[4px]">
        <Typography variant="body-xs" color={variant.express ? "purple" : "primary"}>
          {variant.delivery}
        </Typography>
        <span className="flex size-[16px] items-center justify-center overflow-clip">
          <Asset src={variant.express ? a.iconLightning : a.iconClock} />
        </span>
      </div>
      <Button
        variant="outline"
        size="sm"
        fullWidth
        className="mt-[16px] h-[40px] rounded-[12px]"
        onClick={onHelp}
      >
        Help me buy
      </Button>
    </div>
  );
}

export function VariantsSection({
  fuel,
  transmission,
  onFuel,
  onTransmission,
  onHelp,
  onCompare,
  showAll,
  onShowAll,
}: {
  fuel: "Petrol" | "Diesel" | null;
  transmission: "Manual" | "Automatic" | null;
  onFuel: (value: "Petrol" | "Diesel") => void;
  onTransmission: (value: "Manual" | "Automatic") => void;
  onHelp: () => void;
  onCompare: () => void;
  showAll: boolean;
  onShowAll: () => void;
}) {
  const visible = VARIANTS.filter((item) => {
    if (fuel && item.fuel !== fuel) return false;
    if (transmission && item.transmission !== transmission) return false;
    return true;
  });
  const shown = showAll ? visible : visible.slice(0, 3);

  const chip = (label: string, selected: boolean, onClick: () => void) => (
    <button
      type="button"
      onClick={onClick}
      className={`h-[28px] rounded-[32px] border px-[12px] ${
        selected ? "border-[#121212] bg-[#121212]/5" : "border-[#e8e8e8] bg-white"
      }`}
    >
      <Typography variant="label-xs" weight="medium">
        {label}
      </Typography>
    </button>
  );

  return (
    <section id="section-variants" className="bg-white px-[20px] py-[32px]">
      <SectionHeading>Variants and offers</SectionHeading>
      <button
        type="button"
        onClick={onCompare}
        className="mt-[24px] flex w-full items-center gap-[12px] rounded-[12px] bg-[#f5f5f5] p-[12px] text-left"
      >
        <span className="flex size-[44px] items-center justify-center overflow-hidden rounded-[8px] bg-white">
          <span className="flex size-[24px] items-center justify-center overflow-clip">
            <Asset src={a.iconCompareCars} />
          </span>
        </span>
        <span>
          <Typography variant="label-sm" weight="medium">
            Not sure which variant to pick?
          </Typography>
          <span className="mt-[4px] flex items-center gap-[4px]">
            <Typography variant="label-xs" weight="medium" color="hyperlink">
              Compare variants
            </Typography>
            <span className="flex size-[16px] items-center justify-center overflow-clip">
              <Asset src={a.iconChevronRight} />
            </span>
          </span>
        </span>
      </button>
      <div className="mt-[24px] flex items-center gap-[12px]">
        <div className="flex gap-[8px]">
          {chip("Petrol", fuel === "Petrol", () => onFuel("Petrol"))}
          {chip("Diesel", fuel === "Diesel", () => onFuel("Diesel"))}
        </div>
        <span className="h-[24px] w-px bg-[#e8e8e8]" />
        <div className="flex gap-[8px]">
          {chip("Manual", transmission === "Manual", () => onTransmission("Manual"))}
          {chip("Automatic", transmission === "Automatic", () => onTransmission("Automatic"))}
        </div>
      </div>
      <div className="mt-[20px] flex flex-col gap-[20px]">
        {shown.length === 0 ? (
          <Typography variant="body-sm" color="tertiary">
            No variants match these filters
          </Typography>
        ) : (
          shown.map((variant) => (
            <VariantCardView
              key={variant.name}
              variant={variant}
              onHelp={onHelp}
              onSpecs={onHelp}
            />
          ))
        )}
      </div>
      {visible.length > 3 ? (
      <button type="button" className="mt-[20px] flex items-center gap-[4px]" onClick={onShowAll}>
        <Typography variant="label-sm" weight="medium" color="hyperlink">
          {showAll ? "Show fewer variants" : "View 24 more variants"}
        </Typography>
        <span className="flex size-[20px] items-center justify-center overflow-clip">
          <Asset src={a.iconChevronRight20} />
        </span>
      </button>
      ) : null}
    </section>
  );
}

export function KeyFeaturesSection({
  index,
  onIndex,
}: {
  index: number;
  onIndex: (next: number) => void;
}) {
  const slide = FEATURE_SLIDES[index];
  return (
    <section id="section-features" className="bg-[#f5f5f5] py-[32px]">
      <div className="px-[20px]">
        <SectionHeading>Key features</SectionHeading>
      </div>
      <div
        className="details-hscroll mt-[16px] flex gap-[12px] pl-[20px]"
        onScroll={(event) => {
          const next = Math.round(event.currentTarget.scrollLeft / 332);
          onIndex(Math.min(FEATURE_SLIDES.length - 1, Math.max(0, next)));
        }}
      >
        {FEATURE_SLIDES.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => onIndex(i)}
            className="relative h-[240px] w-[320px] shrink-0 overflow-hidden rounded-[12px] border border-[#e8e8e8] bg-white"
          >
            <Asset src={namedAsset(item.image)} alt={item.title} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="mt-[16px] flex gap-[4px] px-[20px]">
        {FEATURE_SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-[4px] rounded-[16px] bg-[#4b4b4b] ${i === index ? "w-[32px]" : "w-[8px] opacity-30"}`}
          />
        ))}
      </div>
      <div className="mt-[20px] px-[20px]">
        <Typography variant="label-md" weight="medium">
          {slide.title}
        </Typography>
        <Typography variant="body-sm" color="tertiary" className="mt-[8px]">
          {slide.body}
        </Typography>
      </div>
    </section>
  );
}

export function KeySpecsSection() {
  const tile = "rounded-[12px] bg-[#1e1e1e] p-[12px]";
  return (
    <section id="section-specs" className="bg-[#121212] px-[20px] py-[32px]">
      <SectionHeading invert>Key specifications</SectionHeading>
      <div className="mt-[24px] flex flex-wrap gap-[12px]">
        <div className={`${tile} w-[154px]`}>
          <Typography variant="body-xs" color="disabled">Fuel type</Typography>
          <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
            Petrol • Diesel
          </Typography>
        </div>
        <div className={`${tile} w-[154px]`}>
          <Typography variant="body-xs" color="disabled">ARAI Mileage</Typography>
          <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
            16.9 – 21.7 kmpl
          </Typography>
        </div>
        <div className={`${tile} w-[320px]`}>
          <Typography variant="body-xs" color="disabled">Transmission</Typography>
          <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
            Manual • Automatic
          </Typography>
        </div>
        <div className={`${tile} w-[154px]`}>
          <Typography variant="body-xs" color="disabled">Engine capacity</Typography>
          <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
            1499 cc
          </Typography>
        </div>
        <div className={`${tile} w-[154px]`}>
          <Typography variant="body-xs" color="disabled">Seat capacity</Typography>
          <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
            5/7 seater
          </Typography>
        </div>
        <div className={`${tile} flex w-[320px] items-center justify-between`}>
          <div>
            <Typography variant="body-xs" color="disabled">Available colours</Typography>
            <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
              12 colours
            </Typography>
          </div>
          <div className="flex">
            {a.swatches.map((src, i) => (
              <span
                key={src}
                className="relative size-[24px] overflow-hidden rounded-full border border-white"
                style={{ marginLeft: i === 0 ? 0 : -8 }}
              >
                <Asset src={src} className="h-full w-full object-cover" />
              </span>
            ))}
          </div>
        </div>
        <div className={`${tile} relative h-[224px] w-[320px] overflow-hidden`}>
          <Typography variant="body-xs" color="disabled">NCAP rating</Typography>
          <div className="mt-[8px] flex gap-[24px]">
            {[
              { label: "Adult", icon: a.iconGncapAdult },
              { label: "Child", icon: a.iconGncapChild },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-[8px]">
                <span className="flex size-[32px] items-center justify-center overflow-clip">
                  <Asset src={item.icon} />
                </span>
                <div>
                  <Typography variant="label-xs" weight="medium" color="invert">
                    {item.label}
                  </Typography>
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <span key={star} className="mr-[-2px] flex size-[16px] items-center justify-center overflow-clip last:mr-0">
                        <Asset src={star === 4 ? a.iconStarOff : a.iconStarOn} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute bottom-[12px] left-[12px] h-[120px] w-[296px] overflow-hidden rounded-[8px] border border-white/30"
          >
            <Asset src={a.ncapVideo} className="h-full w-full object-cover" alt="" />
            <span className="absolute inset-0 bg-black/60" />
            <ExclusiveBadge />
            <span className="absolute left-1/2 top-[44px] size-[32px] -translate-x-1/2 overflow-clip">
              <Asset src={a.iconPlay} />
            </span>
            <span className="absolute bottom-[8px] left-[12px] right-[12px] text-center">
              <Typography variant="label-xs" weight="medium" color="invert">
                Exclusive video of NCAP testing of Seltos
              </Typography>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function ColourWallSection() {
  const tiles = [...COLOUR_TILES, ...COLOUR_TILES];
  const rows = [tiles.slice(0, 4), tiles.slice(4, 8), tiles.slice(2, 6)];
  return (
    <section id="section-colours" className="bg-[#e1e1e1] py-[32px]">
      <div className="px-[20px]">
        <SectionHeading>Kia Seltos comes in 12 colours</SectionHeading>
      </div>
      <div className="details-hscroll mt-[24px] flex flex-col gap-[12px] px-[20px]">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[12px]">
            {row.map((tile, i) => (
              <div
                key={`${tile.name}-${rowIndex}-${i}`}
                className="relative h-[140px] w-[152px] shrink-0 overflow-hidden rounded-[12px] border border-white"
                style={{
                  backgroundImage:
                    "linear-gradient(139deg, rgba(255,255,255,0.5) 4%, rgba(236,240,244,0.3) 96%)",
                }}
              >
                <Asset
                  src={namedAsset(tile.image)}
                  alt={tile.name}
                  className="absolute left-0 top-[15px] h-[86px] w-full object-contain"
                />
                <p className="absolute bottom-[17px] left-0 w-full text-center text-[12px] font-medium leading-[18px] text-[#121212]">
                  {tile.name}
                </p>
                {tile.gallery ? (
                  <span className="absolute right-[3px] top-[3px] flex size-[24px] items-center justify-center overflow-hidden rounded-[8px] bg-white">
                    <span className="flex size-[16px] items-center justify-center overflow-clip">
                      <Asset src={a.iconGallery} />
                    </span>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="section-price" className="bg-white px-[20px] py-[32px]">
      <SectionHeading>Kia Seltos pricing</SectionHeading>
      <div
        className="mt-[24px] h-[240px] w-[320px] overflow-hidden rounded-[12px] p-[16px] pt-[24px]"
        style={{
          backgroundImage: "linear-gradient(147deg, #f1fafb 7%, #d2dbf5 97%)",
        }}
      >
        <Typography variant="body-sm" color="secondary">
          On-road price in Bangalore
        </Typography>
        <Typography variant="heading-sm" weight="semibold" color="navy" className="mt-[4px]">
          ₹ 13.5 – 25 lakh
        </Typography>
        <div className="mt-[24px] grid grid-cols-2 gap-x-[20px] gap-y-[24px]">
          {[
            ["Petrol • Manual", "₹10 – 18 lakh"],
            ["Diesel • Manual", "₹12 – 18 lakh"],
            ["Automatic • Petrol", "₹15 – 20 lakh"],
            ["Automatic • Diesel", "₹17 – 20 lakh"],
          ].map(([label, value]) => (
            <div key={label}>
              <Typography variant="body-xs" color="secondary">
                {label}
              </Typography>
              <Typography variant="label-md" weight="medium" className="mt-[4px]">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <RivalsCard
        items={[
          { name: "Nexon", value: "₹10 – 20 lakh", image: a.rivalNexon },
          { name: "Creta", value: "₹10 – 20 lakh", image: a.rivalCreta },
          { name: "3XO", value: "₹10 – 20 lakh", image: a.rival3xo },
        ]}
      />
    </section>
  );
}

export function MileageSection() {
  return (
    <section id="section-mileage" className="bg-[#121212] px-[20px] py-[32px]">
      <SectionHeading invert>Mileage details</SectionHeading>
      <div className="mt-[24px] h-[236px] w-[320px] rounded-[12px] bg-[#1e1e1e] px-[16px] py-[24px]">
        <Typography variant="body-sm" color="disabled">
          ARAI Mileage
        </Typography>
        <Typography variant="heading-sm" weight="semibold" color="invert" className="mt-[8px]">
          17 – 20.7 kmpl
        </Typography>
        <div className="mt-[24px] grid grid-cols-2 gap-x-[20px] gap-y-[24px]">
          {[
            ["Petrol • Manual", "17.9 kmpl"],
            ["Petrol • Automatic", "17 kmpl"],
            ["Diesel • Manual", "20 kmpl"],
            ["Diesel • Automatic", "20.7 kmpl"],
          ].map(([label, value]) => (
            <div key={label}>
              <Typography variant="body-xs" color="disabled">
                {label}
              </Typography>
              <Typography variant="label-sm" weight="medium" color="invert" className="mt-[4px]">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <RivalsCard
        dark
        items={[
          { name: "Nexon", value: "17 – 20.7 kmpl", image: a.rivalNexon },
          { name: "Creta", value: "17 – 20.7 kmpl", image: a.rivalCreta },
          { name: "3XO", value: "17 – 20.7 kmpl", image: a.rival3xo },
        ]}
      />
    </section>
  );
}

export function DimensionsSection({
  index,
  onIndex,
}: {
  index: number;
  onIndex: (next: number) => void;
}) {
  return (
    <section id="section-dimensions" className="bg-white py-[32px]">
      <div className="px-[20px]">
        <SectionHeading>Dimension of Kia Seltos</SectionHeading>
      </div>
      <div
        className="details-hscroll mt-[24px] flex gap-[12px] px-[20px]"
        onScroll={(event) => {
          const next = Math.round(event.currentTarget.scrollLeft / 292);
          onIndex(Math.min(1, Math.max(0, next)));
        }}
      >
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => onIndex(i)}
            className="relative h-[240px] w-[280px] shrink-0 overflow-hidden rounded-[12px] bg-[#f5f5f5]"
          >
            {i === 0 ? (
              <>
                <Asset
                  src={a.dimSilhouette}
                  className="absolute left-[15px] top-[46px] h-[96px] w-[33px] object-contain opacity-40"
                />
                <Asset
                  src={a.dimSide}
                  alt="Kia Seltos side dimensions"
                  className="absolute left-[10px] top-[37px] h-[112px] w-[260px] object-contain"
                />
                <span className="absolute left-[70px] top-[149px] bg-[#757575] px-[6px] text-[8px] font-medium leading-[11px] text-white">
                  Wheelbase - 2610mm
                </span>
                <span className="absolute left-[88px] top-[180px] bg-[#757575] px-[6px] text-[8px] font-medium leading-[11px] text-white">
                  Length - 4365mm
                </span>
              </>
            ) : (
              <>
                <Asset
                  src={a.dimSilhouette}
                  className="absolute left-[33px] top-[50px] h-[112px] w-[38px] object-contain opacity-40"
                />
                <Asset
                  src={a.dimFront}
                  alt="Kia Seltos front dimensions"
                  className="absolute left-[76px] top-[44px] h-[122px] w-[129px] object-contain"
                />
                <span className="absolute left-[90px] top-[174px] bg-[#757575] px-[6px] text-[8px] font-medium leading-[11px] text-white">
                  Width - 1800mm
                </span>
                <span className="absolute right-[18px] top-[90px] rotate-90 bg-[#757575] px-[6px] text-[8px] font-medium leading-[11px] text-white">
                  Height - 1645mm
                </span>
              </>
            )}
            <span className="absolute bottom-[16px] left-1/2 flex -translate-x-1/2 gap-[3px]">
              <span className={`h-[3px] rounded bg-[#121212] ${index === 0 ? "w-[12px]" : "w-[6px] opacity-30"}`} />
              <span className={`h-[3px] rounded bg-[#121212] ${index === 1 ? "w-[12px]" : "w-[6px] opacity-30"}`} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function ServiceCostSection({
  fuel,
  onFuel,
}: {
  fuel: "Petrol" | "Diesel";
  onFuel: (value: "Petrol" | "Diesel") => void;
}) {
  const rows = SERVICE_ROWS[fuel];
  return (
    <section id="section-service" className="bg-white py-[32px]">
      <div className="px-[20px]">
        <SectionHeading>Service cost for Kia Seltos</SectionHeading>
      </div>
      <div className="details-hscroll mt-[24px] flex gap-[12px] px-[20px]">
        {(["Petrol", "Diesel"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onFuel(item)}
            className={`h-[32px] rounded-[8px] border px-[12px] ${
              fuel === item
                ? "border-[#121212] bg-[rgba(18,18,18,0.1)]"
                : "border-[#e0e0e8] bg-transparent"
            }`}
          >
            <Typography variant="label-sm" weight="medium">
              {item}
            </Typography>
          </button>
        ))}
      </div>
      <div className="mx-auto mt-[20px] w-[320px] rounded-[12px] bg-[#efe9fb] pt-[8px]">
        <Typography variant="label-xs" weight="medium" className="w-full text-center !text-[#451999]">
          Kia Seltos comes with 3 free services*
        </Typography>
        <div className="mt-[8px] rounded-[12px] bg-[#f8f7fc] px-[16px] py-[20px]">
          {rows.map((row, i) => (
            <div key={row.name}>
              {i > 0 ? <div className="my-[12px] h-px bg-[#e0e0e8]" /> : null}
              <div className="flex items-start justify-between">
                <div>
                  <Typography variant="label-sm" weight="medium">
                    {row.name}
                  </Typography>
                  <Typography variant="body-xs" color="secondary" className="mt-[4px]">
                    {row.when}
                  </Typography>
                </div>
                <Typography
                  variant="label-sm"
                  weight="medium"
                  color={row.free ? "success" : "primary"}
                  className="w-[80px] text-right"
                >
                  {row.cost}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompetitionSection() {
  const stat = (label: string, value: string) => (
    <div className="w-[132px]">
      <Typography variant="body-xs" color="tertiary">
        {label}
      </Typography>
      <Typography variant="label-sm" weight="medium" className="mt-[4px]">
        {value}
      </Typography>
    </div>
  );
  return (
    <section id="section-comparison" className="bg-[#f8f7fc] px-[20px] py-[32px]">
      <SectionHeading>Kia Seltos vs the competition</SectionHeading>
      <div className="mt-[24px] overflow-hidden rounded-[12px] border border-[#e8e8e8] bg-white">
        <div className="relative flex h-[124px] border-b border-[#e8e8e8]">
          <div className="flex w-1/2 flex-col items-center gap-[8px] px-[8px] pt-[16px]">
            <div className="h-[64px] w-[140px]">
              <Asset src={a.compareSeltos} alt="Kia Seltos" className="h-full w-full object-contain" />
            </div>
            <Typography variant="label-sm" weight="medium">
              Kia Seltos
            </Typography>
          </div>
          <span className="absolute left-1/2 top-0 h-full w-px bg-[#e8e8e8]" />
          <div className="flex w-1/2 flex-col items-center gap-[8px] px-[8px] pt-[16px]">
            <div className="h-[64px] w-[140px]">
              <Asset src={a.compareCreta} alt="Hyundai Creta" className="h-full w-full object-contain" />
            </div>
            <span className="flex items-center gap-[8px]">
              <Typography variant="label-sm" weight="medium">
                Hyundai Creta
              </Typography>
              <button type="button" aria-label="Change comparison car" className="flex size-[20px] items-center justify-center overflow-clip">
                <Asset src={a.iconEdit} />
              </button>
            </span>
          </div>
        </div>
        <div className="relative flex flex-col gap-[32px] px-[12px] py-[24px]">
          <span className="absolute left-1/2 top-[24px] h-[312px] w-px bg-[#e8e8e8]" />
          <div className="flex justify-between">
            {stat("ARAI Mileage", "16.9 – 21.7 kmpl")}
            {stat("ARAI Mileage", "17.9 – 22 kmpl")}
          </div>
          <div className="flex justify-between">
            {stat("On road price", "₹13 – 25 lakh")}
            {stat("On road price", "₹12 – 24 lakh")}
          </div>
          <div className="flex justify-between">
            {stat("Colours", "12 colours")}
            {stat("Colours", "8 colours")}
          </div>
          <div className="flex justify-between">
            {stat("Our expert rating", "8.0/10")}
            {stat("Our expert rating", "8.1/10")}
          </div>
        </div>
      </div>
    </section>
  );
}
