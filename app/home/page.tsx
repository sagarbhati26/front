import Navbar from "@/components/Navbar";
import './home.css';
import HeroSearch from "@/components/HeroSearch";
import TripSection from "@/components/TripSection";

export default function HomePage() {

    const trips = [
        {
            id:1,
            title: "Atlanta → Miami",
            time: "2h 15min",
            seats: 15,
            date: "Dec 20, 2024",
            price: 129,
            reviews: 156,
            image: "/atm.png",
            isPopular: false,
            isOffer: false,
        },
        {
            id:2,
            title: "Chicago → Los Angeles",
            time: "5h 45min",
            seats: 8,
            date: "Dec 18, 2024",
            price: 156,
            oldPrice: 198,
            reviews: 89,
            image: "/cla.png",
            isPopular: false,
            isOffer: true,
        },
        {
            id:3,
            title: "New York → Boston",
            time: "4h 30min",
            seats: 14,
            date: "Dec 15, 2024",
            price: 48,
            oldPrice: 84,
            reviews: 124,
            image: "/bny.png",
            isPopular: true,
            isOffer: true,
        },
        {
            id:4,
            title: "Boston → New York",
            time: "4h 30min",
            seats: 12,
            date: "Dec 15, 2024",
            price: 89,
            oldPrice: 119,
            reviews: 124,
            image: "/bny.png",
            isPopular: true,
            isOffer: true,
        },
        {
            id:5,
            title: "Chicago → Los Angeles",
            time: "5h 45min",
            seats: 8,
            date: "Dec 18, 2024",
            price: 156,
            oldPrice: 198,
            reviews: 89,
            image: "/cla.png",
            isPopular: false,
            isOffer: true,
        },
        {
            id:6,
            title: "Atlanta → Miami",
            time: "2h 15min",
            seats: 15,
            date: "Dec 20, 2024",
            price: 129,
            reviews: 156,
            image: "/atm.png",
            isPopular: false,
            isOffer: false,
        },
        
    ];

    return (
        <div>
            <HeroSearch/>
            <TripSection trips={trips} />
        </div>
    );
}