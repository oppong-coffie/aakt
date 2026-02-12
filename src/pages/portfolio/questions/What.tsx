import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LeftArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const What = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-6 sm:p-12 font-sans text-gray-900 justify-center items-center relative min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
      >
        <LeftArrowIcon />
      </button>

      <Link
        to="/dashboard/portfolio/questions/who"
        className="absolute top-6 right-6 px-4 py-2 text-gray-400 font-bold hover:text-blue-600 hover:bg-white rounded-xl transition-colors z-10"
      >
        Skip
      </Link>

      <div className="max-w-3xl w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
            What are you selling?
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed font-['Inter']">
            Describe the product or service you are offering.
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. A SaaS platform for project management..."
            className="w-full p-6 rounded-3xl border border-gray-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-lg min-h-[200px] resize-none font-['Inter']"
          />
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-6 sm:p-12 flex justify-end gap-4 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
          <Link to="/dashboard/portfolio/questions/who">
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default What;
