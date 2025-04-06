import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel3D = ({ slides, autoplay = true, interval = 3000, arrows = false, onSlideChange = () => {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideItems, setSlideItems] = useState(() => {
    if (!slides || slides.length === 0) return [];
    const items = slides.map((slide, index) => ({
      state: index === 0 ? 'active' : (index === 1 ? 'proactive' : 'proactivede'),
      element: slide
    }));
    if (slides.length === 2) {
      items.push(...slides.map(slide => ({ state: 'proactivede', element: slide })));
    }
    return items;
  });
  const [height] = useState('400px');
  const autoplayRef = useRef(null);
  const currentIndexRef = useRef(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => moveNext(),
    onSwipedRight: () => movePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    if (autoplay && slides.length > 1) {
      const timer = setTimeout(() => {
        autoplayRef.current = setInterval(() => {
          moveNext();
        }, interval);
      }, 500);
      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
        clearTimeout(timer);
      };
    }
  }, [slides, autoplay, interval]);

  const moveNext = () => {
    if (!slides || slides.length <= 1 || !slideItems || slideItems.length === 0) return;
  
    let newIndex = currentIndexRef.current;
    newIndex = newIndex < slides.length - 1 ? newIndex + 1 : 0;
  
    const newSlideItems = [...slideItems];
  
    newSlideItems.forEach(item => {
      if (item.state === 'preactivede') item.state = 'proactivede';
      if (item.state === 'preactive') item.state = 'preactivede';
    });
  
    const prevIndex = newIndex > 0 ? newIndex - 1 : slides.length - 1;
    const nextIndex = newIndex < slides.length - 1 ? newIndex + 1 : 0;
    
    if (prevIndex >= 0 && prevIndex < newSlideItems.length &&
        newIndex >= 0 && newIndex < newSlideItems.length &&
        nextIndex >= 0 && nextIndex < newSlideItems.length) {
        
      const prevSlide = newSlideItems[prevIndex];
      const activeSlide = newSlideItems[newIndex];
      const nextSlide = newSlideItems[nextIndex];
      
      if (prevSlide && activeSlide && nextSlide) {
        prevSlide.state = 'preactive';
        activeSlide.state = 'active';
        nextSlide.state = 'proactive';
        
        setSlideItems(newSlideItems);
        setCurrentSlide(newIndex);
        currentIndexRef.current = newIndex;
        onSlideChange(newIndex);
      }
    }
  };
  
  const movePrev = () => {
    if (slides.length <= 1) return;

    let newIndex = currentIndexRef.current;
    newIndex = newIndex > 0 ? newIndex - 1 : slides.length - 1;

    const newSlideItems = [...slideItems];

    newSlideItems.forEach(item => {
      if (item.state === 'proactivede') item.state = 'preactivede';
      if (item.state === 'proactive') item.state = 'proactivede';
    });

    const prevSlide = newIndex > 0 ? newSlideItems[newIndex - 1] : newSlideItems[slides.length - 1];
    const activeSlide = newSlideItems[newIndex];
    const nextSlide = newIndex < slides.length - 1 ? newSlideItems[newIndex + 1] : newSlideItems[0];

    prevSlide.state = 'preactive';
    activeSlide.state = 'active';
    nextSlide.state = 'proactive';

    setSlideItems(newSlideItems);
    setCurrentSlide(newIndex);
    currentIndexRef.current = newIndex;
    onSlideChange(newIndex);
  };

  const getSlideClasses = (state) => {
    switch (state) {
      case 'active': return 'z-20 opacity-100 scale-100 translate-x-0';
      case 'preactive': return 'z-10 opacity-30 scale-80 -translate-x-1/4';
      case 'proactive': return 'z-10 opacity-30 scale-80 translate-x-1/4';
      case 'preactivede': return 'z-0 opacity-0 scale-0 -translate-x-1/2';
      case 'proactivede': return 'z-0 opacity-0 scale-0 translate-x-1/2';
      default: return 'opacity-0 scale-0';
    }
  };

  return (
    <div className="relative" style={{ height }} {...handlers}>
      <div className="absolute left-1/2 top-0 w-[90%] -ml-[45%]">
        <div className="relative left-1/2 transform -translate-x-1/2 w-[70%] h-[80%]">
          {slideItems.map((item, index) => (
            <div
              key={index}
              className="absolute left-0 top-0 w-full transition-all duration-500 ease-out"
              data-state={item.state}
            >
              <div
                className={`flex justify-center relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out ${getSlideClasses(item.state)}`}
              >
                <div className="w-full">
                  {item.element}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const AboutUs = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  // Animate counters when they come into view
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.ceil(current);
      }, 20);
    });
  };

  const slides = [
    <div className="h-[500px] w-[550px] rounded-xl overflow-hidden">
    <img src="https://picsum.photos/300/450/?random" alt="Team Member 1" className="w-full h-full object-cover" />
    </div>,
    <div className="h-[500px] w-[550px] rounded-xl overflow-hidden">
      <img src="https://picsum.photos/300/451/?random" alt="Team Member 2" className="w-full h-full object-cover" />
    </div>,
    <div className="h-[500px] w-[550px] rounded-xl overflow-hidden">
      <img src="https://picsum.photos/300/452/?random" alt="Team Member 3" className="w-full h-full object-cover" />
    </div>,
    <div className="h-[500px] w-[550px] rounded-xl overflow-hidden">
      <img src="https://picsum.photos/300/453/?random" alt="Team Member 4" className="w-full h-full object-cover" />
    </div>,
    <div className="h-[500px] w-[550px] rounded-xl overflow-hidden">
      <img src="https://picsum.photos/300/454/?random" alt="Team Member 5" className="w-full h-full object-cover" />
    </div>,
  ];

  return (
    <div className="min-h-screen bg-[#0c1322] text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute top-24 left-12 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      <div className="absolute bottom-24 left-64 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      <div className="absolute bottom-64 right-24 w-2 h-2 bg-[#4FC1E0] rounded-full"></div>
      
      <h1 className="text-center text-5xl font-bold text-[#4FC1E0] mb-2 tracking-wider">
        ABOUT HACKOWASP 7.0
      </h1>
      <p className="text-center text-[#4FC1E0] text-xl mb-12">EXPLORE THE REALM OF CODING</p>
      
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center">
          <div className="w-full max-w-md">
            <Carousel3D
              slides={slides}
              autoplay={true}
              interval={3000}
              arrows={false}
              onSlideChange={(index) => console.log(`Slide changed to index: ${index}`)}
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 lg:pl-8">
          <div className="mb-8">
            <h2 className="text-3xl mb-4">
              <span className="text-[#4FC1E0]">Forge Your Code</span>
              <span className="text-white"> Leave Your Mark!</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The seventh edition of HackOWASP, organised by OWASP Student Chapter is your 
              battleground for innovation. This 24-hour hackathon unites warriors of code—both 
              seasoned champions and rising contenders—to forge groundbreaking solutions 
              across digital realms.
            </p>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-4 mb-10">
            <div className="border border-[#4FC1E0]/30 rounded-lg p-6 bg-[#0c1a2d]">
              <h3 className="text-[#4FC1E0] text-4xl font-bold mb-1 counter" data-target="200">0</h3>
              <p className="text-gray-400">Projects Submitted</p>
            </div>
            <div className="border border-[#4FC1E0]/30 rounded-lg p-6 bg-[#0c1a2d]">
              <h3 className="text-[#4FC1E0] text-4xl font-bold mb-1 counter" data-target="150">0</h3>
              <p className="text-gray-400">Participating Teams</p>
            </div>
            <div className="border border-[#4FC1E0]/30 rounded-lg p-6 bg-[#0c1a2d]">
              <span className="text-[#4FC1E0] text-4xl font-bold mb-1 counter" data-target="5">0</span>
              <span className="text-gray-400 text-xl ml-4">Lakhs</span>
              <p className="text-gray-400">Prize Pool (in ₹)</p>
            </div>
            <div className="border border-[#4FC1E0]/30 rounded-lg p-6 bg-[#0c1a2d]">
              <h3 className="text-[#4FC1E0] text-4xl font-bold mb-1 counter" data-target="25">+</h3>
              <p className="text-gray-400">Mentors & Judges</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
