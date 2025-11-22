"use client";

import React, { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import DownloadToast from "@/components/DownloadToast";

export default function TicketPage() {
  const { id } = useParams();
  const params = useSearchParams();

  const seats = params.get("seats")?.split(",") ?? [];
  const total = Number(params.get("total") ?? "0");

  const bookingRef = useMemo(
    () => `TXN${(Math.random() * 1e8).toFixed(0)}`,
    []
  );

  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ticket.png"; 
    link.download = `ticket-${id ?? bookingRef}.png`;
    link.click();

    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-[1232px] mx-auto pt-12 px-6">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-[28px] font-semibold text-slate-900">
              Emirates A380 Airbus
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437
            </p>
          </div>

          <div className="text-right">
            <div className="text-[32px] font-bold text-slate-900">
              ${total.toFixed(0)}
            </div>

            <button
              onClick={handleDownload}
              className="mt-3 px-5 py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:opacity-95"
            >
              Download
            </button>
          </div>
        </div>
        <div
          className="bg-white rounded-2xl shadow-lg border border-[#EAEAEA] overflow-hidden"
          style={{ width: "1232px" }}
        >
          <div className="flex">

      
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: "300px",
                height: "309px",
                borderRight: "1px solid #EAEAEA",
                background: "#F8FBFF",
              }}
            >
              <div className="text-[28px] text-black font-semibold">9:30 AM</div>
              <div className="text-xs text-slate-500 mb-6">New York</div>

              <div className="my-2">
                <img src="/globe.png" alt="plane-icon" className="w-8 opacity-50" />
              </div>

              <div className="text-[28px] text-black font-semibold mt-6">12:00 PM</div>
              <div className="text-xs text-slate-500">Boston</div>
            </div>

           
            <div
              className="p-6"
              style={{
                width: "856px",
                height: "309px",
                borderRight: "1px solid #EAEAEA",
              }}
            >
           
              <div className="flex justify-between items-center">
             
                <div className="flex items-center gap-3">
                  <img
                    src="/qr.png"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">James Doe</p>
                    <p className="text-sm text-slate-500">Boarding Pass N°123</p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 font-medium">
                  Business Class
                </p>
              </div>

            
              <div className="grid grid-cols-4 gap-4 mt-6">
             
                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-white shadow-sm rounded-md flex items-center justify-center">
                    📅
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Date</p>
                    <p className="text-black font-medium">26 Oct 2024</p>
                  </div>
                </div>

               
                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-white shadow-sm rounded-md flex items-center justify-center">
                    🕒
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Duration</p>
                    <p className="text-black font-medium">2h 30m</p>
                  </div>
                </div>

             
                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-white shadow-sm rounded-md flex items-center justify-center">
                    🛫
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Gate</p>
                    <p className="text-black font-medium">A12</p>
                  </div>
                </div>

           
                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-white shadow-sm rounded-md flex items-center justify-center">
                    💺
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Seat</p>
                    <p className="text-black font-medium">{seats.join(", ")}</p>
                  </div>
                </div>
              </div>

          
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-[26px] text-black font-bold">EK</p>
                  <p className="text-sm text-slate-400">ABC12345</p>
                </div>

                <img
                  src="/barcode.png"
                  className="h-16"
                  alt="barcode"
                />
              </div>
            </div>

            <div className="flex items-center justify-center p-4">
              <img
                src="/globe.png"
                className="w-[260px] rounded-lg"
                alt="world-map"
              />
            </div>
          </div>
          
<div className="mt-10 w-[1232px] mx-auto">
  <h2 className="text-[24px] font-semibold text-slate-900 mb-6">
    Terms and Conditions
  </h2>

  <div className="bg-white rounded-2xl border border-[#EAEAEA] p-10 w-full">

    <h3 className="text-[20px] font-semibold text-slate-900 mb-4">
      Payments
    </h3>

    <ul className="space-y-4 text-[15px] leading-[1.8] text-slate-700 max-w-[1100px]">
      <li className="list-disc ml-5">
        If you are purchasing your ticket using a debit or credit card via the Website, 
        we will process these payments via the automated secure common payment gateway 
        which will be subject to fraud screening purposes.
      </li>
      <li className="list-disc ml-5">
        If you do not supply the correct card billing address and/or cardholder information, 
        your booking will not be confirmed and the overall cost may increase. We reserve the 
        right to cancel your booking if payment is declined for any reason or if you supplied 
        incorrect card information. If we become aware of, or are notified of, any fraud or 
        illegal activity associated with the payment for the booking, the booking will be 
        cancelled and you will be liable for all costs and expenses arising from such 
        cancellation, without prejudice to any action that may be taken against us.
      </li>
      <li className="list-disc ml-5">
        Argo may require the card holder to provide additional payment verification upon request 
        by either submitting an online form or visiting the nearest Argo office, or at the 
        airport at the time of check-in. Argo reserves the right to deny boarding or to collect 
        a guarantee payment (in cash or from another credit card) if the card originally used 
        for the purchase cannot be presented by the cardholder at check-in or when collecting 
        the tickets, or in the case the original payment has been withheld or disputed by the 
        card issuing bank. Credit card details are held in a secured environment and transferred 
        through an internationally accepted system.
      </li>
    </ul>

   
    <h3 className="text-[20px] font-semibold text-slate-900 mt-10 mb-4">
      Contact Us
    </h3>

    <div className="text-[15px] leading-[1.8] text-slate-700 space-y-1">
      <p>If you have any questions about our Website or our Terms of Use, please contact:</p>
      <p>Argo Group Q.C.S.C</p>
      <p>Argo Tower</p>
      <p>P.O. Box 22550</p>
      <p>Doha, State of Qatar</p>
      <p>
        Further contact details can be found at{" "}
        <a href="#" className="text-blue-600 underline">argo.com/help</a>
      </p>
    </div>

  </div>
</div>

        
        
        </div>
      </div>

      {showToast && <DownloadToast onClose={() => setShowToast(false)} />}
    </div>
  );
}