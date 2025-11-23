

"use client";

import React, { useEffect, useState } from "react";
import { apiRequest } from "@/utils/api";

export default function OverviewCards({ reload }: { reload?: number }) {
  const [counts, setCounts] = useState({ trips: 0, bookings: 0, upcoming: 0 });

  const loadCounts = async () => {
    try {
      const trips = await apiRequest("/trips", { method: "GET" });
      let bookings = [];
      try { bookings = await apiRequest("/booking", { method: "GET" }); } catch(e){}

      const upcoming = trips.filter((t:any) =>
        t.date ? new Date(t.date) > new Date() : false
      ).length;

      setCounts({
        trips: trips.length || 0,
        bookings: bookings.length || 0,
        upcoming,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCounts();
  }, [reload]);

  const cards = [
    { id: 1, value: counts.trips, label: "Total Trips", iconBg: "#EEF2FF", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>) },
    { id: 2, value: counts.bookings, label: "Total Bookings", iconBg: "#ECFDF5", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v4H3z"/><path d="M3 11h18v10H3z"/></svg>) },
    { id: 3, value: counts.upcoming, label: "Upcoming Departures", iconBg: "#FEF3C7", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 8h6v8H9z"/></svg>) },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 w-full mb-8">
      {cards.map((c) => (
        <div key={c.id} className="bg-white border border-[#E5E7EB] rounded-xl px-6 py-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: c.iconBg }}>{c.icon}</div>
          <div><div className="text-2xl font-semibold text-slate-900">{c.value}</div><div className="text-sm text-slate-500">{c.label}</div></div>
        </div>
      ))}
    </div>
  );
}