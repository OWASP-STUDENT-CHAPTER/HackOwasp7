import React from "react";
import { Carousel } from "3d-react-carousal";

// Carousel slides with LEGO-themed images
const slides = [
  <img src="https://picsum.photos/800/300/?random" alt="Random Image 1" />,
  <img src="https://picsum.photos/800/301/?random" alt="Random Image 2" />,
  <img src="https://picsum.photos/800/302/?random" alt="Random Image 3" />,
  <img src="https://picsum.photos/800/303/?random" alt="Random Image 4" />,
  <img src="https://picsum.photos/800/304/?random" alt="Random Image 5" />,
  <img
    src="/path-to-your-lego-font-image.jpg"
    alt="LEGO Font Example"
    style={{ objectFit: "contain", backgroundColor: "#FF0000" }}
  />,
];

const LegoCarousel = () => {
  const handleSlideChange = (index) => {
    console.log(`Slide changed to index: ${index}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 to-red-500">
      <div className="w-full max-w-4xl">
        <h1 className="text-center text-4xl font-bold text-white mb-8">
          LEGO-Themed Carousel
        </h1>
        <Carousel
          slides={slides}
          autoplay={true}
          interval={3000}
          arrows={true}
          onSlideChange={handleSlideChange}
        />
      </div>
    </div>
  );
};

export default LegoCarousel;

