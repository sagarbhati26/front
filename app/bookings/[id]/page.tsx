"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import UpcomingBookings from "@/components/profile/UpcomingBookings";
import PastBookings from "@/components/profile/PastBookings";
import { apiRequest } from "@/utils/api";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      console.log("Fetching user bookings...");

      
      const data = await apiRequest("/booking/my", { method: "GET" });

      console.log("Bookings Response:", data);
      setBookings(data);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();

  const upcoming = bookings.filter(b => {
    if (!b.trip?.date) return false;
    return new Date(b.trip.date) >= today;
  });

  const past = bookings.filter(b => {
    if (!b.trip?.date) return false;
    return new Date(b.trip.date) < today;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-10">
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