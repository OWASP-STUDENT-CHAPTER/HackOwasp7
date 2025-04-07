import React from "react";
import { Navbar } from "./components/Navbar";
import { SparklesPreviewDark } from "./components/Sparkles";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Container for SparklesPreviewDark */}
      <div className="absolute inset-0">
        <SparklesPreviewDark />
      </div>
      {/* Tracks Section */}
      {/* <div
        id="tracks"
        className="flex flex-col md:flex-row justify-between items-center mt-16 px-4"
        style={{
          backgroundImage: "url(/lego-border.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-1/4 flex justify-center items-center">
          <div

            className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-6 pb-0 border-2 border-yellow-500 dark:border-yellow-600"
            style={{
              boxShadow: "0 8px 0 rgba(234, 179, 8, 0.5)",
              backgroundImage:
                "radial-gradient(circle at 10px 10px, rgba(234, 179, 8, 0.15) 3px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600 border border-yellow-600 dark:border-yellow-700"
                ></div>
              ))}
            </div>
            <img
              src={figurine}
              alt="LEGO figurine"
              className="w-full rotate-y-180"
            />
          </div>
        </div>

        <div className="w-3/4 mt-8 md:mt-0 md:ml-6">
          <div
            className="bg-gray-900 dark:bg-gray-800 rounded-lg border-2 border-blue-500 dark:border-blue-600 overflow-hidden"
            style={{
              boxShadow: "0 8px 0 rgba(59, 130, 246, 0.5)",
            }}
          >
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Hackathon Tracks</h2>
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 mx-1 rounded-full bg-yellow-500 dark:bg-yellow-600"
                  ></div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <TracksSlider />
            </div>
          </div>
        </div>
      </div> */}

      {/* Partners Section */}
      {/* <div
        id="partners"
        className="relative flex flex-col items-center justify-center w-full mt-16"
      >
        
        <Logos3 />
      </div> */}
      {/* <div className="">
        <Footer />
      </div> */}

      {/* Navbar with higher z-index to stay on top */}
      <div className="relative z-50">
        <Navbar />
      </div>
</div>
  );
}

export default App;
