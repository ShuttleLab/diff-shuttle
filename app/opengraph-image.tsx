import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Diff Shuttle - Free Online Text & Code Comparison Tool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
            marginBottom: 32,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <rect
              x="8"
              y="12"
              width="20"
              height="40"
              rx="3"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <rect
              x="36"
              y="12"
              width="20"
              height="40"
              rx="3"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M28 32 L36 32"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M14 22 L22 22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 28 L20 28"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M42 22 L50 22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M42 28 L48 28"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#1e1b4b",
            letterSpacing: "-0.02em",
          }}
        >
          Diff Shuttle
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#4c1d95",
            marginTop: 16,
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Compare texts &amp; code in your browser — 100% private
        </div>
      </div>
    ),
    { ...size }
  );
}
