import React, { useState } from 'react';

const Step1 = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleCopyClick = () => {
      const codeContent = 'npx create-react-app my-react-app'; // Replace with your actual code content
      navigator.clipboard.writeText(codeContent)
        .then(() => {
          setShowNotification(true);
  
          // Hide the notification after 1000 milliseconds (1 second)
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
      <h2>Step 1: Create a React App</h2>
      <p>Open your terminal and run:</p>
      <code onClick={handleCopyClick} style={{ cursor: 'pointer', position: 'relative' }}>
        npx create vite@latest
        {showNotification && (
          <div className="notification">Code copied!</div>
        )}
      </code>
    </div>
  );
};

export default Step1;
