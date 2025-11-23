// app/trips/[id]/page.tsx  (your trip details page)
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api";
import SeatSelector from "@/components/SeatSelector";
import Image from "next/image";

export default function TripDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [trip, setTrip] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => { loadTrip(); }, []);

  const loadTrip = async () => {
    try {
      const data = await apiRequest(`/trips/${id}`, { method: "GET" });
      setTrip(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!trip) return <div className="p-10 text-black">Loading...</div>;

  const price = trip.price || 0;

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-sm mb-6">
        <div className="relative h-60 w-full">
          <Image src="/atm.png" alt="trip" fill className="object-cover" />
        </div>
      </div>

      <h1 className="text-3xl text-black font-bold mb-2">{trip.from} → {trip.to}</h1>
      <p className="text-gray-700 mb-4">⏱ {trip.departTime} - {trip.arriveTime} • 📅 {trip.rawDateTime}</p>

      <div className="bg-white p-6 text-black rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Select Your Seat</h2>

        <SeatSelector
          bookedSeats={trip.seats.filter((s:any)=>s.isBooked).map((s:any)=>s.seatNumber)}
          selectedSeats={selectedSeats}
          onChange={setSelectedSeats}
        />

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Selected Seats</div>
            <div className="text-lg font-medium">{selectedSeats.length ? selectedSeats.join(", ") : "None"}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Total</div>
            <div className="text-xl font-semibold">${selectedSeats.length * price}</div>
            <button
              onClick={() => {
                if (!selectedSeats.length) { alert("Select seats first"); return; }
                const seatsQuery = selectedSeats.join(",");
                const total = selectedSeats.length * price;
                router.push(`/bookings/${trip._id}/checkout?seats=${seatsQuery}&total=${total}`);
              }}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}