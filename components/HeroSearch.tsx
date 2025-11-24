
"use client";

export default function HeroSearch({ setFilters, onSearch }: any) {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1 className="text-black hero-title">Find Your Next Journey</h1>
        <p className="hero-subtitle text-black">
          Discover available trips and book your seats with ease.
        </p>

        <div className="text-black search-card">

       
          <div className="input-group">
            <label>From</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Departure Location"
                onChange={(e) =>
                  setFilters((prev: any) => ({
                    ...prev,
                    from: e.target.value,
                  }))
                }
              />
            </div>
          </div>

      
          <div className="input-group">
            <label>To</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Arrival Location"
                onChange={(e) =>
                  setFilters((prev: any) => ({
                    ...prev,
                    to: e.target.value,
                  }))
                }
              />
            </div>
          </div>

       
          <div className="input-group">
            <label>Date</label>
            <input
              type="date"
              onChange={(e) =>
                setFilters((prev: any) => ({
                  ...prev,
                  date: e.target.value,
                }))
              }
            />
          </div>

          
          <button className="search-btn" onClick={onSearch}>
            Search Trips
          </button>
        </div>

      </div>
    </section>
  );
}