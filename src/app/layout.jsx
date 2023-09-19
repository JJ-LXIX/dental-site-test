import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar2 from "../../components/Navbar/Navbar2";
import Navbar from "../../components/Navbar2/Navbar";

// const inter = Inter({ subsets: ["latin"] });

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.woff",
      weight: "normal",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Dental Site",
  description: "A simple dental site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        {/* <Navbar2 /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
