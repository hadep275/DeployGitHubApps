import React from 'react';

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
  

const Step3 = () => {
  return (
    <div className="container">
      <h2>Step 3: Install gh-pages Package</h2>
      <p>Install the gh-pages package to simplify deployment:</p>
      <code>npm install gh-pages --save-dev</code>
      <p>Ready for the next step?</p>
    </div>
  );
};

export default Step3;
