
"use client";

import { useSearchParams, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { apiRequest } from "@/utils/api";

export default function BookingConfirmationPage() {
  const params = useSearchParams();
  const router = useRouter();
  const bookingId = params.get("bookingId");
  const seats = params.get("seats")?.split(",") ?? [];
  const total = Number(params.get("total") ?? "0");

  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      if (!bookingId) return;
      try {
        const data = await apiRequest(`/bookings/${bookingId}`, { method: "GET" });
        setBooking(data);
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, [bookingId]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/qr.png";
    link.download = `ticket-${bookingId ?? "ticket"}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-[#E6F8EF] flex items-center justify-center mb-3">
            ✓
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Booking Confirmed!</h2>
          <p className="text-sm text-gray-500 mt-1">Your trip is successfully booked.</p>
        </div>

        <div className="mt-6 bg-linear-to-r from-[#2B63D8] to-[#4A7CF6] text-white px-4 py-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Flight Ticket</div>
            <div className="text-xs opacity-80">Booking ID: {bookingId}</div>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">FROM</div>
              <div className="text-[18px] font-semibold mt-1">{booking?.trip?.from ?? "—"}</div>
              <div className="text-xs text-gray-400 mt-2">Departs</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-400">Duration</div>
              <div className="my-2 text-[#64748B]">✈️</div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-500">TO</div>
              <div className="text-[18px] font-semibold mt-1">{booking?.trip?.to ?? "—"}</div>
              <div className="text-xs text-gray-400 mt-2">Arrives</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#F8FAFC] rounded-md p-3 text-sm text-gray-700">
              <div className="text-xs text-gray-400">Date</div>
              <div className="font-medium">{booking?.trip?.rawDateTime ?? "—"}</div>
            </div>

            <div className="bg-[#F8FAFC] rounded-md p-3 text-sm text-gray-700">
              <div className="text-xs text-gray-400">Seats</div>
              <div className="font-medium">{seats.length ? seats.join(", ") : "—"}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-700 font-medium">Total Fare Paid</div>
            <div className="text-lg font-bold text-green-600">${total.toFixed(2)}</div>
          </div>

          <div className="mt-6 flex justify-center">
            <img src="/qr.png" alt="qr" className="w-28 h-28 object-cover rounded-md border" />
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <button onClick={handleDownload} className="px-5 py-3 rounded-md bg-[#2B63D8] text-white">Download Ticket</button>
            <button onClick={() => router.push(`/bookings/${booking?.trip?._id}/ticket?seats=${seats.join(",")}&total=${total}`)} className="px-5 py-3 rounded-md border-2 border-[#2B63D8] text-[#0F172A]">View Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}