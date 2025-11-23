import BookingCard from "./BookingCard";

export default function UpcomingBookings({ bookings }: any) {
  const list = bookings ?? []; 

  return (
    <div className="w-full mb-10">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Upcoming Bookings
      </h2>

      {list.length === 0 && (
        <p className="text-gray-500 text-sm">No upcoming trips.</p>
      )}

      <div className="grid grid-cols-2 gap-6">
        {list.map((b: any) => (
          <BookingCard
            key={b._id}
            booking={{
              id: b._id,
              status: b.status,
              route: `${b.trip.from} → ${b.trip.to}`,
              date: b.trip.rawDateTime,
              time: `${b.trip.departTime} - ${b.trip.arriveTime}`,
              seats: b.seats.join(", "),
            }}
          />
        ))}
      </div>
    </div>
  );
}