import React, { useState } from 'react';
import { ChevronRightIcon, CheckCircleIcon } from 'lucide-react';
import './Quiz.css';

const Quiz = ({ navigateTo, userProfile, setUserProfile }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    skinType: '',
    skinConcerns: [],
    sensitivities: [],
    routineLevel: '',
    budget: ''
  });

  const quizSteps = [
    {
      id: 'skinType',
      question: 'What is your skin type?',
      options: [
        { value: 'normal', label: 'Normal' },
        { value: 'oily', label: 'Oily' },
        { value: 'dry', label: 'Dry' },
        { value: 'combination', label: 'Combination' },
        { value: 'sensitive', label: 'Sensitive' }
      ],
      type: 'single'
    },
    {
      id: 'skinConcerns',
      question: 'What are your main skin concerns?',
      options: [
        { value: 'acne', label: 'Acne' },
        { value: 'hyperpigmentation', label: 'Hyperpigmentation' },
        { value: 'aging', label: 'Aging & Fine Lines' },
        { value: 'dryness', label: 'Dryness' },
        { value: 'sensitivity', label: 'Sensitivity' },
        { value: 'oiliness', label: 'Excess Oil' }
      ],
      type: 'multiple'
    },
    {
      id: 'sensitivities',
      question: 'Do you have any known sensitivities?',
      options: [
        { value: 'fragrance', label: 'Fragrance' },
        { value: 'alcohol', label: 'Alcohol' },
        { value: 'essential-oils', label: 'Essential Oils' },
        { value: 'none', label: 'No Known Sensitivities' }
      ],
      type: 'multiple'
    }
  ];

  const currentStepData = quizSteps[currentStep];

  const handleAnswer = (value) => {
    if (currentStepData.type === 'single') {
      setFormData(prev => ({
        ...prev,
        [currentStepData.id]: value
      }));
    } else {
      setFormData(prev => {
        const currentValues = prev[currentStepData.id] || [];
        if (currentValues.includes(value)) {
          return {
            ...prev,
            [currentStepData.id]: currentValues.filter(v => v !== value)
          };
        } else {
          return {
            ...prev,
            [currentStepData.id]: [...currentValues, value]
          };
        }
      });
    }
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete quiz and update user profile
      setUserProfile(prev => ({
        ...prev,
        skinType: formData.skinType,
        skinConcerns: formData.skinConcerns,
        sensitivities: formData.sensitivities
      }));
      navigateTo('discover');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    if (currentStepData.type === 'single') {
      return formData[currentStepData.id] !== '';
    } else {
      return formData[currentStepData.id]?.length > 0;
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            Step {currentStep + 1} of {quizSteps.length}
          </span>
        </div>

        <div className="quiz-content">
          <h1 className="quiz-question">{currentStepData.question}</h1>
          
          <div className="quiz-options">
            {currentStepData.options.map(option => (
              <button
                key={option.value}
                className={`quiz-option ${
                  currentStepData.type === 'single' 
                    ? formData[currentStepData.id] === option.value ? 'selected' : ''
                    : formData[currentStepData.id]?.includes(option.value) ? 'selected' : ''
                }`}
                onClick={() => handleAnswer(option.value)}
              >
                <span className="option-text">{option.label}</span>
                {(currentStepData.type === 'single' 
                  ? formData[currentStepData.id] === option.value
                  : formData[currentStepData.id]?.includes(option.value)) && (
                  <CheckCircleIcon size={20} className="check-icon" />
                )}
              </button>
            ))}
          </div>

          <div className="quiz-navigation">
            {currentStep > 0 && (
              <button onClick={handleBack} className="back-button">
                Back
              </button>
            )}
            <button 
              onClick={handleNext} 
              className="next-button"
              disabled={!isStepComplete()}
            >
              {currentStep === quizSteps.length - 1 ? 'Complete' : 'Next'}
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;