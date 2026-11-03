import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

async function loadHeroStillDataUrl(): Promise<string> {
  const bytes = await readFile(join(process.cwd(), "public/amped-center-still.jpg"));
  return `data:image/jpeg;base64,${bytes.toString("base64")}`;
}

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load font: ${url}`);
  return res.arrayBuffer();
}

export async function createSocialImageResponse() {
  const [heroStill, serifRegular, serifMedium, sansRegular, sansBold] =
    await Promise.all([
      loadHeroStillDataUrl(),
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-serif@latest/latin-400-normal.woff",
      ),
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-serif@latest/latin-500-normal.woff",
      ),
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff",
      ),
      loadFont(
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff",
      ),
    ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#070707",
          color: "#ffffff",
        }}
      >
        {/* Hero still — matches site feature space */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroStill}
          width={1200}
          height={630}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.72,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,7,7,0.25) 0%, rgba(7,7,7,0.15) 45%, rgba(7,7,7,0.72) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "48px 56px 52px",
          }}
        >
          {/* White brand lockup — matches site header mark */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start",
              background: "#ffffff",
              color: "#070707",
              padding: "10px 22px 14px 18px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "Inter",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                textTransform: "uppercase",
              }}
            >
              amped
            </p>
            <p
              style={{
                margin: 0,
                marginTop: 2,
                fontFamily: "IBM Plex Serif",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              New American Energy
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 40,
              width: "100%",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 620,
                fontFamily: "IBM Plex Serif",
                fontSize: 64,
                fontWeight: 500,
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
              }}
            >
              Organizing the clean energy revolution
            </p>
            <p
              style={{
                margin: 0,
                maxWidth: 340,
                fontFamily: "Inter",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                textAlign: "right",
                background: "#000000",
                padding: "8px 12px",
              }}
            >
              We build the systems needed to power the clean energy economy.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "IBM Plex Serif", data: serifRegular, weight: 400, style: "normal" },
        { name: "IBM Plex Serif", data: serifMedium, weight: 500, style: "normal" },
        { name: "Inter", data: sansRegular, weight: 400, style: "normal" },
        { name: "Inter", data: sansBold, weight: 700, style: "normal" },
      ],
    },
  );
}

export const socialImageSize = size;
