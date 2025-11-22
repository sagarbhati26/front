"use client";

export default function AddTripModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
     
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />
      <div
        className="
          relative bg-white rounded-3xl shadow-xl
          w-[946px] 
          p-14
          flex flex-col gap-6
          animate-fadeIn
        "
      >
        
        <h2 className="text-[22px] font-semibold text-slate-900">
          Trip Details
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">From</label>
            <input
              type="text"
              placeholder="Departure Location"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
              text-sm text-slate-700 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">To</label>
            <input
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
              type="text"
              placeholder="Date & Time"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
              text-sm text-slate-700 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-600">Price</label>
            <input
              type="text"
              placeholder="Price"
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
              text-sm text-slate-700 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-600">Total Seat</label>
          <input
            type="text"
            placeholder="Total no. of seats"
            className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none
            text-sm text-slate-700 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            className="
              bg-blue-600 hover:bg-blue-700 
              text-white font-medium 
              px-8 py-3 rounded-lg text-[15px]
              transition
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}