"use client";

import { FiEdit2, FiPlus } from "react-icons/fi";

export default function ProfileEditForm() {
  return (
    <div className="w-full max-w-[1232px] mx-auto flex flex-col gap-10">

      <div className="flex flex-col items-center gap-4">
        <div className="w-[140px] h-[140px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-6xl">
          😺
        </div>

        <div className="text-center">
          <h2 className="text-[22px] font-semibold text-slate-900">
            Alex Johnson
          </h2>
          <p className="text-slate-500 text-sm">alex.johnson@email.com</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 flex flex-col gap-6">

        <h2 className="text-[20px] font-semibold text-slate-900">Account</h2>

   
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Name</label>
            <p className="text-[16px] text-slate-800 font-medium">Alex Johnson</p>
          </div>
          <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
            <FiEdit2 size={14} /> Change
          </button>
        </div>

       
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Email</label>
            <p className="text-[16px] text-slate-800 font-medium">
              john.doe@gmail.com
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
              <FiPlus size={14} /> Add another email
            </button>

            <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
              <FiEdit2 size={14} /> Change
            </button>
          </div>
        </div>

    
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Password</label>
            <p className="text-[16px] text-slate-800 font-medium">*********</p>
          </div>
          <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
            <FiEdit2 size={14} /> Change
          </button>
        </div>

 
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Phone number</label>
            <p className="text-[16px] text-slate-800 font-medium">
              +1 000-000-0000
            </p>
          </div>
          <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
            <FiEdit2 size={14} /> Change
          </button>
        </div>

     
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Address</label>
            <p className="text-[16px] text-slate-800 font-medium">
              St 32 main downtown, Los Angeles, California, USA
            </p>
          </div>
          <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
            <FiEdit2 size={14} /> Change
          </button>
        </div>

  
        <div className="flex justify-between items-start">
          <div>
            <label className="text-sm text-slate-500">Date of birth</label>
            <p className="text-[16px] text-slate-800 font-medium">01-01-1992</p>
          </div>
          <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-600 flex items-center gap-2 text-sm">
            <FiEdit2 size={14} /> Change
          </button>
        </div>

      </div>
    </div>
  );
}