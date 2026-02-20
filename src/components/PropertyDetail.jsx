import React, { useState } from "react";
import { hosts, reviews as allReviews } from "../data/propertyData";

/**
 * Property detail view component
 * Shows full property information with booking card
 */
function PropertyDetail({ property, onBack }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [nights, setNights] = useState(5);

  const host = hosts.find((h) => h.id === property.hostId);
  const propertyReviews = allReviews.filter(
    (r) => r.propertyId === property.id
  );

  const handleReserve = () => {
    alert(
      `Booking ${property.title} for ${nights} nights at $${property.price * nights}`
    );
  };

  const serviceFee = Math.round(property.price * nights * 0.14);
  const total = property.price * nights + serviceFee;

  return (
    <div className="property-detail">
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        ← Back to results
      </button>

      <div className="detail-header">
        <h1 className="detail-title">{property.title}</h1>
        <div className="detail-subtitle">
          <span>★ {property.rating}</span>
          <span>·</span>
          <span>{property.reviews} reviews</span>
          <span>·</span>
          <span>{property.location}</span>
        </div>
      </div>

      <div className="detail-images">
        <div
          className="detail-image-main"
          style={{ background: property.image }}
        >
          {property.title.charAt(0)}
        </div>
        <div
          className="detail-image-secondary"
          style={{ background: property.image }}
        />
        <div
          className="detail-image-secondary"
          style={{ background: property.image }}
        />
        <div
          className="detail-image-secondary"
          style={{ background: property.image }}
        />
        <div
          className="detail-image-secondary"
          style={{ background: property.image }}
        />
      </div>

      <div className="detail-content">
        <div className="detail-main">
          <div className="host-info-bar">
            <h2 className="host-title">
              {property.type} hosted by {host?.name}
            </h2>
            <div className="host-meta">
              <span>{property.guests} guests</span>
              <span>·</span>
              <span>{property.bedrooms} bedrooms</span>
              <span>·</span>
              <span>{property.beds} beds</span>
              <span>·</span>
              <span>{property.baths} baths</span>
            </div>
            <div className="host-details">
              <div
                className="host-avatar-large"
                style={{ background: host?.color }}
              >
                {host?.avatar}
              </div>
              <div className="host-info-text">
                <div className="host-name">Hosted by {host?.name}</div>
                {property.isSuperhost && (
                  <div className="host-badge">⭐ Superhost</div>
                )}
              </div>
            </div>
          </div>

          <div className="property-features">
            <div className="feature-item">
              <span className="feature-icon">🏠</span>
              <div className="feature-text">
                <div className="feature-title">Entire place</div>
                <div className="feature-description">
                  You'll have the entire property to yourself
                </div>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <div className="feature-text">
                <div className="feature-title">Enhanced Clean</div>
                <div className="feature-description">
                  Committed to enhanced cleaning process
                </div>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <div className="feature-text">
                <div className="feature-title">Great location</div>
                <div className="feature-description">
                  95% of recent guests gave the location a 5-star rating
                </div>
              </div>
            </div>
          </div>

          <div className="property-description">
            <p className="description-text">{property.description}</p>
          </div>

          <div className="amenities-section">
            <h3 className="section-title">What this place offers</h3>
            <div className="amenities-grid">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  ✓ {amenity}
                </div>
              ))}
            </div>
          </div>

          {propertyReviews.length > 0 && (
            <div className="reviews-section">
              <div className="reviews-header">
                <span style={{ fontSize: "22px", fontWeight: 600 }}>
                  ★ {property.rating}
                </span>
                <span style={{ fontSize: "22px", fontWeight: 600 }}>
                  · {property.reviews} reviews
                </span>
              </div>
              <div className="reviews-grid">
                {propertyReviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div
                        className="reviewer-avatar"
                        style={{
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      >
                        {review.userAvatar}
                      </div>
                      <div className="reviewer-info">
                        <div className="reviewer-name">{review.userName}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="booking-card">
            <div className="booking-price">
              <span className="booking-amount">${property.price}</span>
              <span className="booking-period"> night</span>
            </div>

            <div className="booking-dates">
              <div
                className="date-input"
                onClick={() => setCheckIn(new Date().toLocaleDateString())}
              >
                {checkIn || "Check-in"}
              </div>
              <div
                className="date-input"
                onClick={() => {
                  const date = new Date();
                  date.setDate(date.getDate() + nights);
                  setCheckOut(date.toLocaleDateString());
                }}
              >
                {checkOut || "Checkout"}
              </div>
            </div>

            <div
              className="guest-selector"
              onClick={() => {
                const newCount = (guestCount % property.guests) + 1;
                setGuestCount(newCount);
              }}
            >
              {guestCount} guest{guestCount > 1 ? "s" : ""}
            </div>

            <button className="reserve-btn" onClick={handleReserve}>
              Reserve
            </button>

            <p className="booking-note">You won't be charged yet</p>

            <div className="price-breakdown">
              <div className="price-row">
                <span className="price-label">
                  ${property.price} x {nights} nights
                </span>
                <span className="price-value">${property.price * nights}</span>
              </div>
              <div className="price-row">
                <span className="price-label">Service fee</span>
                <span className="price-value">${serviceFee}</span>
              </div>
              <div className="price-row price-total">
                <span className="price-label">Total</span>
                <span className="price-value">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
