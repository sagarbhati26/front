"use client";

import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api"; 

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/home");

    } catch (err: any) {
      setErrorMsg(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9]">
      <div className="w-[486px] h-auto bg-white rounded-2xl border border-[#E5E7EB] shadow-lg p-10">

 
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
            ✈️
          </div>
        </div>

        <h1 className="text-center text-[22px] font-semibold text-slate-900">
          Log In to Journey Booking Platform
        </h1>
        <p className="text-center text-sm text-slate-500 mt-1 mb-6">
          Welcome back! Please enter your credentials to continue.
        </p>

      
        {errorMsg && (
          <p className="text-red-600 text-center mb-3 text-sm">{errorMsg}</p>
        )}

  
        <form onSubmit={handleSubmit} className="space-y-5">

      
          <div>
            <label className="text-sm text-slate-700">Email</label>
            <div className="relative mt-1">
              <FiMail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 border border-[#E5E7EB] rounded-lg bg-white text-slate-700 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          
          <div>
            <label className="text-sm text-slate-700">Password</label>
            <div className="relative mt-1">
              <FiLock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 border border-[#E5E7EB] rounded-lg bg-white text-slate-700 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-right text-sm text-blue-600 hover:underline mt-1 cursor-pointer">
              Forgot password?
            </p>
          </div>

         
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold transition
            ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        
        <p className="text-center text-sm text-slate-600 mt-6">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}