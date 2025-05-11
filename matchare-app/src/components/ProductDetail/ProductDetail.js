import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = ({ product, navigateTo, openProductDetail, openIngredientDetail }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigateTo('discover')} className="back-button">
          <ArrowLeftIcon size={20} /> Back to Discovery
        </button>
        
        <div className="product-detail-grid">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-brand">{product.brand}</p>
            <div className="product-detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>
            <p className="product-detail-price">${product.price}</p>
            <div className="match-score">
              <span className="match-label">Match Score:</span>
              <span className="match-value">{product.matchScore}%</span>
            </div>
            
            <div className="product-details">
              <h3>Key Ingredients</h3>
              <div className="ingredients-list">
                {product.keyIngredients.map((ingredient, idx) => (
                  <span key={idx} className="ingredient-tag" onClick={() => {
                    // Find full ingredient data and open detail
                    openIngredientDetail({ name: ingredient });
                  }}>
                    {ingredient}
                  </span>
                ))}
              </div>
              
              <h3>Best For</h3>
              <div className="concerns-list">
                {product.concerns.map((concern, idx) => (
                  <span key={idx} className="concern-tag">{concern}</span>
                ))}
              </div>
              
              <h3>Suitable For</h3>
              <div className="skin-types-list">
                {product.suitableFor.map((skinType, idx) => (
                  <span key={idx} className="skin-type-tag">{skinType}</span>
                ))}
              </div>
            </div>
            
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;