

"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { apiRequest } from "@/utils/api";


type Trip = {
       _id: string;
       code?: string;
       from: string;
       to: string;
       rawDateTime?: string;
       departTime?: string;
       arriveTime?: string;
       price: number;
       totalSeats: number;
     };

     export default function TripTable({
             onAddTrip,
             onEditTrip,
             onSuccess,
             reload,
           }: {
             onAddTrip?: () => void;
             onEditTrip?: (trip: any) => void;
             onSuccess?: () => void;
             reload?: number;
           }){
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTrips = async () => {
    setLoading(true);
    try {
      const data = await apiRequest("/trips", { method: "GET" });
      setTrips(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this trip?")) return;
  
    try {
      await apiRequest(`/trips/${id}`, { method: "DELETE" });
  
      if (onSuccess) onSuccess();   
    } catch (err) {
      console.error(err);
      alert("Failed to delete trip.");
    }
  };

  useEffect(() => {
    loadTrips();
  }, [reload]);

  return (
    <div className="w-full mt-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[18px] font-semibold text-slate-900">Trip Management</h2>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-[#D1D5DB] rounded-lg text-sm text-slate-700 hover:bg-gray-50">
            All Trips
          </button>
          <button
            onClick={onAddTrip}
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
            {loading ? (
              <tr>
                <td colSpan={7} className="py-6 px-6">
                  Loading...
                </td>
              </tr>
            ) : (
              trips.map((t, idx) => (
                <tr
                  key={t._id}
                  className="border-t border-[#E5E7EB] hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-6">
                    {t.code || `T${String(idx + 1).padStart(3, "0")}`}
                  </td>
                  <td className="py-3 px-6">{t.from} → {t.to}</td>
                  <td className="py-3 px-6">{t.departTime}</td>
                  <td className="py-3 px-6">{t.arriveTime}</td>
                  <td className="py-3 px-6">${t.price}</td>
                  <td className="py-3 px-6">{t.totalSeats}</td>
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-4">
                      <FiEdit2
                        className="text-blue-600 cursor-pointer"
                        size={18}
                        onClick={() => onEditTrip && onEditTrip(t)}
                      />
                      <FiTrash2 className="text-red-500 cursor-pointer" size={18}
                      onClick={() => handleDelete(t._id)}/>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}