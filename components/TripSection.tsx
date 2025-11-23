"use client";

import TripCard from "./TripCard";
interface Trip {
    id:number;
    title: string;
    time: string;
    seats: number;
    date: string;
    price: number;
    oldPrice?: number;
    reviews: number;
    image: string;
    isPopular?: boolean;
    isOffer?: boolean;
  }
  
  interface TripsSectionProps {
    trips: Trip[];
  }
  export default function TripsSection({ trips }: TripsSectionProps) {
  return (
    <section className="text-black trips-section">
      <h2 className="available-title">Available Trips</h2>
      <p className="available-subtitle">
        Choose from our carefully selected destinations and enjoy a comfortable journey.
      </p>

      <div className="trip-grid">
        {trips.map((t, index) => (
          <TripCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}