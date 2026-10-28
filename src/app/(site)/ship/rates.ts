export const countries = ["China", "Ghana", "Nigeria", "United Kingdom", "United States", "Germany", "UAE", "India", "South Africa", "Kenya"];

// ponytail: flat indicative rates, replace with the pricing API when it exists
const RATES = {
  air: { base: 45, perKg: 6.5, transit: "1–5 days" },
  sea: { base: 180, perKg: 1.1, transit: "12–40 days" },
};

export function estimate(mode: "air" | "sea", kg: number) {
  const r = RATES[mode];
  const mid = r.base + r.perKg * kg;
  return { low: Math.round(mid * 0.9), high: Math.round(mid * 1.15), transit: r.transit };
}
