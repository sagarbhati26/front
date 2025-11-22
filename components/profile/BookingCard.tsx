"use client";

import { FiClock, FiCalendar, FiMapPin } from "react-icons/fi";

interface Booking {
  id: number | string;
  icon: React.ReactNode;
  status: string;
  route: string;
  date: string;
  time: string;
  seats: string;
  bottomIcon: React.ReactNode;
}

export default function BookingCard({ booking }: { booking: Booking }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 w-full shadow-sm">
      
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-slate-700">
          Booking ID: {booking.id}
        </p>

        <span className="text-blue-600">{booking.icon}</span>
      </div>

     
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          booking.status === "Upcoming"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {booking.status}
      </span>

   
      <div className="flex items-center gap-2 mt-4 text-slate-700">
        <FiMapPin size={16} />
        <p className="font-medium">{booking.route}</p>
      </div>

      
      <div className="flex items-center gap-2 mt-2 text-slate-600">
        <FiCalendar size={16} />
        <p>{booking.date}</p>
      </div>


      <div className="flex items-center gap-2 mt-2 text-slate-600">
        <FiClock size={16} />
        <p>{booking.time}</p>
      </div>

  
      <p className="mt-2 text-slate-700 text-sm">Seats: {booking.seats}</p>

      <div className="mt-4 w-full bg-linear-to-r from-[#EBF3FF] to-[#E5ECF8] px-4 py-3 rounded-lg flex items-center justify-center text-blue-700 text-lg">
        {booking.bottomIcon}
      </div>
    </div>
  );
}