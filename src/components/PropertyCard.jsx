import React from "react";

/**
 * Property card component for grid display
 */
function PropertyCard({ property, onSelect, onFavorite, isFavorited }) {
  return (
    <div className="property-card" onClick={() => onSelect(property)}>
      <div className="property-image-wrapper">
        <div
          className="property-image"
          style={{ background: property.image }}
        >
          {property.title.charAt(0)}
        </div>
        <button
          className={`favorite-btn ${isFavorited ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(property.id);
          }}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="property-info">
        <div className="property-header">
          <div className="property-location">{property.location}</div>
          <div className="property-rating">
            <span className="star-icon">★</span>
            <span>{property.rating}</span>
          </div>
        </div>
        <div className="property-type">{property.type}</div>
        <div className="property-details">
          {property.guests} guests · {property.bedrooms} bedroom
          {property.bedrooms > 1 ? "s" : ""} · {property.beds} bed
          {property.beds > 1 ? "s" : ""}
        </div>
        <div className="property-price">
          <span className="price-amount">${property.price}</span>
          <span className="price-period"> night</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
