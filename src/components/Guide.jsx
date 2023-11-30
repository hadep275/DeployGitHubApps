import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


const Guide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;

      default:
        return null;
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div>
      {renderStep()}
      <div>
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentStep === totalSteps}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Guide;
