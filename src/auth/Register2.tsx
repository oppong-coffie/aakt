import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Checkmark Icon
const CheckIcon = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5L4.5 8.5L11 1.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Register2 = () => {
  const [location, setLocation] = useState("Accra, Ghana");
  const [timezone, setTimezone] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // Default to false

  // Simulated suggestions
  const suggestions = ["Accra, Ghana", "Lagos, Nigeria"];

  const navigate = useNavigate();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    setShowDropdown(true);
  };

  const selectLocation = (loc: string) => {
    setLocation(loc);
    setShowDropdown(false);
  };

  const isFormValid = location.trim() !== "" && timezone.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate("/register3");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-sm w-[450px] p-5 text-center mx-auto">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-3">
          {/* Step 1: Completed */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <CheckIcon />
            </div>
          </div>

          {/* Line 1-2 */}
          <div className="w-10 h-1 bg-blue-600 mx-1"></div>

          {/* Step 2: Completed (as per image) */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-semibold text-gray-700 text-sm">
              2
            </div>
          </div>

          {/* Line 2-3 */}
          <div className="w-10 h-1 bg-gray-200 mx-1"></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-semibold text-gray-700 text-sm">
              3
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Provide your location for better experience.
        </h2>


        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full px-4 py-2 my-2 border border-blue-400 rounded-lg text-sm outline-none text-gray-700"
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
              onFocus={() => setShowDropdown(location.length > 0)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />

            {/* Dropdown */}
            {showDropdown && location && (
              <div className="absolute w-full bg-white border border-gray-100 rounded-lg shadow-lg mt-0 z-10 text-left overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm text-gray-600"
                    onClick={() => selectLocation(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            className="w-full px-4 py-2 my-1 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
            type="text"
            placeholder="Timezones"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-2.5 mt-5 bg-blue-600 text-white border-none rounded-lg text-base font-semibold transition-all duration-300 shadow-md ${
              isFormValid
                ? "bg-blue-600 cursor-pointer hover:bg-blue-700 hover:shadow-lg"
                : "bg-[#94A6FD] cursor-not-allowed opacity-70 shadow-none hover:bg-gray-300"
            }`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register2;
