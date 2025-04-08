import React, { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug = "hackowasp7", theme = "light" }) => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    // Set the source of the script to load the Devfolio SDK
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    // Setting crossOrigin can help if the server supports anonymous fetching
    script.crossOrigin = 'anonymous';
    script.async = true;
    script.defer = true;
    
    // Append the script to the document body
    document.body.appendChild(script);
    
    // Clean up: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
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
