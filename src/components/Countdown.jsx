import React, { useState, useEffect } from 'react';

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
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-white text-2xl mb-6">Event Starts In</h2>
      <div className="grid grid-cols-4 gap-4 text-white">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-lg">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 text-gray-300 font-semibold">DAYS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-lg">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 text-gray-300 font-semibold">HOURS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-lg">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 text-gray-300 font-semibold">MINUTES</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-bold bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-lg">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 text-gray-300 font-semibold">SECONDS</div>
        </div>
      </div>
    </div>
  );
}