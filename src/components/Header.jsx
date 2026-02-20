import React, { useState } from "react";

/**
 * Header component with logo, search bar, and user menu
 */
function Header({ onSearch }) {
  const [searchLocation, setSearchLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    onSearch({
      location: searchLocation,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <a href="/" className="logo">
          <span className="logo-icon">🏠</span>
          <span>airbnb</span>
        </a>

        <div className="search-bar" onClick={handleSearch}>
          <div className="search-section">
            <label className="search-label">Anywhere</label>
            <input
              type="text"
              className="search-input"
              placeholder="Search destinations"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="search-section">
            <label className="search-label">Any week</label>
            <input
              type="text"
              className="search-input"
              placeholder="Add dates"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="search-section">
            <label className="search-label">Add guests</label>
            <input
              type="text"
              className="search-input"
              placeholder="Add guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
        </div>

        <div className="header-actions">
          <a href="#host" className="host-link">
            Airbnb your home
          </a>
          <button className="user-menu-btn" aria-label="User menu">
            <span className="hamburger-icon">☰</span>
            <div className="user-avatar">U</div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
