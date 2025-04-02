import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(2025, 3, 16, 0, 0, 0);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const numberVariants = {
    update: {
      opacity: [0, 1],
      y: [-20, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="mt-12 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-white text-2xl mb-6"
        variants={itemVariants}
      >
        Event Starts In
      </motion.h2>
      <div className="grid grid-cols-4 gap-4 text-white">
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HOURS' },
          { value: timeLeft.minutes, label: 'MINUTES' },
          { value: timeLeft.seconds, label: 'SECONDS' }
        ].map((item, index) => (
          <motion.div 
            key={item.label}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="text-4xl md:text-6xl font-bold bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-lg"
              animate="update"
              variants={numberVariants}
              key={item.value} // Force re-render on value change
            >
              {String(item.value).padStart(2, '0')}
            </motion.div>
            <div className="text-sm mt-2 text-gray-300 font-semibold">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}