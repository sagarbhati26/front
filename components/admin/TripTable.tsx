"use client";

import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function TripTable({ onAddTrip }: { onAddTrip?: () => void }) {
  const trips = [
    { id: "1", route: "London to Paris", departure: "06:00 AM", arrival: "04:00 PM", price: "$70.00", seats: 50 },
    { id: "2", route: "Berlin to Munich", departure: "08:30 AM", arrival: "03:00 PM", price: "$120.00", seats: 50 },
    { id: "3", route: "Rome to Florence", departure: "10:00 AM", arrival: "01:00 PM", price: "$45.00", seats: 60 },
  ];

  return (
    <div className="w-full mt-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[18px] font-semibold text-slate-900">Trip Management</h2>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-sm text-slate-700 hover:bg-gray-50">All Trips</button>
          <button
            onClick={() => onAddTrip && onAddTrip()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm shadow-sm"
          >
            +Add New Trip
          </button>
        </div>
      </div>

      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
        <table className="w-full text-left">
          <thead className="bg-[#F9FAFB] text-sm text-slate-600">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Route</th>
              <th className="py-3 px-6">Departure</th>
              <th className="py-3 px-6">Arrival</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Total Seats</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-slate-700">
            {trips.map((t) => (
              <tr key={t.id} className="border-t border-[#E5E7EB] hover:bg-gray-50 transition-colors">
                <td className="py-3 px-6">{t.id}</td>
                <td className="py-3 px-6">{t.route}</td>
                <td className="py-3 px-6">{t.departure}</td>
                <td className="py-3 px-6">{t.arrival}</td>
                <td className="py-3 px-6">{t.price}</td>
                <td className="py-3 px-6">{t.seats}</td>
                <td className="py-3 px-6">
                  <div className="flex items-center gap-4">
                    <FiEdit2 className="text-blue-600 cursor-pointer" size={18} />
                    <FiTrash2 className="text-red-500 cursor-pointer" size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}