import React from 'react';
import { SunIcon, MoonIcon, PlusIcon, TrashIcon } from 'lucide-react';
import './Routine.css';

const Routine = ({ navigateTo, userProfile, openProductDetail }) => {
  const routineSteps = {
    morning: [
      { step: 1, category: 'cleanser', product: userProfile.routines.morning.find(p => p.category === 'cleanser') },
      { step: 2, category: 'toner', product: userProfile.routines.morning.find(p => p.category === 'toner') },
      { step: 3, category: 'serum', product: userProfile.routines.morning.find(p => p.category === 'serum') },
      { step: 4, category: 'moisturizer', product: userProfile.routines.morning.find(p => p.category === 'moisturizer') },
      { step: 5, category: 'sunscreen', product: userProfile.routines.morning.find(p => p.category === 'sunscreen') }
    ],
    evening: [
      { step: 1, category: 'cleanser', product: userProfile.routines.evening.find(p => p.category === 'cleanser') },
      { step: 2, category: 'exfoliator', product: userProfile.routines.evening.find(p => p.category === 'exfoliator') },
      { step: 3, category: 'serum', product: userProfile.routines.evening.find(p => p.category === 'serum') },
      { step: 4, category: 'moisturizer', product: userProfile.routines.evening.find(p => p.category === 'moisturizer') }
    ]
  };

  const RoutineSection = ({ title, icon, steps, timeOfDay }) => (
    <div className="routine-section">
      <div className="routine-header">
        <div className="routine-title">
          {icon}
          <h2>{title}</h2>
        </div>
        <button className="customize-button">
          Customize
        </button>
      </div>
      
      <div className="routine-steps">
        {steps.map(({ step, category, product }) => (
          <div key={step} className="routine-step">
            <div className="step-number">{step}</div>
            <div className="step-content">
              <h3 className="step-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              {product ? (
                <div 
                  className="step-product"
                  onClick={() => openProductDetail(product)}
                >
                  <div className="product-thumbnail">
                    <div className="product-image-placeholder">
                      Image
                    </div>
                  </div>
                  <div className="product-details">
                    <p className="product-name">{product.name}</p>
                    <p className="product-category">{category}</p>
                  </div>
                </div>
              ) : (
                <button 
                  className="add-product-button"
                  onClick={() => navigateTo('discover')}
                >
                  <PlusIcon size={16} />
                  Add {category}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="routine">
      <div className="routine-container">
        <div className="routine-hero">
          <h1 className="routine-main-title">My Skincare Routine</h1>
          <p className="routine-subtitle">
            Your personalized routine based on {userProfile.skinType} skin with {userProfile.skinConcerns.join(', ')} concerns
          </p>
        </div>

        <div className="routines-grid">
          <RoutineSection 
            title="Morning Routine"
            icon={<SunIcon size={24} className="routine-icon" />}
            steps={routineSteps.morning}
            timeOfDay="morning"
          />
          
          <RoutineSection 
            title="Evening Routine"
            icon={<MoonIcon size={24} className="routine-icon" />}
            steps={routineSteps.evening}
            timeOfDay="evening"
          />
        </div>

        <div className="routine-tips">
          <h2>Routine Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Morning Focus</h3>
              <p>Start with gentle cleansing, hydrate, and always apply sunscreen to protect your skin throughout the day.</p>
            </div>
            <div className="tip-card">
              <h3>Evening Care</h3>
              <p>Remove the day's buildup with proper cleansing, apply active ingredients, and seal in moisture while you sleep.</p>
            </div>
            <div className="tip-card">
              <h3>Consistency is Key</h3>
              <p>Follow your routine daily for best results. It typically takes 6-8 weeks to see significant changes in your skin.</p>
            </div>
          </div>
        </div>

        <div className="routine-actions">
          <button 
            className="secondary-button"
            onClick={() => navigateTo('quiz')}
          >
            Retake Quiz
          </button>
          <button 
            className="primary-button"
            onClick={() => navigateTo('discover')}
          >
            Find More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Routine;