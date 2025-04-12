import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ question, answer, isOpen, onClick, index, handleKeyDown }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="bg-blend-darken rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:shadow-purple-900/20">
      <button
        className="flex justify-between items-center w-full px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        onClick={onClick}
        onKeyDown={(e) => handleKeyDown(e, index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-lg font-medium text-gray-100">{question}</span>
        <span 
          className={`ml-4 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 ${
            isOpen ? 'bg-purple-600 text-white rotate-180' : 'bg-gray-700 text-gray-300'
          }`}
          aria-hidden="true"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </span>
      </button>
      
      <div 
        id={`faq-answer-${index}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
        aria-hidden={!isOpen}
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <div 
          ref={contentRef}
          className="px-5 py-4 border-t border-gray-700 text-gray-300"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    const buttons = accordionRef.current.querySelectorAll('button');
    const currentIndex = Array.from(buttons).findIndex(button => button.id === `faq-question-${index}`);
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < buttons.length - 1) {
          buttons[currentIndex + 1].focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) {
          buttons[currentIndex - 1].focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        buttons[0].focus();
        break;
      case 'End':
        e.preventDefault();
        buttons[buttons.length - 1].focus();
        break;
      default:
        break;
    }
  };

  const faqData = [
    {
      question: "What is the team size for HackOwasp 6.0?",
      answer: "A Team can consist of 2-5 members."
    },
    {
      question: "What if I have no team?",
      answer: "We will club individual members and you may form a team in our discord server as well."
    },
    {
      question: "How long is the hackathon going to last?",
      answer: "Hackathon is going to last for 36 hours"
    },
    {
      question: "Do I need experience?",
      answer: "No, you do not need any prior development experience. We will assign you mentors to assist you in figuring things out. Of course, willingness to think, learn, and cooperate is a cherry on the top."
    },
    {
      question: "Is a working prototype / website of our product required?",
      answer: "Yes, You will need a functioning prototype of how your product/idea works to pitch it to the judges in the final round."
    },
    {
      question: "What is the cost of participation",
      answer: "HackOWASP 6.0 is completely free to participate for everyone."
    },
    {
      question: "What is the mode of Hackathon?",
      answer: "HackOWASP 6.0 is being conducted in HYBRID mode that is OFFLINE for Thapar University students only and ONLINE for all the other students pan India and worldwide"
    },
    {
      question: "Will hardware be provided for the hardware track?",
      answer: "No. Any team choosing to work on the Hardware track will have to use their own equipment and team OWASP will NOT be providing any hardware accessories."
    }
  ];

  return (
    <section className="py-16 px-4  min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">FAQs</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about HackOwasp 6.0
          </p>
        </div>
        
        <div className="space-y-4" ref={accordionRef}>
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
              handleKeyDown={handleKeyDown}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
