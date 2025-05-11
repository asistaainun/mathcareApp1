import React, { useState } from 'react';
import { FilterIcon, SearchIcon, StarIcon } from 'lucide-react';
import { MOCK_DATA } from '../../data/mockData';
import './ProductDiscovery.css';

const ProductDiscovery = ({ navigateTo, openProductDetail, openIngredientDetail, userProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConcern, setSelectedConcern] = useState('all');
  const [sortBy, setSortBy] = useState('matchScore');

  const categories = ['all', 'cleanser', 'toner', 'serum', 'moisturizer', 'sunscreen'];
  const concerns = ['all', ...MOCK_DATA.skinConcerns.map(c => c.name.toLowerCase())];

  // Filter and sort products
  let filteredProducts = MOCK_DATA.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesConcern = selectedConcern === 'all' || product.concerns.includes(selectedConcern.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesConcern;
  });

  // Sort products
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'matchScore':
        return b.matchScore - a.matchScore;
      case 'rating':
        return b.rating - a.rating;
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="product-discovery">
      <div className="discovery-header">
        <h1 className="discovery-title">Product Discovery</h1>
        <p className="discovery-subtitle">Find the perfect products for your skincare routine</p>
      </div>

      <div className="discovery-filters">
        <div className="search-container">
          <SearchIcon size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <select 
            value={selectedConcern} 
            onChange={(e) => setSelectedConcern(e.target.value)}
            className="filter-select"
          >
            {concerns.map(concern => (
              <option key={concern} value={concern}>
                {concern.charAt(0).toUpperCase() + concern.slice(1)}
              </option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="matchScore">Best Match</option>
            <option value="rating">Highest Rated</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="results-summary">
        <p>{filteredProducts.length} products found</p>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => openProductDetail(product)}
          >
            <div className="product-image-container">
              <div className="product-image">Product Image</div>
              {product.matchScore > 85 && (
                <div className="match-badge">
                  {product.matchScore}% Match
                </div>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">{product.brand}</p>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "#FFC107" : "none"}
                      stroke={i < Math.floor(product.rating) ? "none" : "#FFC107"}
                    />
                  ))}
                </div>
                <span className="review-count">({product.reviewCount})</span>
              </div>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-concerns">
                {product.concerns.slice(0, 2).map((concern, idx) => (
                  <span key={idx} className="concern-tag">{concern}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
          <p>Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProductDiscovery;