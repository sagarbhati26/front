import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import AuthWrapper from "@/components/AuthWrapper";  // ⭐ import wrapper

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Travel Booking App",
  description: "Travel App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="antialiased">

        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}