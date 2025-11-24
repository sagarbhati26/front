

"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api";

export default function CheckoutPage() {
  const router = useRouter();
  const { id } = useParams() as { id?: string };
  const params = useSearchParams();
  const seatsParam = params.get("seats") || "";
  const total = params.get("total") || "0";

  const seatsArray = seatsParam ? seatsParam.split(",") : [];

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

  const [loading, setLoading] = useState(false);

 

  const validateFullName = (v: string) => {
    if (!/^[A-Za-z ]+$/.test(v)) return "Only alphabets allowed";
    if (v.trim().length < 3) return "Minimum 3 characters";
    return "";
  };

  const validateEmail = (v: string) => {
    if (!/^\S+@\S+\.\S+$/.test(v)) return "Enter a valid email";
    return "";
  };

  const validatePhone = (v: string) => {
    if (!/^[0-9]{10}$/.test(v)) return "Enter 10 digit number";
    return "";
  };

  
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const validateCardNumber = (v: string) => {
    const digits = v.replace(/\D/g, "");
    if (digits.length !== 16) return "Card must be 16 digits";
    return "";
  };

  const validateCardName = (v: string) => {
    if (!/^[A-Za-z ]+$/.test(v)) return "Only alphabets allowed";
    return "";
  };

 
  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);

    if (digits.length === 0) return "";
    if (digits.length <= 2) return digits;
    return digits.slice(0, 2) + "/" + digits.slice(2);
  };

  const validateExpiry = (v: string) => {
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(v)) return "Invalid MM/YY";
    return "";
  };

  const validateCVV = (v: string) => {
    if (!/^[0-9]{3}$/.test(v)) return "3 digits required";
    return "";
  };

  
  const handleCompletePayment = async () => {
    const hasErrors =
      errors.fullName ||
      errors.email ||
      errors.phone ||
      errors.cardNumber ||
      errors.cardName ||
      errors.expiry ||
      errors.cvv;

    if (hasErrors) {
      alert("Fix all errors first.");
      return;
    }

    if (!fullName || !email || !phone || !cardNumber || !cardName || !expiry || !cvv) {
      alert("All fields required.");
      return;
    }

    setLoading(true);
    try {
      const booking = await apiRequest("/booking", {
        method: "POST",
        body: JSON.stringify({
          tripId: id,
          seats: seatsArray,
        }),
      });

      router.push(
        `/bookings/${id}/confirmation?bookingId=${booking._id}&seats=${seatsArray.join(
          ","
        )}&total=${total}`
      );
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-[#F8FAFC] pb-20 pt-28">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-[22px] font-semibold text-gray-900">Checkout & Payment</h1>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          
          <div className="lg:col-span-2 flex flex-col gap-8">

           
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <h2 className="text-[16px] font-semibold">Your Information</h2>

              <div className="mt-6 grid grid-cols-1 gap-4">
                
               
                <div>
                  <input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => {
                      const v = e.target.value;
                      setFullName(v);
                      setErrors((p) => ({ ...p, fullName: validateFullName(v) }));
                    }}
                    className={`w-full border rounded-lg px-3 py-2 text-sm ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                </div>

             
                <div>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      const v = e.target.value;
                      setEmail(v);
                      setErrors((p) => ({ ...p, email: validateEmail(v) }));
                    }}
                    className={`w-full border rounded-lg px-3 py-2 text-sm ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

             
                <div>
                  <input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(v);
                      setErrors((p) => ({ ...p, phone: validatePhone(v) }));
                    }}
                    className={`w-full border rounded-lg px-3 py-2 text-sm ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>

              </div>
            </div>

            
            <div className="bg-white rounded-xl border p-6 shadow-sm text-black">
              <h2 className="text-[16px] font-semibold">Payment Method</h2>

              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-2">
                  <input type="radio" defaultChecked /> Credit or Debit Card
                </label>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">

               
                <div>
                  <input
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => {
                      const formatted = formatCardNumber(e.target.value);
                      setCardNumber(formatted);
                      setErrors((p) => ({
                        ...p,
                        cardNumber: validateCardNumber(formatted),
                      }));
                    }}
                    className={`border rounded-lg px-3 py-2 text-sm w-full ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs">{errors.cardNumber}</p>
                  )}
                </div>

               
                <div>
                  <input
                    placeholder="Name on Card"
                    value={cardName}
                    onChange={(e) => {
                      const v = e.target.value;
                      setCardName(v);
                      setErrors((p) => ({
                        ...p,
                        cardName: validateCardName(v),
                      }));
                    }}
                    className={`border rounded-lg px-3 py-2 text-sm w-full ${
                      errors.cardName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardName && (
                    <p className="text-red-500 text-xs">{errors.cardName}</p>
                  )}
                </div>

              
                <div className="grid grid-cols-2 gap-4">

               
                  <div>
                    <input
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => {
                        const formatted = formatExpiry(e.target.value);
                        setExpiry(formatted);
                        setErrors((p) => ({
                          ...p,
                          expiry: validateExpiry(formatted),
                        }));
                      }}
                      className={`border rounded-lg px-3 py-2 text-sm w-full ${
                        errors.expiry ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.expiry && (
                      <p className="text-red-500 text-xs">{errors.expiry}</p>
                    )}
                  </div>

                  
                  <div>
                    <input
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 3);
                        setCvv(v);
                        setErrors((p) => ({ ...p, cvv: validateCVV(v) }));
                      }}
                      className={`border rounded-lg px-3 py-2 text-sm w-full ${
                        errors.cvv ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv}</p>}
                  </div>

                </div>
              </div>
            </div>
          </div>

      
          <div>
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="w-full h-[90px] rounded-lg bg-linear-to-r from-[#0A1F44] to-[#122B64] flex items-center justify-center">
                <span className="text-white text-2xl">✈️</span>
              </div>

              <div className="mt-6 text-sm text-gray-700 space-y-2">
                <p><strong>Seats:</strong> {seatsParam}</p>
              </div>

              <div className="mt-6 flex justify-between text-sm">
                <span className="font-medium text-black">Total Fare:</span>
                <span className="text-blue-600 font-bold">USD {total}</span>
              </div>

              <button
                onClick={handleCompletePayment}
                disabled={loading}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
              
                {loading ? "Processing..." : "Complete Payment"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}