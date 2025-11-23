"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/register");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}