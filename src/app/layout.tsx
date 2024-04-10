import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";

const condensed = local({
  src: [
    {
      path: "../../public/fonts/sprat/Sprat-CondensedThin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/sprat/Sprat-CondensedLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/sprat/Sprat-CondensedRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/sprat/Sprat-CondensedMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/sprat/Sprat-CondensedBold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/sprat/Sprat-CondensedBlack.otf",
      weight: "900",
    },
  ],
  variable: "--font-condensed",
});

const extended = local({
  src: [
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedThin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedRegular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedBold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/sprat/Sprat-ExtendedBlack.otf",
      weight: "900",
    },
  ],
  variable: "--font-extended",
});

const sprat = local({
  src: [
    {
      path: "../../public/fonts/sprat/Sprat-RegularThin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/sprat/Sprat-RegularLight.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/sprat/Sprat-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/sprat/Sprat-RegularMedium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/sprat/Sprat-RegularBold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/sprat/Sprat-RegularBlack.otf",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Red Liber",
  description: "The Best Stories are Told in Blood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${condensed.variable} ${extended.variable} ${sprat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
