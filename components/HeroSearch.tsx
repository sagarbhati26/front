"use client";

export default function HeroSearch() {
  return (
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
              <input type="text" placeholder="Arrival Location" />
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
  );
}