"use client";

import Link from "next/link";
import { useState } from "react";
import { apiRequest } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user", 
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (form.password !== form.confirmPassword) {
      setErrorMsg("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const data = await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          role: form.role,
          password: form.password,
        }),
      });

      setSuccessMsg("Account created successfully!");
      setTimeout(() => router.push("/auth/login"), 1000);

    } catch (err: any) {
      setErrorMsg(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
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
        <p className="text-center text-slate-500 mt-1 mb-6">
          Join us today and get started
        </p>

        
        {errorMsg && (
          <p className="text-red-600 text-center text-sm mb-3">{errorMsg}</p>
        )}

       
        {successMsg && (
          <p className="text-green-600 text-center text-sm mb-3">
            {successMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full text-black mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

         
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full mt-1 text-black px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
          <div>
            <label className="text-sm font-medium text-slate-700">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full text-black mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

         
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a strong password"
              className="w-full text-black mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
          <div>
            <label className="text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full text-black mt-1 px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-3 
              transition-all font-medium
              ${loading ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        
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