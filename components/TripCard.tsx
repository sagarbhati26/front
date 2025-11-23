// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// interface TripCardProps {
//   id: number;
//   title: string;
//   time: string;
//   seats: number;
//   date: string;
//   price: number;
//   oldPrice?: number;
//   reviews: number;
//   image: string;
//   isPopular?: boolean;
//   isOffer?: boolean;
// }

// export default function TripCard({
//   id,
//   title,
//   time,
//   seats,
//   date,
//   price,
//   oldPrice,
//   reviews,
//   image,
//   isPopular,
//   isOffer,
// }: TripCardProps) {
//   const router = useRouter();

//   return (
//     <div className="trip-card">
//       <div className="trip-img-wrapper">
//         <Image src={image} alt={title} fill className="trip-img" />

//         {isPopular && <span className="badge-left">Popular</span>}
//         {isOffer && <span className="badge-right">25% OFF</span>}
//       </div>

//       <div className="trip-body">
//         <div className="rating-row">
//           <div className="stars">★★★★★</div>
//           <span className="reviews">({reviews} reviews)</span>
//         </div>

//         <h3 className="text-black trip-title">{title}</h3>

//         <div className="text-black trip-details">
//           <div className="detail-row"><span>⏱</span> {time}</div>
//           <div className="detail-row"><span>👥</span> {seats} seats available</div>
//           <div className="detail-row"><span>📅</span> {date}</div>
//         </div>

//         <div className="bottom-row">
//           <div className="text-black price">${price}</div>
//           {oldPrice && <del className="old-price">${oldPrice}</del>}

//           <button
//             onClick={() => router.push(`/trip/${id}`)}
//             className="book-btn"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "../app/home/home.css";

interface TripCardProps {
  id: string;
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

export default function TripCard({
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
}: TripCardProps) {
  const router = useRouter();

  return (
    <div className="trip-card">
      <div className="trip-img-wrapper">
        <Image src={image} alt={title} fill className="trip-img" />

        {isPopular && <span className="badge-popular">Popular</span>}
        {isOffer && <span className="badge-offer">25% OFF</span>}
      </div>

      <div className="trip-details">
        <div className="rating-row">
          <div className="stars">★★★★★</div>
          <span className="reviews">({reviews} reviews)</span>
        </div>

        <h3 className="trip-title">{title}</h3>

        <div className="trip-info">
          <p>⏱ {time}</p>
          <p>👥 {seats} seats available</p>
          <p>📅 {date}</p>
        </div>

        <div className="trip-footer">
          <div>
            <span className="new-price">${price}</span>
            {oldPrice && <span className="old-price">${oldPrice}</span>}
          </div>

          <button
            onClick={() => router.push(`/trip/${id}`)}
            className="trip-btn"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}