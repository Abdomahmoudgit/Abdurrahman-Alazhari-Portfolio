import { ImageResponse } from "next/og";

// Share card at a fixed URL (/og) used by both languages' metadata
// (lib/metadata.ts). A route handler instead of opengraph-image.tsx because
// inside the (en) route group Next gives that file a hashed URL.
// Edge runtime: the Node build of @vercel/og crashed on Windows paths.
export const runtime = "edge";

const size = { width: 1200, height: 630 };
const skills = ["React.js", "Next.js", "TypeScript", "React Query", "Tailwind CSS"];

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 80% 20%, #2a1b5c 0%, #000319 55%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#BEC1DD", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16 }}>
          Abdurrahman Al-Azhari
        </div>
        <div style={{ fontSize: 40, color: "#CBACF9", marginTop: 12 }}>
          Frontend Engineer | React.js & Next.js
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {skills.map((s) => (
            <div
              key={s}
              style={{
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 12,
                background: "#10132E",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#E4ECFF",
              }}
            >
              {s}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 26, color: "#C1C2D3", marginTop: 48 }}>
          Cairo, Egypt · abdurrahmanalazhari.vercel.app
        </div>
      </div>
    ),
    size
  );
}
