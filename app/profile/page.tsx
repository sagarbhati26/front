"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UpcomingBookings from "@/components/profile/UpcomingBookings";
import PastBookings from "@/components/profile/PastBookings";
import { apiRequest } from "@/utils/api";

export default function ProfilePage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await apiRequest("/booking/my", { method: "GET" });
      setBookings(data);
    } catch (err: any) {
      setErrorMsg(err?.message || "Login required or session expired");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();

  const parseTripDate = (trip: any) => {
    if (trip?.date) {
      const d = new Date(trip.date);
      if (Number.isFinite(d.getTime())) return d;
    }
    if (trip?.rawDateTime) {
      const m = String(trip.rawDateTime).match(/(\d{4}-\d{2}-\d{2})/);
      if (m) {
        const d = new Date(m[1]);
        if (Number.isFinite(d.getTime())) return d;
      }
      const d2 = new Date(trip.rawDateTime);
      if (Number.isFinite(d2.getTime())) return d2;
    }
    return null;
  };

  const upcoming = bookings.filter((b) => {
    const tripDate = parseTripDate(b.trip);
    return tripDate ? tripDate >= today : false;
  });

  const past = bookings.filter((b) => {
    const tripDate = parseTripDate(b.trip);
    return tripDate ? tripDate < today : false;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10">
        <ProfileHeader />
        {errorMsg && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3">
            {errorMsg}
          </div>
        )}
        {loading ? (
          <p className="text-gray-500">Loading bookings...</p>
        ) : (
          <>
            <UpcomingBookings bookings={upcoming} />
            <PastBookings bookings={past} />
          </>
        )}
      </div>
    </div>
  );
}