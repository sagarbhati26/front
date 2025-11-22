"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E5E7EB] bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

      
        <div className="grid grid-cols-3 gap-8 text-sm text-gray-700">
          
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <p className="mb-1 cursor-pointer">About Us</p>
            <p className="mb-1 cursor-pointer">Careers</p>
            <p className="cursor-pointer">Contact</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <p className="mb-1 cursor-pointer">Help Center</p>
            <p className="mb-1 cursor-pointer">Safety</p>
            <p className="cursor-pointer">Guidelines</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <p className="mb-1 cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
          </div>

        </div>

        
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2024 TravelPro. All rights reserved.
        </div>

      </div>
    </footer>
  );
}