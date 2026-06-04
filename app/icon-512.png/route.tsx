import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
          borderRadius: "20%",
        }}
      >
        <svg width="240" height="240" viewBox="0 0 64 64" fill="none">
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
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
