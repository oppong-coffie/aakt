import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const metrics = ["Skillset", "Network", "Capital", "Intel", "Influence"];

const Confident = () => {
  // Initial values (0-100)
  const [values, setValues] = useState<Record<string, number>>({
    Skillset: 10,
    Network: 10,
    Capital: 10,
    Intel: 10,
    Influence: 10,
  });

  const navigate = useNavigate();

  const handleChange = (metric: string, value: number) => {
    setValues((prev) => ({ ...prev, [metric]: value }));
  };

  const handleContinue = () => {
    console.log("Confidence Values:", values);
    navigate("/feeling");
  };

  const handleSkip = () => {
    navigate("/feeling");
  };

  return (
    <div className="h-screen bg-[#f0f0eb] pt-5 px-40">
      {/* Skip Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSkip}
          className="px-2 rounded-lg border border-blue-300 text-gray-700 bg-transparent hover:bg-gray-100 transition text-sm font-medium"
        >
          Skip
        </button>
      </div>

      <div className="mt-20 mb-16 flex justify-center">
        <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
          How confident are you in the following to achieve your 12 month goals?
        </h2>
      </div>

      <div className="space-y-8 ml-48">
        {metrics.map((metric) => (
          <div key={metric} className="flex">
            <div className="w-24 text-left text-gray-800 font-medium text-lg">
              {metric}
            </div>
            <div className="relative flex items-center">
              {/* Track Background */}
              <div className="w-[32vw] h-7 bg-gray-200/50 rounded-full border border-gray-200"></div>

              {/* Custom Range Input overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={values[metric]}
                onChange={(e) => handleChange(metric, parseInt(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-pointer z-20"
              />

              {/* Visual Thumb/Indicator */}
              <div
                className="absolute h-6 w-6 bg-blue-600 rounded-full shadow-md z-10 pointer-events-none transition-all duration-75"
                style={{ left: `calc(${values[metric]}% - 16px)` }} // Adjust centering
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleContinue}
          className="px-2 py-1 bg-blue-400 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Confident;
