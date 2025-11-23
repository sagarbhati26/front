"use client";
import { useState } from "react";
import OverviewCards from "@/components/admin/OverviewCards";
import TripTable from "@/components/admin/TripTable";
import BookingTable from "@/components/admin/BookingTable";
import AddTripModal from "@/components/admin/AddTripModal";

export default function AdminPage() {
  const [openAddTrip, setOpenAddTrip] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [reloadTrips, setReloadTrips] = useState(0);

  const handleAddTrip = () => {
    setEditingTrip(null);
    setOpenAddTrip(true);
  };

  const handleEditTrip = (trip:any) => {
    setEditingTrip(trip);
    setOpenAddTrip(true);
  };

  const handleSuccess = () => {
    setOpenAddTrip(false);
    setEditingTrip(null);
    setReloadTrips((prev) => prev + 1); 
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center">
      <div className="w-full max-w-7xl px-6 py-10">
        <h1 className="text-[28px] font-semibold text-slate-900 mb-6">
          Admin Dashboard
        </h1>

        <OverviewCards 
        reload={reloadTrips} />

        <TripTable
          reload={reloadTrips}
          onAddTrip={handleAddTrip}
          onEditTrip={handleEditTrip}
        />

        <BookingTable />

        {openAddTrip && (
          <AddTripModal
            onClose={() => setOpenAddTrip(false)}
            onSuccess={handleSuccess}
            editingTrip={editingTrip}
          />
        )}
      </div>
    </div>
  );
}