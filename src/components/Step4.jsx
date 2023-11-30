import React from 'react'
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
  
      default:
        return null;
    }
  };
const Step4 = () => {
  return (
    <div>
      <div className="container">
      <h2>Step 4: Update package.json</h2>
      <p>Edit the <code>package.json</code> file to include deployment scripts and your custom domain:</p>
      <pre>
        {`"homepage": "https://your-username.github.io/your-repo-name",


"scripts": {
                          "predeploy": "npm run build",
                          "deploy": "gh-pages -d build"
              }`}
      </pre>
      <p>Replace <code>your-username</code> and <code>your-repo-name</code> with your GitHub username and repository name.</p>
    </div>
    </div>
  )
}

export default Step4
