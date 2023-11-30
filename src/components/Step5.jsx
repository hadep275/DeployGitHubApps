import React from 'react'
import Step3 from './Step3';
const renderStep = () => {

    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      
  
      default:
        return null;
    }
  };
const Step5 = () => {
  return (
    <div className="container">
      <h2>Step 5: Update vite.config.js</h2>
      <p>If you are using Vite for your project, configure the <code>vite.config.js</code> file to set the base:</p>
      <pre>
        {`// vite.config.js
export default {
  base: '/your-repo-name/', // Replace with your repository name
}`}
      </pre>
      <p>Ensure that the <code>base</code> property matches your repository name.</p>
    </div>
  )
}

export default Step5
