"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function BookingTable() {
  const rows = [
    { id: "1", user: "Alice Smith", route: "London to Paris", date: "2024-07-26", seats: "A1, A2", price: "$120", status: "Confirmed", qrVerified: true },
    { id: "2", user: "Bob Johnson", route: "Rome to Florence", date: "2024-07-24", seats: "C5", price: "$85", status: "Pending", qrVerified: false },
    { id: "3", user: "Charlie Brown", route: "Berlin to Munich", date: "2024-07-30", seats: "F13, F14, F15", price: "$150", status: "Confirmed", qrVerified: true },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold text-slate-900">Booking Management</h2>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-sm text-slate-700 hover:bg-gray-50">All Bookings</button>
          <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-sm text-slate-700 hover:bg-gray-50 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B63D8" strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            Verify QR
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-[#F9FAFB] text-sm text-slate-600">
            <tr>
              <th className="py-3 px-6">Booking ID</th>
              <th className="py-3 px-6">User</th>
              <th className="py-3 px-6">Trip Route</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Seats</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">QR Verified</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-slate-700">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[#E5E7EB] hover:bg-gray-50">
                <td className="py-3 px-6 font-medium">{r.id}</td>
                <td className="py-3 px-6">{r.user}</td>
                <td className="py-3 px-6">{r.route}</td>
                <td className="py-3 px-6">{r.date}</td>
                <td className="py-3 px-6">{r.seats}</td>

                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      r.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : r.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>

                <td className="py-3 px-6">
                  {r.qrVerified ? (
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">○</div>
                  )}
                </td>

                <td className="py-3 px-6">
                  <div className="flex items-center gap-3 justify-end">
                    <button className="text-blue-600 hover:text-blue-800"><FiEdit size={18} /></button>
                    <button className="text-red-600 hover:text-red-800"><FiTrash2 size={18} /></button>
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