import React from "react";
import { categories } from "../data/propertyData";

/**
 * Categories bar for filtering properties
 */
function CategoriesBar({ activeCategory, onCategorySelect }) {
  return (
    <div className="categories-bar">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category-item ${activeCategory === category.id ? "active" : ""}`}
          onClick={() => onCategorySelect(category.id)}
          role="button"
          tabIndex={0}
        >
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoriesBar;
