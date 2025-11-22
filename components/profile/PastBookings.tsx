"use client";

import BookingCard from "./BookingCard";
import { FiTruck } from "react-icons/fi";

export default function PastBookings() {
  const past = [
    {
      id: "SLK12345",
      status: "Completed",
      route: "Washington D.C. → Philadelphia",
      date: "2024-10-12",
      time: "06:00 AM - 12:30 PM",
      seats: "B3",
      icon: <FiTruck size={20} />,
      bottomIcon: <FiTruck size={22} />,
    },
    {
      id: "SLK67654",
      status: "Completed",
      route: "Chicago → St. Louis",
      date: "2024-10-02",
      time: "02:00 PM - 10:00 PM",
      seats: "A7, B8",
      icon: <FiTruck size={20} />,
      bottomIcon: <FiTruck size={22} />,
    },
    {
      id: "SLK10987",
      status: "Completed",
      route: "Miami → Orlando",
      date: "2024-09-18",
      time: "09:00 AM - 12:00 PM",
      seats: "F1",
      icon: <FiTruck size={20} />,
      bottomIcon: <FiTruck size={22} />,
    },
  ];

  return (
    <div className="w-full mb-10">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Past Bookings
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {past.map((b) => (
          <BookingCard key={b.id} booking={b} />
        ))}
      </div>
    </div>
  );
}