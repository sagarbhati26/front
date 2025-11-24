"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiRequest } from "@/utils/api";
export default function ProfileHeader() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiRequest("/auth/profile", { method: "GET" });
        setUser(data.user);
      } catch (_) {
        try {
          const u = typeof window !== "undefined" ? localStorage.getItem("user") : null;
          if (u) setUser(JSON.parse(u));
        } catch (_) {}
      }
    };
    load();
  }, []);
  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-6 mb-10 flex items-center gap-6">
      <img
        src="/profile.png"
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h2 className="text-lg font-semibold text-slate-900">{user?.name || "User"}</h2>
        <p className="text-sm text-slate-500">{user?.email || ""}</p>
        <button className="text-blue-600 text-sm mt-1 hover:underline">
          <Link href="/profile/edit" className="text-blue-600 underline hover:text-blue-800">Manage Profile</Link>
        </button>
      </div>
    </div>
  );
}