export const DETAILS_FRAME_WIDTH_PX = 360;
export const DETAILS_FRAME_HEIGHT_PX = 800;

export const detailsFrameClassName =
  "relative flex h-[800px] w-[360px] shrink-0 flex-col overflow-hidden rounded-[24px] bg-[#121212] font-sans";

export const DETAILS_TABS = [
  { id: "expert", label: "Expert opinion" },
  { id: "variants", label: "Variants" },
  { id: "features", label: "Features" },
  { id: "specs", label: "Specs" },
  { id: "colours", label: "Colours" },
  { id: "price", label: "Price" },
  { id: "mileage", label: "Mileage" },
  { id: "dimensions", label: "Dimensions" },
  { id: "service", label: "Service cost" },
  { id: "comparison", label: "Comparison" },
] as const;

export type DetailsTabId = (typeof DETAILS_TABS)[number]["id"];

export const EXPERT_VIDEOS = [
  {
    title: "How did it do with the experts?",
    image: "expertVideo1",
    exclusive: false,
  },
  {
    title: "What makes this car a keeper?",
    image: "expertVideo2",
    exclusive: true,
  },
  {
    title: "Does Seltos beat its competition?",
    image: "expertVideo3",
    exclusive: false,
  },
  {
    title: "What’s offered in each variant?",
    image: "expertVideo4",
    exclusive: false,
  },
  {
    title: "Ready for an in-depth review?",
    image: "expertVideo4",
    exclusive: false,
  },
] as const;

export const EXPERT_RATINGS = [
  { score: "8/10", label: "Value for\nMoney", icon: "iconValue", ring: "ringValue", pct: 80 },
  { score: "8.5/10", label: "Space &\nPracticality", icon: "iconSpace", ring: "ringSpace", pct: 85 },
  { score: "7/10", label: "Reliability &\nService", icon: "iconReliability", ring: "ringReliability", pct: 70 },
  { score: "9/10", label: "Comfort &\nFeatures", icon: "iconComfort", ring: "ringSpace", pct: 90 },
  { score: "8.5/10", label: "Safety", icon: "iconValue", ring: "ringValue", pct: 85 },
] as const;

export const EXPERT_BULLETS = [
  "Robust build quality with good fit and finish for Indian roads",
  "Powerful engine options (1.5L naturally aspirated, 1.5L turbo petrol, and 1.5L diesel)",
  "High ground clearance (190mm) suitable for rough Indian roads",
];

export const EXPERT_BULLETS_MORE = [
  "Loaded cabin with a large touchscreen, ADAS on higher variants, and ventilated seats",
  "Balanced ride quality that stays composed on broken city roads and highways",
];

export type VariantCard = {
  name: string;
  fuel: "Petrol" | "Diesel";
  transmission: "Manual" | "Automatic";
  specs: string;
  price: string;
  mrp: string;
  save: string;
  emi: string;
  delivery: string;
  express?: boolean;
  badge: "Top-selling" | "Top variant" | "Base variant";
  badgeTone: "maroon" | "red" | "grey";
};

