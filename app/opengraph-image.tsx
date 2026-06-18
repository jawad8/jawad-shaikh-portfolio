import { ImageResponse } from "next/og";

export const alt =
  "Jawad Shaikh - Senior Software Developer and AI Engineer in Abu Dhabi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "68px",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 82% 20%, rgba(116,99,255,.32), transparent 30%), radial-gradient(circle at 12% 88%, rgba(54,198,220,.18), transparent 34%), #080b12",
          color: "#f5f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 29,
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              jawad<span style={{ color: "#59d9e8" }}>.</span>shaikh
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 8,
                color: "#768292",
                fontSize: 13,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              software × intelligence
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "11px 17px",
              border: "1px solid rgba(92,225,165,.25)",
              borderRadius: 999,
              background: "rgba(92,225,165,.07)",
              color: "#b8c4d2",
              fontSize: 16,
            }}
          >
            <span style={{ marginRight: 10, color: "#5ce1a5" }}>●</span>
            Abu Dhabi, UAE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 940,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#9ba7b7",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Senior Software Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 15,
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-4px",
              lineHeight: 1.04,
            }}
          >
            Enterprise software for finance, intelligence &amp; scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {["Python · Django", "React · Next.js", "GenAI · RAG", "Banking · FinTech"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "10px 15px",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.04)",
                  color: "#bec7d3",
                  fontSize: 15,
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
