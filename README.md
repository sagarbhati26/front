This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



import Navbar from "@/components/Navbar";
import './home.css';
export default function HomePage() {
    return (
        <div>
            <Navbar />
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Find Your Next Journey</h1>
                    <p className="hero-subtitle">
                        Discover available trips and book your seats with ease.
                    </p>

                    <div className="search-card">
                        <div className="input-group">
                            <label>From</label>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Departure Location" />
                                <span className="input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#6b7280"
                                        className="icon-svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 22s7-7.373 7-12a7 7 0 10-14 0c0 4.627 7 12 7 12z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>To</label>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Arival Location" />
                                <span className="input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#6b7280"
                                        className="icon-svg">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 22s7-7.373 7-12a7 7 0 10-14 0c0 4.627 7 12 7 12z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Date</label>
                            <input type="date" />
                        </div>

                        <button className="search-btn">Search Trips</button>
                    </div>
                </div>
            </section>
            <section className="trips-section">
            <h2 className="available-title">Available Trips</h2>
<p className="available-subtitle">
  Choose from our carefully selected destinations and enjoy a comfortable journey.
</p>

  <div className="trip-grid">

    
    <div className="trip-card">

      <div className="trip-image-wrapper">
        <img src="" className="trip-image" />

        <span className="badge badge-popular">Popular</span>
        <span className="badge badge-offer">25% OFF</span>
      </div>

      <div className="trip-details">

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(156 reviews)</span>
        </div>

        <h3 className="trip-title">Atlanta → Miami</h3>

        <div className="trip-info">
          <p>🕒 2h 15min</p>
          <p>💺 15 seats available</p>
          <p>📅 Dec 20, 2024</p>
        </div>

        <div className="trip-footer">
          <div className="trip-price">
            <span className="new-price">$129</span>
          </div>

          <button className="trip-btn">Book Now</button>
        </div>
      </div>

    </div>

  </div>
</section>

        </div>
    );
} ye h mera home page