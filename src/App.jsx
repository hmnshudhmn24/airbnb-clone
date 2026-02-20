import React, { useState } from "react";
import Header from "./components/Header";
import CategoriesBar from "./components/CategoriesBar";
import PropertyCard from "./components/PropertyCard";
import PropertyDetail from "./components/PropertyDetail";
import Footer from "./components/Footer";
import { properties } from "./data/propertyData";
import "./styles.css";

/**
 * Main application component
 * Manages global state and navigation
 */
function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchFilters, setSearchFilters] = useState({});

  /**
   * Handle search from header
   */
  const handleSearch = (filters) => {
    setSearchFilters(filters);
    console.log("Search filters:", filters);
  };

  /**
   * Handle category selection
   */
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  /**
   * Toggle favorite status
   */
  const handleToggleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        return prev.filter((id) => id !== propertyId);
      } else {
        return [...prev, propertyId];
      }
    });
  };

  /**
   * Filter properties based on search and category
   */
  const getFilteredProperties = () => {
    let filtered = properties;

    // Filter by search location
    if (searchFilters.location) {
      filtered = filtered.filter((property) =>
        property.location
          .toLowerCase()
          .includes(searchFilters.location.toLowerCase())
      );
    }

    // Filter by category (can be extended based on category logic)
    if (activeCategory) {
      // Example: filter by category type
      // This is simplified - in real app would have more complex logic
      filtered = filtered;
    }

    return filtered;
  };

  const filteredProperties = getFilteredProperties();

  // Show property detail view
  if (selectedProperty) {
    return (
      <div className="app-container">
        <Header onSearch={handleSearch} />
        <PropertyDetail
          property={selectedProperty}
          onBack={() => setSelectedProperty(null)}
        />
        <Footer />
      </div>
    );
  }

  // Show main property grid
  return (
    <div className="app-container">
      <Header onSearch={handleSearch} />
      <CategoriesBar
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />
      <main className="main-content">
        <div className="properties-grid">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={setSelectedProperty}
              onFavorite={handleToggleFavorite}
              isFavorited={favorites.includes(property.id)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
