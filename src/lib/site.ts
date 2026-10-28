const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

export const photos = {
  ship: u("1605745341112-85968b19335b"),
  port: u("1494412574643-ff11b0a5c1c3"),
  portCranes: u("1578575437130-527eed3abbec"),
  takeoff: u("1520437358207-323b43b50729"),
  wing: u("1436491865332-7a61a109cc05"),
  apron: u("1569154941061-e231b4725ef1"),
  warehouse: u("1586528116311-ad8dd3c8310d"),
  handover: u("1566576721346-d4a3b4eaeb55"),
};

export type Mode = "air" | "sea";

export const services: Record<
  Mode,
  {
    name: string;
    tagline: string;
    intro: string;
    transit: string;
    hero: string;
    image: string;
    highlights: string[];
    options: { name: string; transit: string; body: string }[];
    features: { title: string; body: string }[];
    faqs: [string, string][];
  }
> = {
  air: {
    name: "Air Freight",
    tagline: "When time is the cargo.",
    intro:
      "Express, standard and charter air cargo through 300+ partner airports. Ideal for urgent, high-value and perishable goods.",
    transit: "1–5 days",
    hero: photos.takeoff,
    image: photos.apron,
    highlights: ["Next-flight-out", "Temperature-controlled", "Dangerous goods", "Charter solutions"],
    options: [
      { name: "Air Express", transit: "1–2 days", body: "Priority uplift on the next available flight, door to door." },
      { name: "Air Standard", transit: "3–5 days", body: "Consolidated air cargo with the best balance of speed and cost." },
      { name: "Air Charter", transit: "On demand", body: "Dedicated aircraft for oversized, critical or time-sensitive loads." },
    ],
    features: [
      { title: "Cold chain", body: "GDP-compliant handling for pharma and perishables, 2–8°C and frozen." },
      { title: "DG certified", body: "IATA-trained staff for lithium batteries, chemicals and hazardous goods." },
      { title: "Customs handled", body: "Pre-clearance and duty calculation so cargo doesn’t sit at the airport." },
      { title: "Live milestones", body: "Flight, uplift and landing events pushed to you as they happen." },
    ],
    faqs: [
      ["What can I ship by air?", "Most general cargo, documents, electronics, perishables and certified dangerous goods. Some items are restricted by destination."],
      ["How is air freight priced?", "By chargeable weight — the greater of actual weight or volumetric weight (L×W×H cm ÷ 6000)."],
      ["Do you handle customs?", "Yes. We prepare export and import documentation and can pay duties on your behalf."],
    ],
  },
  sea: {
    name: "Sea Freight",
    tagline: "Volume, moved with certainty.",
    intro:
      "FCL and LCL ocean freight on every major trade lane, with port-to-port or door-to-door options and full visibility at sea.",
    transit: "12–40 days",
    hero: photos.ship,
    image: photos.portCranes,
    highlights: ["Full container (FCL)", "Shared container (LCL)", "Reefer cargo", "Project & oversized"],
    options: [
      { name: "FCL", transit: "12–35 days", body: "A 20ft or 40ft container for your cargo alone. Best for large volumes." },
      { name: "LCL", transit: "18–40 days", body: "Pay only for the space you use in a consolidated container." },
      { name: "Reefer", transit: "14–35 days", body: "Temperature-controlled containers for food, pharma and chemicals." },
    ],
    features: [
      { title: "Weekly sailings", body: "Fixed departures on major lanes so you can plan production around them." },
      { title: "Port to door", body: "Haulage, warehousing and last-mile delivery at both ends." },
      { title: "Cargo insurance", body: "All-risk marine cover available on every booking." },
      { title: "Vessel tracking", body: "Live vessel position and ETA updates from port to port." },
    ],
    faqs: [
      ["FCL or LCL — which do I need?", "Over roughly 15 cubic metres, a full container is usually cheaper. Below that, LCL makes sense."],
      ["How is sea freight priced?", "FCL is priced per container. LCL is priced per cubic metre or per 1,000 kg, whichever is greater."],
      ["Can you collect from my supplier?", "Yes. We offer EXW pickup in over 120 countries."],
    ],
  },
};

export const updates = [
  "Fuel surcharge rates updated for November 2026",
  "New customs rules for low-value shipments into the EU",
  "Peak season: book Q4 sea freight at least 3 weeks ahead",
];

export const faqs: [string, string][] = [
  ["How do I track my shipment?", "Enter your Tidewing tracking number (starting with TW-) on the Track page. You’ll see every milestone from pickup to delivery."],
  ["How long does delivery take?", "Air freight typically takes 1–5 days. Sea freight takes 12–40 days depending on the trade lane."],
  ["What documents do I need?", "Usually a commercial invoice and packing list. We’ll tell you exactly what your destination requires when you book."],
  ["Who pays customs duties?", "You choose: duties can be paid by the sender (DDP) or the receiver (DAP) at checkout."],
  ["Can I change the delivery address?", "Yes, until the shipment is out for delivery. Contact support with your tracking number."],
  ["Is my cargo insured?", "Basic liability is included. Full-value cargo insurance can be added to any booking."],
];