export const VARIANTS: VariantCard[] = [
  {
    name: "1.0 HTX",
    fuel: "Petrol",
    transmission: "Automatic",
    specs: "Petrol  •  1497 cc  •  Automatic  •  17.7 kmpl",
    price: "₹19,55,301",
    mrp: "₹19,87,900",
    save: "Save ₹32,599",
    emi: "EMI from ₹25,000",
    delivery: "Express delivery by 10 Jun ‘25",
    express: true,
    badge: "Top-selling",
    badgeTone: "maroon",
  },
  {
    name: "X-Line Turbo DCT",
    fuel: "Petrol",
    transmission: "Automatic",
    specs: "Petrol  •  1497 cc  •  Automatic  •  17.9 kmpl",
    price: "₹24,62,000",
    mrp: "₹24,90,000",
    save: "Save ₹28,000",
    emi: "EMI from ₹25,000",
    delivery: "Delivery by 10 Mar ‘25",
    badge: "Top variant",
    badgeTone: "red",
  },
  {
    name: "GTX Plus AT",
    fuel: "Diesel",
    transmission: "Automatic",
    specs: "Diesel  •  1493 cc  •  Automatic  •  19.1 kmpl",
    price: "₹19,78,300",
    mrp: "₹20,10,900",
    save: "Save ₹32,600",
    emi: "EMI from ₹25,000",
    delivery: "Delivery by 10 Mar ‘25",
    badge: "Base variant",
    badgeTone: "grey",
  },
  {
    name: "HTK",
    fuel: "Petrol",
    transmission: "Manual",
    specs: "Petrol  •  1497 cc  •  Manual  •  17.9 kmpl",
    price: "₹13,78,000",
    mrp: "₹14,05,000",
    save: "Save ₹27,000",
    emi: "EMI from ₹18,000",
    delivery: "Delivery by 10 Mar ‘25",
    badge: "Base variant",
    badgeTone: "grey",
  },
  {
    name: "HTX Diesel",
    fuel: "Diesel",
    transmission: "Manual",
    specs: "Diesel  •  1493 cc  •  Manual  •  20.0 kmpl",
    price: "₹17,42,000",
    mrp: "₹17,70,000",
    save: "Save ₹28,000",
    emi: "EMI from ₹22,000",
    delivery: "Delivery by 10 Mar ‘25",
    badge: "Top-selling",
    badgeTone: "maroon",
  },
  {
    name: "GTX Plus",
    fuel: "Petrol",
    transmission: "Manual",
    specs: "Petrol  •  1497 cc  •  Manual  •  16.9 kmpl",
    price: "₹18,90,000",
    mrp: "₹19,20,000",
    save: "Save ₹30,000",
    emi: "EMI from ₹24,000",
    delivery: "Express delivery by 10 Jun ‘25",
    express: true,
    badge: "Top variant",
    badgeTone: "red",
  },
];

export const FEATURE_SLIDES = [
  {
    image: "featureOrvm",
    title: "Power-adjustable ORVMs",
    body: "Easily adjust your mirrors, ideal for busy city driving",
  },
  {
    image: "featureInterior",
    title: "Power-adjustable ORVMs",
    body: "Easily adjust your mirrors, ideal for busy city driving",
  },
  {
    image: "featureNight",
    title: "Power-adjustable ORVMs",
    body: "Easily adjust your mirrors, ideal for busy city driving",
  },
] as const;

export const COLOUR_TILES = [
  { name: "Pewter Olive", image: "colorPewter", gallery: true },
  { name: "Intense Red", image: "colorIntenseRed", gallery: false },
  { name: "Imperial Blue", image: "colorImperialBlue", gallery: false },
  { name: "Aurora Black Pearl", image: "colorAuroraBlack", gallery: false },
  { name: "Glacier White Pearl", image: "colorGlacierWhite", gallery: false },
  { name: "Gravity Grey", image: "colorGravityGrey", gallery: false },
] as const;

export const SERVICE_ROWS = {
  Petrol: [
    { name: "1st Service", when: "10,000km or 1 year", cost: "FREE", free: true },
    { name: "2nd Service", when: "20,000km or 2 years", cost: "FREE", free: true },
    { name: "3rd Service", when: "30,000km or 3 years", cost: "FREE", free: true },
    { name: "4th Service", when: "40,000km or 4 years", cost: "₹6,047", free: false },
    { name: "5th Service", when: "50,000km or 5 years", cost: "₹6,047", free: false },
  ],
  Diesel: [
    { name: "1st Service", when: "10,000km or 1 year", cost: "FREE", free: true },
    { name: "2nd Service", when: "20,000km or 2 years", cost: "FREE", free: true },
    { name: "3rd Service", when: "30,000km or 3 years", cost: "FREE", free: true },
    { name: "4th Service", when: "40,000km or 4 years", cost: "₹6,047", free: false },
    { name: "5th Service", when: "50,000km or 5 years", cost: "₹6,047", free: false },
  ],
} as const;
