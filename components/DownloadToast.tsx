"use client";
import { useEffect } from "react";

export default function DownloadToast({
  onClose,
}: {
  onClose: () => void;
}) {
  
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="
        fixed top-24 right-6 z-50 
        bg-white rounded-xl shadow-lg border border-[#E5E7EB]
        w-[360px] p-4 flex items-start gap-4
        animate-slideIn
      "
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
     
      <div className="w-2 h-full rounded-l-xl bg-[#0F6B2F]" />

     
      <div className="flex-1">
        <div className="flex items-center gap-2">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#0F6B2F]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 20h16M12 4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>

          <p className="font-semibold text-[#0F6B2F] text-[16px]">Downloaded</p>
        </div>

        <p className="text-gray-600 text-sm mt-1">
          The ticket has been Downloaded
        </p>
      </div>

      
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    </div>
  );
}