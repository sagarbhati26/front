"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const linkClass = (path: string) =>
    pathname.startsWith(path) ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <nav className="w-full bg-white border-b border-[#E5E7EB] py-4 px-10 flex items-center justify-between">
      
  
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
          +
        </div>
        <span className="text-2xl font-bold text-black">Argo</span>
      </div>


      <div className="flex items-center gap-8 text-[16px]">

        <Link href="/home" className={linkClass("/home")}>
          Home
        </Link>

     
        {user && (
          <>
            <Link href="/bookings" className={linkClass("/bookings")}>
              My Bookings
            </Link>

            <Link href="/profile" className={linkClass("/profile")}>
              Profile
            </Link>
          </>
        )}

      
        {user?.role === "admin" && (
          <Link href="/admin" className={`${linkClass("/admin")} font-semibold`}>
            Admin
          </Link>
        )}
      </div>

  
      <div className="flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
              👤
            </div>
            <span className="text-sm text-slate-700 font-medium">
              {user.name}
            </span>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        )}
      </div>

    </nav>
  );
}