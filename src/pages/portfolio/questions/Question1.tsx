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

const Question1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-6 sm:p-12 font-sans text-gray-900 justify-center items-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-gray-500 hover:text-gray-900 transition-colors"
      >
        <LeftArrowIcon />
      </button>

      <div className="max-w-3xl w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Let's guide you through your journey of creating your entire
            business with a few clicks
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Before we start, This relevant information will be collected from
            you this will allow us to get to understand the direction of your
            business. These information is listed below.
          </p>
        </div>

        {/* List */}
        <ul className="flex flex-col gap-3 pl-2">
          {["Skillset", "Capital", "Network", "Intel", "Influence"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                {item}
              </li>
            ),
          )}
        </ul>

        <p className="text-gray-700 text-sm sm:text-base">
          Make sure your provide us with the correct information
        </p>
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
          <Link to="/dashboard/portfolio/question2">
          <button
            className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Continue
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question1;
