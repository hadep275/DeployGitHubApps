import React, {useState} from 'react';

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
  const [showNotification, setShowNotification] = useState(false);

    const handleCopyClick = () => {
      const codeContent = 'npx create-react-app my-react-app'; // Replace with your actual code content
      navigator.clipboard.writeText(codeContent)
        .then(() => {
          setShowNotification(true);
  
          setTimeout(() => {
            setShowNotification(false);
          }, 1000);
        })
        .catch((err) => {
          console.error('Unable to copy to clipboard', err);
        });
    };  
    
    return (
    <div className="container">
      <h2>Step 3: Install gh-pages Package</h2>
      <p>Install the gh-pages package to simplify deployment:</p>
      <code onClick={handleCopyClick} style={{ cursor: 'pointer', position: 'relative' }}>
npm install --save-dev gh-pages {showNotification && (
          <div className="notification">Code copied!</div>
        )}
        </code>
      <p>Ready for the next step?</p>
    </div>
  );
};

export default Step3;
