import React, { useEffect, useState } from 'react';

const DevfolioButton = ({ hackathonSlug = "hackowasp7", theme = "light" }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Note: This example uses a proxy URL. In production, set up your own proxy.
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const scriptUrl = 'https://apply.devfolio.co/v2/sdk.js';
    
    fetch(proxyUrl + scriptUrl, { mode: 'no-cors' })
      .then(response => response.text())
      .then(scriptText => {
        const script = document.createElement('script');
        script.text = scriptText;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        setScriptLoaded(true);
      })
      .catch(error => console.error('Error loading script:', error));

    return () => {
      // Optionally, remove the script if needed.
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
