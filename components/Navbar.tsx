"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#E5E7EB] py-4 px-10 flex items-center justify-between">
      
     
      <div className="flex items-center gap-3">
       
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
          +
        </div>

        <span className="text-2xl font-bold text-black">Argo</span>
      </div>

     
      <div className="flex items-center gap-8 text-[16px]">
        <Link href="/" className="text-blue-600 font-medium">Home</Link>
        <Link href="/bookings" className="text-gray-700 hover:text-blue-600">My Bookings</Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
        <Link href="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
      </div>

      <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center cursor-pointer">
        👤
      </div>

    </nav>
  );
}