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
    <html lang="en">
      <body className={`${inter.className} ${rubik.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
