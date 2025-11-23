"use client";

import { useState, useEffect } from "react";
import { apiRequest } from "@/utils/api";

export default function AddTripModal({
  onClose,
  onSuccess,
  editingTrip,
}: {
  onClose: () => void;
  onSuccess: () => void;
  editingTrip?: any;
}) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    dateTime: "",
    price: "",
    totalSeats: "",
    departTime: "",
    arriveTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    if (editingTrip) {
      setForm({
        from: editingTrip.from || "",
        to: editingTrip.to || "",
        dateTime: editingTrip.rawDateTime || "",
        price: editingTrip.price || "",
        totalSeats: editingTrip.totalSeats || "",
        departTime: editingTrip.departTime || "",
        arriveTime: editingTrip.arriveTime || "",
      });
    }
  }, [editingTrip]);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      if (editingTrip) {
     
        await apiRequest(`/trips/${editingTrip._id}`, {
          method: "PUT",
          body: JSON.stringify({
            from: form.from,
            to: form.to,
            dateTime: form.dateTime,
            price: Number(form.price),
            totalSeats: Number(form.totalSeats),
            departTime: form.departTime,
            arriveTime: form.arriveTime,
          }),
        });
      } else {
        
        await apiRequest("/trips", {
          method: "POST",
          body: JSON.stringify({
            from: form.from,
            to: form.to,
            dateTime: form.dateTime,
            price: Number(form.price),
            totalSeats: Number(form.totalSeats),
            departTime: form.departTime,
            arriveTime: form.arriveTime,
          }),
        });
      }

      onSuccess(); 

    } catch (error: any) {
      setErr(error.message || "Failed to save trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-3xl shadow-xl w-[946px] p-14 flex flex-col gap-6 animate-fadeIn"
      >
        <h2 className="text-[22px] font-semibold text-slate-900">
          Trip Details
        </h2>

        {err && <div className="text-red-600 text-sm">{err}</div>}

        
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">From</label>
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              type="text"
              placeholder="Departure Location"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">To</label>
            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              type="text"
              placeholder="Arrival Destination"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">
              Date & Time
            </label>
            <input
              name="dateTime"
              value={form.dateTime}
              onChange={handleChange}
              type="text"
              placeholder="2024-07-26 06:00 AM - 04:00 PM"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              placeholder="Price"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-600">Total Seats</label>
          <input
            name="totalSeats"
            value={form.totalSeats}
            onChange={handleChange}
            type="number"
            placeholder="Total no. of seats"
            className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
              text-sm text-slate-700 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">
              Departure Time (optional)
            </label>
            <input
              name="departTime"
              value={form.departTime}
              onChange={handleChange}
              type="text"
              placeholder="06:00 AM"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">
              Arrival Time (optional)
            </label>
            <input
              name="arriveTime"
              value={form.arriveTime}
              onChange={handleChange}
              type="text"
              placeholder="04:00 PM"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
                text-sm text-slate-700 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg text-[15px] transition"
          >
            {loading ? "Saving..." : editingTrip ? "Update Trip" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}