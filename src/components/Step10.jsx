import React, {useEffect} from 'react';
import '../App.css';

const Step10 = ({ active }) => {

    useEffect(() => {
       
            const confettiContainer = document.querySelector('.container');
            const confettiCount = 50;
      
            for (let i = 0; i < confettiCount; i++) {
              const confetti = document.createElement('div');
              confetti.className = 'confetti';
              confetti.style.left = Math.random() * window.innerWidth + 'px';
              confetti.style.backgroundColor = getRandomColor();
              confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
      
              confettiContainer.appendChild(confetti);
            }
        }, [active]);
    
        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          };

  return (
    <div className="container">
      <h2>Step 10: Your Application is Now Deployed!</h2>
      <p>Congratulations! Your React app is successfully deployed on GitHub Pages.</p>
      <p>Take a moment to celebrate your achievement!</p>
    </div>
  );
};

export default Step10;
