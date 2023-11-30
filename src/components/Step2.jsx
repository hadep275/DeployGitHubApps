import React from 'react';

const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
  
      default:
        return null;
    }
  };
  

const Step2 = () => {
  return (
    <div className="container">
      <h2>Step 2: Build Your React App</h2>
      <p>Now, let's build your React app for production:</p>
      <code>npm run build</code>
      <p>This command will generate a production-ready build in the 'build' folder.</p>
      <p>Ready for the next step?</p>
    </div>
  );
};

export default Step2;
