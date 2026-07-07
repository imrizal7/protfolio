import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sudarshan Rijal — Computer Engineering Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          background: "linear-gradient(135deg, #09090B 0%, #111113 100%)",
          fontFamily: "monospace",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.15), transparent)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* SR Monogram */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.3)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff, #93C5FD, #A78BFA)",
              WebkitBackgroundClip: "text",
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            SR
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-2px",
          }}
        >
          Sudarshan Rijal
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 22,
            color: "#71717A",
            margin: 0,
            marginBottom: 40,
            letterSpacing: "0",
          }}
        >
          Computer Engineering Student · Nepal 🇳🇵
        </p>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["C++", "Qt", "OOP", "AXON HMS"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                color: "#93C5FD",
                fontSize: 14,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 14,
            color: "#3F3F46",
            fontFamily: "monospace",
          }}
        >
          sudarshanrijal.dev
        </p>
      </div>
    ),
    { ...size }
  );
}
