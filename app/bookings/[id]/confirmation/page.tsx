"use client";

import { useSearchParams, useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingConfirmationPage() {
    const params = useSearchParams();
    const router = useRouter();
    const { id } = useParams() as { id?: string };

    const seatsParam = params?.get("seats") ?? "";
    const totalParam = params?.get("total") ?? "0";
    const [bookingRef, setBookingRef] = useState("");

    const seats = seatsParam ? seatsParam.split(",") : [];
    const total = Number(totalParam) || 0;


    useEffect(() => {
        setBookingRef(`TXN${(Math.random() * 1e8).toFixed(0)}`);
    }, []);

    const qrImagePath = "/qr.png";

    const fromCode = "JFK";
    const toCode = "BOS";
    const fromName = "New York (JFK)";
    const toName = "Boston (BOS)";
    const departTime = "09:30 AM";
    const arriveTime = "12:00 PM";
    const date = "October 26, 2024";

    const [showToast, setShowToast] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = qrImagePath;
        link.download = `ticket-${id ?? bookingRef}.png`;
        link.click();

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-start justify-center py-12 px-4">

            {showToast && (
                <div className="fixed top-28 right-10 z-50 flex items-center gap-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-[#E5E7EB] animate-fadeIn">

                    <div className="w-1.5 h-12 bg-green-700 rounded-md"></div>

                    <div className="flex flex-col">
                        <span className="text-green-700 font-semibold">Downloaded</span>
                        <span className="text-gray-600 text-sm">The ticket has been Downloaded</span>
                    </div>

                    <button
                        onClick={() => setShowToast(false)}
                        className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                    >
                        ×
                    </button>
                </div>
            )}

            <div
                className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-[#F3F4F6] p-6"
                style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.06)" }}
            >

                <div className="flex flex-col items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#E6F8EF] flex items-center justify-center mb-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 6L9 17l-5-5"
                                stroke="#16A34A"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-900">Booking Confirmed!</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Your trip is successfully booked. Enjoy your journey!
                    </p>
                </div>

                <div className="mt-6 rounded-lg overflow-hidden shadow-sm">


                    <div className="bg-linear-to-r from-[#2B63D8] to-[#4A7CF6] text-white px-4 py-3 rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Flight Ticket</div>
                            <div className="text-xs opacity-80">Booking ID: {bookingRef}</div>
                        </div>
                    </div>


                    <div className="p-6 bg-white">
                        <div className="grid grid-cols-3 gap-4 items-center">

                            <div className="text-center text-black">
                                <div className="text-sm text-gray-500">{fromCode}</div>
                                <div className="text-[18px] font-semibold mt-1">{fromName.split(" ")[0]}</div>
                                <div className="text-xs text-gray-400 mt-2">Departs</div>
                                <div className="text-sm text-gray-600 mt-1">{departTime}</div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="text-xs text-gray-400">2h 30m</div>
                                <div className="my-2 text-[#64748B]">✈️</div>
                                <div className="text-xs text-gray-400">Non-stop</div>
                            </div>


                            <div className="text-center text-black">
                                <div className="text-sm text-gray-500">{toCode}</div>
                                <div className="text-[18px] font-semibold mt-1">{toName.split(" ")[0]}</div>
                                <div className="text-xs text-gray-400 mt-2">Arrives</div>
                                <div className="text-sm text-gray-600 mt-1">{arriveTime}</div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-[#F8FAFC] rounded-md p-3 text-sm text-gray-700">
                                <div className="text-xs text-gray-400">Date</div>
                                <div className="font-medium">{date}</div>
                            </div>

                            <div className="bg-[#F8FAFC] rounded-md p-3 text-sm text-gray-700">
                                <div className="text-xs text-gray-400">Seats</div>
                                <div className="font-medium">
                                    {seats.length ? seats.join(", ") : "—"}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-700 font-medium">Total Fare Paid</div>
                            <div className="text-lg font-bold text-green-600">
                                ${total.toFixed(2)}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <img
                                src={qrImagePath}
                                alt="ticket-qr"
                                className="w-28 h-28 object-cover rounded-md border"
                                style={{ boxShadow: "0 6px 20px rgba(2,6,23,0.06)" }}
                            />
                        </div>

                        <div className="mt-6 flex gap-3 justify-center">

                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-[#2B63D8] text-white font-medium shadow-sm hover:opacity-95"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 3v12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                    <path d="M8 11l4 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                    <path d="M21 21H3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                                <span>Download Ticket</span>
                            </button>

                            <button
                                onClick={() => {
                                    router.push(
                                        `/bookings/${id}/ticket?seats=${seats.join(",")}&total=${total}`
                                    );
                                }}
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-md border-2 border-[#2B63D8] text-[#0F172A] font-medium hover:bg-[#F8FAFF]"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="#2B63D8" strokeWidth="1.6" />
                                    <circle cx="12" cy="12" r="3" stroke="#2B63D8" strokeWidth="1.6" />
                                </svg>
                                <span>View Ticket</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}