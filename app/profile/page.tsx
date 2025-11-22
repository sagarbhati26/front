"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import UpcomingBookings from "@/components/profile/UpcomingBookings";
import PastBookings from "@/components/profile/PastBookings";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10">
        <ProfileHeader />
        <UpcomingBookings />
        <PastBookings />
      </div>
    </div>
  );
}