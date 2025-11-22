"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TripCard(props: { id: any; title: any; time: any; seats: any; date: any; price: any; oldPrice: any; reviews: any; image: any; isPopular: any; isOffer: any; }) {
  const {
    id,
    title,
    time,
    seats,
    date,
    price,
    oldPrice,
    reviews,
    image,
    isPopular,
    isOffer,
  } = props;

  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/bookings/${id}`);
  };

  return (
    <div className="trip-card">

      <div className="trip-img-wrapper">
        <Image src={image} alt={title} fill className="trip-img" />

        {isPopular && <span className="badge-left">Popular</span>}
        {isOffer && <span className="badge-right">25% OFF</span>}
      </div>

      <div className="trip-body">
        <div className="rating-row">
          <div className="stars">★★★★★</div>
          <span className="reviews">({reviews} reviews)</span>
        </div>

        <h3 className="trip-title">{title}</h3>

        <div className="trip-details">
          <div className="detail-row"><span>⏱</span> {time}</div>
          <div className="detail-row"><span>👥</span> {seats} seats available</div>
          <div className="detail-row"><span>📅</span> {date}</div>
        </div>

        <div className="bottom-row">
          <div className="price">${price}</div>
          {oldPrice && <del className="old-price">${oldPrice}</del>}

          <button onClick={handleBookNow} className="book-btn">
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}