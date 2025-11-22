"use client";

import BookingCard from "./BookingCard";
import { FiAirplay } from "react-icons/fi";

export default function UpcomingBookings() {
  const upcoming = [
    {
      id: "SLK79012",
      status: "Upcoming",
      route: "New York → Los Angeles",
      date: "2024-11-15",
      time: "08:30 AM - 01:30 PM",
      seats: "A2",
      icon: <FiAirplay size={20} />,
      bottomIcon: <FiAirplay size={22} />,
    },
    {
      id: "SLK74578",
      status: "Upcoming",
      route: "Los Angeles → San Francisco",
      date: "2024-11-21",
      time: "05:30 PM - 10:30 PM",
      seats: "C2",
      icon: <FiAirplay size={20} />,
      bottomIcon: <FiAirplay size={22} />,
    },
  ];

  return (
    <div className="w-full mb-10">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Upcoming Bookings
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {upcoming.map((b) => (
          <BookingCard key={b.id} booking={b} />
        ))}
      </div>
    </div>
  );
}