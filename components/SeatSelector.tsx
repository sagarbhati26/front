"use client";

import React from "react";



type SeatSelectorProps = {
  bookedSeats?: string[];
  selectedSeats?: string[];
  onChange?: (seats: string[]) => void;
};

export default function SeatSelector({
  bookedSeats = [],
  selectedSeats = [],
  onChange,
}: SeatSelectorProps) {

  const rows = {
    A: ["A1","A2","A3","A4","A5","A6"],
    B: ["B1","B2","B3","B4","B5","B6"],
    C: ["C1","C2","C3","C4","C5","C6"],
    D: ["D1","D2","D3","D4","D5","D6"],
    E: ["E1","E2","E3","E4","E5","E6"],
    F: ["F1","F2","F3","F4","F5","F6"],
  };

  const toggle = (s: string) => {
    if (bookedSeats.includes(s)) return;
    const already = selectedSeats.includes(s);
    const next = already ? selectedSeats.filter((x) => x !== s) : [...selectedSeats, s];
    onChange?.(next);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        <div className="text-sm font-medium text-gray-700">Deluxe Cabin</div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-3">
          {Object.keys(rows).map(() =>
        
            null
          )}
          
          {Object.keys(rows).map((rowKey) => (
            <div key={rowKey} className="flex col-span-6 space-x-3 justify-center items-center">
              {rows[rowKey as keyof typeof rows].map((seat) => {
                const booked = bookedSeats.includes(seat);
                const selected = selectedSeats.includes(seat);
                const base = "w-10 h-10 rounded flex items-center justify-center text-xs border";
                const classes = booked
                  ? `${base} bg-red-100 text-red-700 cursor-not-allowed border-red-200`
                  : selected
                  ? `${base} bg-blue-600 text-white border-blue-600`
                  : `${base} bg-white hover:bg-gray-100 border-gray-200`;
                return (
                  <button
                    key={seat}
                    onClick={() => toggle(seat)}
                    className={classes}
                    aria-pressed={selected}
                    disabled={booked}
                    title={seat}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

     
      <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 border rounded block bg-white" /> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded block bg-red-100 border" /> Booked
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded block bg-blue-600" /> Selected
        </div>
      </div>
    </div>
  );
}