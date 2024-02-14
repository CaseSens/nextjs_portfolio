import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>CaseyGG Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        {/* Here you could also include the font preloading if necessary */}
      </Head>
      <html lang="en">
        <body
          className={`${inter.className} ${rubik.variable} ${playfair.variable} font-sans overflow-x-hidden`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
