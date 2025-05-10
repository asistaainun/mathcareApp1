import React from 'react';
import { UserIcon, SearchIcon, CheckCircleIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import { MOCK_DATA } from '../../data/mockData';
import './Home.css';

const Home = ({ navigateTo, openProductDetail, openIngredientDetail }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find your perfect skincare match</h1>
          <p className="hero-subtitle">Discover personalized skincare recommendations based on science, not hype. Let our AI-powered system analyze your unique skin needs.</p>
          <button 
            onClick={() => navigateTo('quiz')} 
            className="hero-button"
          >
            Take the Skin Quiz
          </button>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon-container">
            <UserIcon size={24} />
          </div>
          <h3 className="feature-title">Personalized Recommendations</h3>
          <p className="feature-description">Get product suggestions tailored to your specific skin type, concerns, and sensitivities.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-container">
            <SearchIcon size={24} />
          </div>
          <h3 className="feature-title">Ingredient Analysis</h3>
          <p className="feature-description">Understand what's in your products and how they work for your specific skin concerns.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon-container">
            <CheckCircleIcon size={24} />
          </div>
          <h3 className="feature-title">Smart Routine Building</h3>
          <p className="feature-description">Create effective skincare routines with products that work well together.</p>
        </div>
      </div>
      
      {/* Top Product Recommendations */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Top Matches</h2>
          <button 
            onClick={() => navigateTo('discover')}
            className="section-link"
          >
            View all <ChevronRightIcon size={20} />
          </button>
        </div>
        
        <div className="product-grid">
          {MOCK_DATA.products.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => openProductDetail(product)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.matchScore > 90 && (
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
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skin Concerns Section */}
      <div className="section">
        <h2 className="section-title">Browse by Skin Concern</h2>
        <div className="concerns-grid">
          {MOCK_DATA.skinConcerns.map(concern => (
            <div 
              key={concern.id}
              className="concern-card"
              onClick={() => navigateTo('discover')}
            >
              <h3 className="concern-name">{concern.name}</h3>
              <p className="concern-description">{concern.description}</p>
              <div className="ingredients-preview">
                {concern.recommendedIngredients.slice(0, 2).map((ing, idx) => (
                  <span key={idx} className="ingredient-tag" onClick={(e) => {
                    e.stopPropagation();
                    const matchingIngredient = MOCK_DATA.ingredients.find(
                      ingredient => ingredient.name === ing
                    );
                    if (matchingIngredient) {
                      openIngredientDetail(matchingIngredient);
                    }
                  }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-content">
          <h2 className="cta-title">Discover your ideal skincare routine</h2>
          <p className="cta-subtitle">Take our comprehensive skin assessment and get a personalized routine based on your unique needs.</p>
          <button 
            onClick={() => navigateTo('quiz')} 
            className="cta-button"
          >
            Start Your Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;