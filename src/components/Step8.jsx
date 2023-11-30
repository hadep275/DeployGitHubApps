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
  
      default:
        return null;
    }
  };

const Step8 = () => {
  return (
    <div className="container">
      <h2>Step 8: Push to GitHub</h2>
      <p>If your repository is not already set up on GitHub, initiate the connection and push the changes:</p>
      <pre>
        {`git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main`}
      </pre>
      <p>Replace <code>your-username</code> and <code>your-repo-name</code> with your GitHub username and repository name.</p>
    </div>
  );
};

export default Step8;
