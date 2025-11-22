"use client";
import Link from "next/link";
export default function ProfileHeader() {
  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-6 mb-10 flex items-center gap-6">
      <img
        src="/profile.png"
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h2 className="text-lg font-semibold text-slate-900">Alex Johnson</h2>
        <p className="text-sm text-slate-500">alex.johnson@email.com</p>
        <button className="text-blue-600 text-sm mt-1 hover:underline">
        <Link 
  href="/profile/edit"
  className="text-blue-600 underline hover:text-blue-800"
>
  Manage Profile
</Link>
        </button>
      </div>
    </div>
  );
}