import { useNavigate } from "react-router-dom";

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

const Question2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-6 sm:p-12 font-sans text-gray-900 justify-center items-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-gray-500 hover:text-gray-900 transition-colors"
      >
        <LeftArrowIcon />
      </button>

      <div className="max-w-3xl w-full flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Let's get started!
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
            Information provided will be protected under the law enforcement
            company and will be shared to any individuals or a group of people.
          </p>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-6 sm:p-12 flex justify-end gap-4 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-2.5 rounded-xl border border-blue-600/30 text-gray-700 font-medium hover:bg-gray-50 transition-colors bg-white shadow-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate("/dashboard/portfolio/question3")}
            className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question2;
