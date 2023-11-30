import React from 'react';

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
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
  
      default:
        return null;
    }
  };

const Step7 = () => {
  return (
    <div className="container">
      <h2>Step 7: Add and Commit Updated Files</h2>
      <p>After making changes to <code>package.json</code> and <code>vite.config.js</code>, add and commit the updated files:</p>
      <pre>
        {`git add .
git commit -m "First Commit"`}
      </pre>
    </div>
  );
};

export default Step7;
