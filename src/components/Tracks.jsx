import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCode, faLaptopCode, faMobile, faServer, faShieldAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

const TracksSlider = () => {
  const tracks = [
    { 
      title: "AI/ML", 
      image: "https://images.unsplash.com/photo-1677442135136-760c813dfc0f?q=80&w=1932&auto=format&fit=crop",
      description: "Build intelligent solutions with ML and deep learning",
      icon: faLaptopCode,
      color: "from-blue-900 to-blue-700"
    },
    { 
      title: "Blockchain", 
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
      description: "Create decentralized apps and smart contracts",
      icon: faDatabase,
      color: "from-purple-900 to-purple-700" 
    },
    { 
      title: "Web Development", 
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
      description: "Craft responsive, interactive web applications",
      icon: faCode,
      color: "from-teal-900 to-teal-700" 
    },
    { 
      title: "Mobile Apps", 
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
      description: "Design cross-platform mobile experiences",
      icon: faMobile,
      color: "from-green-900 to-green-700" 
    },
    { 
      title: "Cloud Computing", 
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      description: "Develop scalable solutions in the cloud",
      icon: faServer,
      color: "from-cyan-900 to-cyan-700" 
    },
    { 
      title: "Cybersecurity", 
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      description: "Build secure systems and identify vulnerabilities",
      icon: faShieldAlt,
      color: "from-red-900 to-red-700" 
    },
  ];

  // Track position indices
  const [positions, setPositions] = useState({
    leftEndBack: 0,
    leftEnd: 1,
    leftMid: 2, 
    center: 3,
    rightMid: 4,
    rightEnd: 5,
    rightEndBack: 6
  });

  // Initialize positions based on number of tracks

useEffect(() => {
    const center = Math.floor(tracks.length / 2);
    setPositions({
      leftEndBack: (center - 3 + tracks.length) % tracks.length,
      leftEnd: (center - 2 + tracks.length) % tracks.length,
      leftMid: (center - 1 + tracks.length) % tracks.length,
      center: center % tracks.length,
      rightMid: (center + 1) % tracks.length,
      rightEnd: (center + 2) % tracks.length,
      rightEndBack: (center + 3) % tracks.length
    });
  }, []); // Empty dependency array ensures it runs only once
  

  // Touch handling
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Slide left function
  const leftScroll = () => {
    setPositions(prev => {
      const newPos = {...prev};
      Object.keys(newPos).forEach(key => {
        newPos[key] = (newPos[key] - 1 + tracks.length) % tracks.length;
      });
      return newPos;
    });
  };

  // Slide right function
  const rightScroll = () => {
    setPositions(prev => {
      const newPos = {...prev};
      Object.keys(newPos).forEach(key => {
        newPos[key] = (newPos[key] + 1) % tracks.length;
      });
      return newPos;
    });
  };

  // Touch event handlers
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diffX = touchStartX.current - touchEndX.current;
      
      if (Math.abs(diffX) > 50) {
        diffX > 0 ? rightScroll() : leftScroll();
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  // Helper function to get position styling
  const getPositionStyles = (index) => {
    const { leftEndBack, leftEnd, leftMid, center, rightMid, rightEnd, rightEndBack } = positions;
    
    // Position 3 (center)
    if (index === center) {
      return {
        left: "50%",
        zIndex: "40",
        transform: "translate(-50%, 0) rotateY(0deg) scale(1, 1)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.5)",
        hover: {
          boxShadow: "0px 0rem 1.8rem rgba(0, 0, 0, 0.7)",
          transform: "translate(-50%, 0) rotateY(0deg) scale(1.05, 1.05)"
        }
      };
    }
    
    // Position 2 (left middle)
    if (index === leftMid) {
      return {
        left: "35%",
        zIndex: "20",
        transform: "translate(-50%, 0) rotateY(-1deg) scale(0.9, 0.9)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.3)"
      };
    }
    
    // Position 4 (right middle)
    if (index === rightMid) {
      return {
        left: "65%",
        zIndex: "20",
        transform: "translate(-50%, 0) rotateY(1deg) scale(0.9, 0.9)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.3)"
      };
    }
    
    // Position 1 (left edge)
    if (index === leftEnd) {
      return {
        left: "20%",
        zIndex: "10",
        transform: "translate(-50%, 0) rotateY(-2deg) scale(0.8, 0.8)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.1)"
      };
    }
    
    // Position 5 (right edge)
    if (index === rightEnd) {
      return {
        left: "80%",
        zIndex: "10",
        transform: "translate(-50%, 0) rotateY(2deg) scale(0.8, 0.8)",
        opacity: "1",
        boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0.1)"
      };
    }
    
    // Position none (hidden)
    return {
      left: "50%",
      zIndex: "0",
      transform: "translate(-50%, 0) rotateY(0deg) scale(0.7, 0.7)",
      opacity: "0",
      boxShadow: "0px 0.4rem 1.6rem rgba(0, 0, 0, 0)"
    };
  };

  // Check if a slide is in center position
  const isCenter = (index) => {
    return index === positions.center;
  };

  return (
    <div className="h-[35rem] w-full max-w-[1200px] flex justify-center items-center relative mt-8 select-none">
      
      {/* Left Arrow */}
      <div 
        className="h-full w-[10%] flex justify-center items-center cursor-pointer"
        onClick={leftScroll}
      >
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white transition-colors">
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </div>
      </div>
      
      {/* Slider Content */}
      <div 
        ref={sliderRef}
        className="h-full w-[80%] flex justify-center items-center relative overflow-hidden"
        style={{ perspective: "100px" }}
      >
        {tracks.map((track, index) => {
          const posStyles = getPositionStyles(index);
          const isCenterSlide = isCenter(index);
          
          return (
            <div
              key={index}
              className={`
                absolute h-[400px] w-[270px] bg-gradient-to-br ${track.color} rounded-[25px]
                flex justify-center items-center
                transition-all duration-500 ease-in-out
                ${isCenterSlide ? 'cursor-pointer' : ''}
              `}
              style={{
                left: posStyles.left,
                zIndex: posStyles.zIndex,
                transform: posStyles.transform,
                opacity: posStyles.opacity,
                boxShadow: posStyles.boxShadow,
                transformStyle: "preserve-3d"
              }}
              {...(isCenterSlide && {
                onMouseOver: (e) => {
                  e.currentTarget.style.boxShadow = posStyles.hover.boxShadow;
                  e.currentTarget.style.transform = posStyles.hover.transform;
                },
                onMouseOut: (e) => {
                  e.currentTarget.style.boxShadow = posStyles.boxShadow;
                  e.currentTarget.style.transform = posStyles.transform;
                }
              })}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] rounded-[25px]"></div>
              
              {/* Track media */}
              <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-[25px] overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="absolute h-full w-full object-cover" 
                />
              </div>
              
              {/* Track content */}
              <div className="absolute top-0 left-0 w-full h-full rounded-[25px] overflow-hidden p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-center mt-[55%]">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3">
                    <FontAwesomeIcon icon={track.icon} className="text-2xl" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-center">{track.title}</h3>
                  <p className="text-sm text-center text-white text-opacity-80">{track.description}</p>
                  <button className={`
                    mt-2 mx-auto bg-white bg-opacity-20 hover:bg-opacity-30 
                    transition-all duration-300 py-2 px-4 rounded-full text-white text-sm
                    ${isCenterSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300
                  `}>
                    View Details
                  </button>
                </div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-white to-transparent opacity-5 rounded-b-[25px]"></div>
            </div>
          );
        })}
        
      </div>
      
      {/* Right Arrow */}
      <div 
        className="h-full w-[10%] flex justify-center items-center cursor-pointer"
        onClick={rightScroll}
      >
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white transition-colors">
          <FontAwesomeIcon icon={faAngleRight} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default TracksSlider;
