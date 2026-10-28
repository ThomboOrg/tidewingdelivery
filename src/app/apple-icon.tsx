import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same mark as icon.svg, full-bleed so iOS can apply its own rounded mask.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ff5a36" }}>
        <svg viewBox="0 0 40 40" width="180" height="180">
          <path d="M8 21c6-1 10-5 14-11 1 5-1 9-5 11h15c-4 3-9 4-15 3" fill="#fff" />
          <path d="M7 29c3-2 5-2 8 0s5 2 8 0 5-2 8 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
