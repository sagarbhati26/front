import PastBookings from "@/components/profile/PastBookings";
import UpcomingBookings from "@/components/profile/UpcomingBookings";

export default function MyBookingsPage() {
    return <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
          <div className="w-full max-w-6xl px-6 py-10">
            <UpcomingBookings />
            <PastBookings />
          </div>
        </div>
  }