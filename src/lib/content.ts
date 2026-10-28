export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#drivers", label: "Drivers" },
  { href: "#fleet", label: "Fleet" },
  { href: "#businesses", label: "Businesses" },
  { href: "#partners", label: "Partners" },

] as const;

export const howItWorks = [
  {
    title: "Request",
    copy: "Choose your location and tell us what charging you need.",
    image: "/images/ai-sahel-request-phone-accra-260929151400.webp",
    alt: "Driver requesting mobile EV charging on a phone",
  },
  {
    title: "Dispatch",
    copy: "A Sahel Power mobile charging unit is sent to your vehicle.",
    image: "/images/ai-sahel-mobile-charging-dispatch-accra-260929151412.webp",
    alt: "Sahel Power mobile charging van in Accra",
  },
  {
    title: "Charge",
    copy: "We connect to your EV, charge it, and help you get moving again.",
    image: "/images/ai-sahel-ev-charging-closeup-260929151415.webp",
    alt: "Charging connector plugged into an EV",
  },
] as const;

export const audiences = [
  {
    title: "EV Drivers",
    copy: "Charging at home, at work, or where the day takes you.",
  },
  {
    title: "Apartment Communities",
    copy: "Offer residents EV charging without immediately building permanent stations.",
  },
  {
    title: "Commercial Fleets",
    copy: "Support company vehicles, deliveries, taxis, and ride-hailing EVs.",
  },
  {
    title: "Dealerships",
    copy: "Charge inventory, customer vehicles, and demonstration vehicles.",
  },
  {
    title: "Hotels & Businesses",
    copy: "Add EV charging as an amenity without a full charging station.",
  },
  {
    title: "Events & Temporary Locations",
    copy: "Bring charging capacity to places that need it for a limited time.",
  },
] as const;

export const fleetTags = [
  "Corporate fleets",
  "Ride-hailing vehicles",
  "Delivery vehicles",
  "Rental fleets",
  "Logistics companies",
  "Government & institutional vehicles",
] as const;

export const comparisonRows = [
  {
    topic: "Deployment",
    fixed: "A site must be selected and built",
    mobile: "Mobile capacity can be positioned where needed",
  },
  {
    topic: "Upfront infrastructure",
    fixed: "Permanent equipment and site work",
    mobile: "Can begin without a permanent station at each site",
  },
  {
    topic: "Demand",
    fixed: "Capacity is committed to one location",
    mobile: "Charging can follow observed vehicle demand",
  },
  {
    topic: "Fleet operations",
    fixed: "Vehicles travel to the charger",
    mobile: "Charging can meet vehicles at their operating base",
  },
  {
    topic: "Unserved locations",
    fixed: "Access depends on station coverage",
    mobile: "Mobile units can serve suitable locations without a charger",
  },
  {
    topic: "Testing a market",
    fixed: "Long-term siting decision made first",
    mobile: "Test demand before choosing a permanent hub",
  },
] as const;

export const networkStages = [
  "Mobile Charging",
  "Charging Demand Data",
  "Fleet Partnerships",
  "Permanent Charging Hubs",
  "Distributed Energy Network",
] as const;

export const partnerTypes = [
  "Property developers",
  "Apartment operators",
  "Fleet companies",
  "EV dealerships",
  "Auto manufacturers",
  "Energy companies",
  "Financial institutions",
  "Government institutions",
  "Hotels and malls",
  "Investors",
] as const;

export const driverFeatures = [
  "Request charging",
  "Select a location",
  "Track the vehicle",
  "See estimated arrival",
  "Monitor progress",
  "View battery percentage",
  "Pay digitally",
  "See charging history",
] as const;

export const fleetFeatures = [
  "Fleet dashboard",
  "Vehicle charging status",
  "Scheduled charging",
  "Energy consumption",
  "Charging history",
  "Fleet analytics",
] as const;

export const mapPins: [number, number, "lg" | "sm"][] = [
  [45, 73, "lg"],
  [54, 50, "sm"],
  [54, 37, "sm"],
  [89, 27, "sm"],
];
