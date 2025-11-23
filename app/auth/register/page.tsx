"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center px-4">
      <div
        className="
          w-[486px] bg-white border border-[#E5E7EB] rounded-2xl 
          shadow-[0_0_20px_rgba(0,0,0,0.20)] 
          p-10
        "
      >
       
        <div className="w-full flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-3xl">
            😺
          </div>
        </div>

        
        <h2 className="text-center text-[22px] font-semibold text-slate-900">
          Create Your Account
        </h2>
        <p className="text-center text-slate-500 mt-1 mb-8">
          Join us today and get started
        </p>

      
        <div className="flex flex-col gap-5">

         
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="w-full mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

     
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a strong password"
              className="w-full mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

         
          <div>
            <label className="text-sm font-medium text-slate-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-4 transition-all">
            Sign Up
          </button>
        </div>

       
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}