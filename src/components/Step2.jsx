import React, {useState} from 'react';

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
      <h2>Step 2: Build Your React App</h2>
      <p>Now, let's build your React app for production:</p>
      <code onClick={handleCopyClick} style={{ cursor: 'pointer', position: 'relative' }}>
npm run build
{showNotification && (
          <div className="notification">Code copied!</div>
        )}
        </code>
      <p>This command will generate a production-ready build in the 'build' folder.</p>
      <p>Ready for the next step?</p>
    </div>
  );
};

export default Step2;
