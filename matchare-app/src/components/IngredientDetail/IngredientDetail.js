import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { MOCK_DATA } from '../../data/mockData';
import './IngredientDetail.css';

const IngredientDetail = ({ ingredient, navigateTo, openProductDetail }) => {
  if (!ingredient) {
    return <div>Ingredient not found</div>;
  }

  // Find the full ingredient data if only passed a name
  const fullIngredient = MOCK_DATA.ingredients.find(
    ing => ing.name === ingredient.name || ing.id === ingredient.id
  ) || ingredient;

  // Find products containing this ingredient
  const relatedProducts = MOCK_DATA.products.filter(product =>
    product.keyIngredients.includes(fullIngredient.name) ||
    product.ingredients.includes(fullIngredient.name)
  );

  return (
    <div className="ingredient-detail">
      <div className="container">
        <button onClick={() => navigateTo('ingredients')} className="back-button">
          <ArrowLeftIcon size={20} /> Back to Ingredients
        </button>
        
        <div className="ingredient-hero">
          <h1 className="ingredient-name">{fullIngredient.name}</h1>
          {fullIngredient.aliases && fullIngredient.aliases.length > 0 && (
            <p className="ingredient-aliases">
              Also known as: {fullIngredient.aliases.join(', ')}
            </p>
          )}
          <p className="ingredient-category">{fullIngredient.category}</p>
        </div>
        
        <div className="ingredient-content">
          <section className="ingredient-section">
            <h2>Description</h2>
            <p>{fullIngredient.description || 'Information about this ingredient will be added soon.'}</p>
          </section>
          
          {fullIngredient.functions && (
            <section className="ingredient-section">
              <h2>Key Functions</h2>
              <div className="functions-grid">
                {fullIngredient.functions.map((func, idx) => (
                  <div key={idx} className="function-card">
                    {func}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {fullIngredient.efficacyFor && (
            <section className="ingredient-section">
              <h2>Efficacy for Skin Concerns</h2>
              <div className="efficacy-list">
                {fullIngredient.efficacyFor.map((efficacy, idx) => (
                  <div key={idx} className="efficacy-item">
                    <span className="concern">{efficacy.concern}</span>
                    <span className={`level level-${efficacy.level.toLowerCase()}`}>
                      {efficacy.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {fullIngredient.synergisticWith && fullIngredient.synergisticWith.length > 0 && (
            <section className="ingredient-section">
              <h2>Works Well With</h2>
              <div className="synergistic-tags">
                {fullIngredient.synergisticWith.map((ing, idx) => (
                  <span key={idx} className="synergistic-tag">{ing}</span>
                ))}
              </div>
            </section>
          )}
          
          {fullIngredient.incompatibleWith && fullIngredient.incompatibleWith.length > 0 && (
            <section className="ingredient-section">
              <h2>Avoid Combining With</h2>
              <div className="incompatible-tags">
                {fullIngredient.incompatibleWith.map((ing, idx) => (
                  <span key={idx} className="incompatible-tag">{ing}</span>
                ))}
              </div>
            </section>
          )}
          
          {relatedProducts.length > 0 && (
            <section className="ingredient-section">
              <h2>Products Containing {fullIngredient.name}</h2>
              <div className="related-products-grid">
                {relatedProducts.slice(0, 3).map(product => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => openProductDetail(product)}
                  >
                    <div className="product-image-container">
                      <div className="product-image">Product Image</div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-brand">{product.brand}</p>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientDetail;