"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import SeatSelector from "@/components/SeatSelector";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";



type Trip = {
  id: string;
  title: string;
  date: string;
  time: string;
  price: number;
  image: string;
};

const TRIPS: Trip[] = [
  { id: "1", title: "Atlanta → Miami", date: "Dec 20, 2024", time: "08:30 AM - 01:30 PM", price: 129, image: "/atm.png" },
  { id: "2", title: "Chicago → Los Angeles", date: "Dec 18, 2024", time: "05:30 PM - 10:30 PM", price: 156, image: "/cla.png" },
  { id: "3", title: "New York → Boston", date: "Dec 15, 2024", time: "09:00 AM - 01:00 PM", price: 48, image: "/bny.png" },
];

export default function BookingDetailsPage() {
  const router = useRouter();
  const { id } = useParams() as { id?: string };
  const trip = useMemo(() => TRIPS.find((t) => t.id === id), [id]);

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  if (!trip) {
    return <div className="min-h-screen flex items-center justify-center p-8">Trip not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      
      <div className="w-full">
        <div className="max-w-[1104px] mx-auto pt-[140px]"> 
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-80 md:h-[420px]">
              <Image src={trip.image} alt={trip.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

   
      <div className="max-w-[1104px] mx-auto mt-8 px-6">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="text-sm text-gray-500">
              <div className="text-xs text-gray-400">From</div>
              <div className="mt-2 text-gray-800">New York (NYC)</div>

              <div className="mt-6 text-xs text-gray-400">Date</div>
              <div className="mt-2 text-gray-800">October 26, 2024</div>
            </div>

            <div className="text-center">
              <div className="text-xs text-gray-400">Fare per seat</div>
              <div className="text-blue-600 text-2xl font-semibold mt-2">${trip.price}</div>
            </div>

            <div className="text-sm text-gray-500 text-right">
              <div className="text-xs text-gray-400">To</div>
              <div className="mt-2 text-gray-800">Boston (BOS)</div>

              <div className="mt-6 text-xs text-gray-400">Time</div>
              <div className="mt-2 text-gray-800">09:00 AM</div>
            </div>
          </div>
        </div>

      
        <div className="h-12" />

     
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4 text-black">Select Your Seat</h3>

              <div className="bg-gray-50 p-8 rounded-lg">
                <SeatSelector
                  bookedSeats={["A2", "B3", "B5", "C2", "D1", "D5", "F2", "F4"]}
                  selectedSeats={selectedSeats}
                  onChange={(s) => setSelectedSeats(s)}
                />
              </div>
            </div>

            <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-medium mb-2 text-black">Selected Seats</h4>
              <p className="text-gray-600">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
            </div>
          </div>

        
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Booking Summary</h3>
                <p className="text-sm text-gray-600 mb-4">Seat details will appear when you select seats.</p>

                <div className="text-sm text-gray-500 mb-2">Fare per seat</div>
                <div className="text-xl font-bold text-blue-600 mb-2">${trip.price}</div>

                <div className="mt-4 text-sm text-gray-700">
                  <div>Seats: <span className="font-medium">{selectedSeats.length || 0}</span></div>
                  <div className="mt-2">Total: <span className="font-semibold">${selectedSeats.length * trip.price}</span></div>
                </div>
              </div>

              <button
                onClick={() => {
                  if (selectedSeats.length === 0) {
                    alert("Please select at least one seat.");
                    return;
                  }

                  const seatsQuery = selectedSeats.join(",");
                  const totalQuery = selectedSeats.length * trip.price;

                  router.push(`/bookings/${id}/checkout?seats=${seatsQuery}&total=${totalQuery}`);
                }}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}