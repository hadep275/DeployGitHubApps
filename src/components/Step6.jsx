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

    default:
      return null;
  }
};

const Step6 = () => {
  return (
    <div className="container">
      <h2>Step 6: Initialize Git</h2>
      <p>If your project is not already a Git repository, initiate Git and make an initial commit:</p>
      <pre>
        {`git init
  git add .
        git commit -m "Initial commit"`}
      </pre>
    </div>
  );
};

export default Step6;
