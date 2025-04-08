import React, { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug = "hackowasp7", theme = "light" }) => {
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  

  return (
    <div 
      className="apply-button" 
      data-hackathon-slug={hackathonSlug} 
      data-button-theme={theme}
      style={{ height: '44px', width: '312px' }}
    ></div>
  );
};

export default DevfolioButton;