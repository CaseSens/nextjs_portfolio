import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { ColorThemeProvider } from "./providers/ColorThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const rubik = localFont({
  src: [
    {
      path: "../../public/fonts/Rubik/static/Rubik-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Rubik/static/Rubik-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-rubik",
});
const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "CaseyGG Portfolio",
  description: "My Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  userScalable: false,
  minimumScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${rubik.variable} ${playfair.variable} font-sans overflow-x-hidden`}
      >
        <ColorThemeProvider attribute="class">
          <>
            <Header />
            {children}
          </>
        </ColorThemeProvider>
      </body>
    </html>
  );
}
