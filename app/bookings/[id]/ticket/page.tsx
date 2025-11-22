"use client";

import React, { JSX, useMemo, useState } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";


function DownloadToast({ show }: { show: boolean }) {
  return (
    <div
      aria-hidden={!show}
      className={`fixed top-6 right-6 z-50 transform transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-white rounded-xl shadow-lg border-l-4 border-green-600 px-4 py-3">
        <div className="p-2 rounded-full bg-green-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v12" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8 11l4 4 4-4" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M21 21H3" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Downloaded</div>
          <div className="text-sm text-slate-500">The ticket has been downloaded</div>
        </div>
        <button
          onClick={() => {}}
          className="ml-4 text-slate-400 hover:text-slate-600"
          aria-hidden
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function TicketPage(): JSX.Element {
  const params = useSearchParams();
  const router = useRouter();
  const { id } = useParams() as { id?: string };
  const seatsParam = params?.get("seats") ?? "";
  const totalParam = params?.get("total") ?? "0";
  const seats = seatsParam ? seatsParam.split(",") : [];
  const total = Number(totalParam) || 0;
  const bookingRef = useMemo(() => {
    return `TXN${(Math.random() * 1e8).toFixed(0)}`;
  }, []);
  const ticketAssetPath = "/mnt/data/5B61811C-8E4D-4BDC-8E3A-607F5A1DC400.png";
  const fromCode = "JFK";
  const toCode = "BOS";
  const fromName = "New York (JFK)";
  const toName = "Boston (BOS)";
  const departTime = "09:30 AM";
  const arriveTime = "12:00 PM";
  const date = "October 26, 2024";
  const duration = "2h 30m";
  const [showToast, setShowToast] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ticketAssetPath;
    link.download = `ticket-${id ?? bookingRef}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <main className="py-12">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">Emirates A380 Airbus</h1>
              <div className="mt-2 text-sm text-slate-600">Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437</div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-slate-900">${total.toFixed(0)}</div>
              <div className="mt-4">
                <button
                  onClick={handleDownload}
                  className="px-5 py-2 rounded-md bg-blue-600 text-white shadow-sm hover:opacity-95"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-[#F3F4F6] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
          
              <div className="flex-1 p-8">
                <div className="flex items-start gap-6">
              
                  <div className="w-48 text-center">
                    <div className="text-2xl font-semibold">9:30 Am</div>
                    <div className="text-xs text-slate-400">new York</div>
                    <div className="my-6 h-24 bg-[#F1F5F9] rounded-md flex items-center justify-center">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12h20" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="text-2xl font-semibold mt-2">12:00 pm</div>
                    <div className="text-xs text-slate-400">Boston</div>
                  </div>

            
                  <div className="flex-1 bg-[#F8FBFF] rounded-md p-6">
                    <div className="flex items-start justify-between">
                      <div className="">
                        <div className="rounded-full w-12 h-12 bg-white flex items-center justify-center overflow-hidden">
                       
                          <img src={ticketAssetPath} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                      </div>

                      <div className="flex-1 ml-4">
                        <div className="text-lg font-semibold">James Doe</div>
                        <div className="text-sm text-slate-500">Boarding Pass N°123</div>
                      </div>

                      <div className="text-sm text-slate-500">Business Class</div>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 8h18M6 12h12M9 16h6" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Date</div>
                          <div className="font-medium">26 Oct 2024</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2v20" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Flight time</div>
                          <div className="font-medium">12:00</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 6h18" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Gate</div>
                          <div className="font-medium">A12</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M3 12h18" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">Seat</div>
                          <div className="font-medium">128</div>
                        </div>
                      </div>
                    </div>

                 
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">EK</div>
                        <div className="text-sm text-slate-400">ABC12345</div>
                      </div>

                      <div className="h-16 w-48 bg-white rounded-md flex items-center justify-center">
                      
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                          <rect x="0" y="0" width="120" height="40" rx="2" fill="#fff" />
                          <rect x="6" y="6" width="4" height="28" fill="#0F172A"/>
                          <rect x="14" y="6" width="2" height="28" fill="#0F172A"/>
                          <rect x="20" y="6" width="6" height="28" fill="#0F172A"/>
                          <rect x="32" y="6" width="3" height="28" fill="#0F172A"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-56 bg-white rounded-md p-4 border border-dashed border-slate-100 flex items-center justify-center">
                    <img src={ticketAssetPath} alt="small-graphic" className="w-40 h-40 object-cover rounded-md" />
                  </div>
                </div>
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-semibold text-slate-900">Terms and Conditions</h3>
                  <div className="mt-3 text-sm text-slate-600 leading-relaxed">
                    <p className="mb-2">Payments — If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.</p>
                    <p className="mb-2">Cancellation — If you do not supply the correct card billing address and or cardholder information, your booking will not be confirmed and the overall cost may increase. Please read the full terms on the website.</p>
                    <p className="mb-2">Contact: For any queries please contact support@argo.example</p>
                  </div>
                </div>
              </div>
              <aside className="w-[320px] p-6 border-l border-transparent">
                <div className="bg-white p-4 rounded-lg border border-[#F3F4F6] shadow-sm">
                  <div className="w-full h-14 rounded-md bg-gradient-to-r from-[#2B63D8] to-[#4A7CF6] flex items-center justify-center text-white text-xl">✈️</div>

                  <div className="mt-4 text-sm text-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-slate-500">Route:</div>
                      <div className="font-medium">{fromName.split(" ")[0]} to {toName.split(" ")[0]}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-slate-500">Date:</div>
                      <div className="font-medium">{date}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-slate-500">Time:</div>
                      <div className="font-medium">{departTime}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-slate-500">Transport:</div>
                      <div className="font-medium">Flight</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-slate-500">Seats:</div>
                      <div className="font-medium">{seats.length ? seats.join(", ") : "—"}</div>
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4 flex items-center justify-between">
                    <div className="text-sm font-medium">Total Fare:</div>
                    <div className="text-xl font-bold text-green-600">${total.toFixed(2)}</div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={handleDownload}
                      className="w-full py-2 rounded-md bg-blue-600 text-white font-medium"
                    >
                      Complete & Download
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>

        </div>
      </main>
      <DownloadToast show={showToast} />
    </div>
  );
}