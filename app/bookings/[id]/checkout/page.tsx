"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const { id } = useParams() as { id?: string };
    const params = useSearchParams();
    const seats = params.get("seats") || "";
    const total = params.get("total") || "0";
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
    });
    const validateFullName = (v: string) => {
        if (!/^[A-Za-z ]+$/.test(v)) return "Only alphabets are allowed";
        if (v.trim().length < 3) return "Name must be at least 3 characters";
        return "";
    };

    const validateEmail = (v: string) => {
        if (!/^\S+@\S+\.\S+$/.test(v)) return "Enter a valid email";
        return "";
    };

    const validatePhone = (v: string) => {
        if (!/^[0-9]{10}$/.test(v)) return "Enter a valid 10-digit number";
        return "";
    };

    const validateCardNumber = (v: string) => {
        if (!/^[0-9]{16}$/.test(v)) return "Card number must be 16 digits";
        return "";
    };

    const validateCardName = (v: string) => {
        if (!/^[A-Za-z ]+$/.test(v)) return "Only alphabets allowed";
        return "";
    };

    const validateExpiry = (v: string) => {
        if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(v)) return "Format MM/YY";
        return "";
    };

    const validateCVV = (v: string) => {
        if (!/^[0-9]{3}$/.test(v)) return "CVV must be 3 digits";
        return "";
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-28">
            <div className="max-w-6xl mx-auto px-4">

                <h1 className="text-[22px] font-semibold text-gray-900">
                    Checkout & Payment
                </h1>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                            <h2 className="text-[16px] font-semibold text-gray-900">Your Information</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Please provide your contact details for this booking
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-4">
                                <div>
                                    <input
                                        className={`w-full text-black border rounded-lg px-3 py-2 text-sm outline-none 
                    ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => {
                                            setFullName(e.target.value);
                                            setErrors((p) => ({
                                                ...p,
                                                fullName: validateFullName(e.target.value),
                                            }));
                                        }}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        className={`w-full text-black border rounded-lg px-3 py-2 text-sm outline-none 
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors((p) => ({
                                                ...p,
                                                email: validateEmail(e.target.value),
                                            }));
                                        }}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        className={`w-full text-black border rounded-lg px-3 py-2 text-sm outline-none 
                    ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setErrors((p) => ({
                                                ...p,
                                                phone: validatePhone(e.target.value),
                                            }));
                                        }}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
                            <h2 className="text-[16px] font-semibold text-gray-900">Payment Method</h2>

                            <div className=" text-black mt-4 flex flex-col gap-4">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="payment" defaultChecked /> Credit or Debit Card
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input type="radio" name="payment" /> Digital Wallet (PayPal, Apple Pay)
                                </label>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-4">

                                <div className="text-black">
                                    <input
                                        className={`border rounded-lg px-3 py-2 text-sm w-full 
                    ${errors.cardNumber ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Card Number"
                                        value={cardNumber}
                                        onChange={(e) => {
                                            setCardNumber(e.target.value);
                                            setErrors((p) => ({
                                                ...p,
                                                cardNumber: validateCardNumber(e.target.value),
                                            }));
                                        }}
                                    />
                                    {errors.cardNumber && (
                                        <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                                    )}
                                </div>

                        
                                <div className="text-black">
                                    <input
                                        className={`border rounded-lg px-3 py-2 text-sm w-full 
                    ${errors.cardName ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Cardholder Name"
                                        value={cardName}
                                        onChange={(e) => {
                                            setCardName(e.target.value);
                                            setErrors((p) => ({
                                                ...p,
                                                cardName: validateCardName(e.target.value),
                                            }));
                                        }}
                                    />
                                    {errors.cardName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
                                    )}
                                </div>


                                <div className=" text-black grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            className={`border rounded-lg px-3 py-2 text-sm w-full 
                      ${errors.expiry ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="MM/YY"
                                            value={expiry}
                                            onChange={(e) => {
                                                setExpiry(e.target.value);
                                                setErrors((p) => ({
                                                    ...p,
                                                    expiry: validateExpiry(e.target.value),
                                                }));
                                            }}
                                        />
                                        {errors.expiry && (
                                            <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            className={`border rounded-lg px-3 py-2 text-sm w-full 
                      ${errors.cvv ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="CVV"
                                            value={cvv}
                                            onChange={(e) => {
                                                setCvv(e.target.value);
                                                setErrors((p) => ({
                                                    ...p,
                                                    cvv: validateCVV(e.target.value),
                                                }));
                                            }}
                                        />
                                        {errors.cvv && (
                                            <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-6">

                            <div className="w-full h-[90px] rounded-lg bg-linear-to-r from-[#0A1F44] to-[#122B64] flex items-center justify-center">
                                <span className="text-white text-2xl">✈️</span>
                            </div>

                            <div className="mt-6 space-y-3 text-sm text-gray-700">
                                <p><strong>Route:</strong> New York → Boston</p>
                                <p><strong>Date:</strong> 2024-05-15</p>
                                <p><strong>Time:</strong> 10:30 AM</p>
                                <p><strong>Transport:</strong> Flight</p>
                                <p><strong>Seats:</strong> {seats}</p>
                            </div>

                            <div className="mt-6 flex justify-between text-sm">
                                <span className="font-medium text-black">Total Fare:</span>
                                <span className="text-blue-600 font-bold">USD {total}</span>
                            </div>

                            <button
                                onClick={() => {
                                    const hasErrors =
                                        errors.fullName ||
                                        errors.email ||
                                        errors.phone ||
                                        errors.cardNumber ||
                                        errors.cardName ||
                                        errors.expiry ||
                                        errors.cvv;

                                    if (hasErrors) {
                                        alert("Please fix all highlighted errors.");
                                        return;
                                    }

                                    if (
                                        !fullName ||
                                        !email ||
                                        !phone ||
                                        !cardNumber ||
                                        !cardName ||
                                        !expiry ||
                                        !cvv
                                    ) {
                                        alert("Please fill all fields before continuing.");
                                        return;
                                    }

                                    router.push(
                                        `/bookings/${id}/confirmation?seats=${seats}&total=${total}`
                                    );
                                }}
                                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                            >
                                Complete Payment
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}