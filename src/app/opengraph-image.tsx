import { ImageResponse } from "next/og";

export const alt = "Tidewing — Global air & sea freight to 180+ countries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#0b1f3a", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg viewBox="0 0 40 40" width="72" height="72">
            <rect width="40" height="40" rx="10" fill="#ff5a36" />
            <path d="M8 21c6-1 10-5 14-11 1 5-1 9-5 11h15c-4 3-9 4-15 3" fill="#fff" />
            <path d="M7 29c3-2 5-2 8 0s5 2 8 0 5-2 8 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 44, fontWeight: 600 }}>Tidewing</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 28, color: "#ff5a36", letterSpacing: 4 }}>GLOBAL AIR & SEA FREIGHT</span>
          <span style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 16 }}>Ship anywhere.</span>
          <span style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Track everything.</span>
        </div>
        <span style={{ fontSize: 28, color: "rgba(255,255,255,0.65)" }}>180+ countries · Customs handled · Live tracking</span>
      </div>
    ),
    size,
  );
}
