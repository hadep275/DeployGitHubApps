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
      case 8:
        return <Step8 />;
      case 9:
        return <Step9 />;
  
      default:
        return null;
    }
  };

const Step9 = () => {
  return (
    <div className="container">
      <h2>Step 9: Deploy To GitHub Pages</h2>
      <p>Now, deploy your React app to GitHub Pages using the following command:</p>
      <pre>
        {`npm run deploy`}
      </pre>
      <p>This command will build your app and deploy it to the GitHub Pages branch specified in your <code>package.json</code>.</p>
    </div>
  );
};

export default Step9;
