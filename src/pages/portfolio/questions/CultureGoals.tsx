import { useNavigate } from "react-router-dom";

const CultureGoals = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8 sm:p-12 relative overflow-hidden">
      {/* Progress Header */}
      <div className="max-w-7xl mx-auto w-full mb-20">
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Culture
          </h1>
          <span className="text-2xl font-black text-gray-900">2 Out of 6</span>
        </div>
        <div className="w-full h-4 bg-gray-200/50 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full w-[20%] shadow-lg shadow-blue-600/20" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full flex-1 space-y-16">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            What are your customer’s goals?
          </h2>
          <div className="relative group">
            <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-bold text-gray-400 appearance-none cursor-pointer">
              <option>Select</option>
              <option>Innovation</option>
              <option>Reliability</option>
              <option>Cost effective</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-xl font-bold text-gray-900">
            How does your desired culture align with their goals?
          </h2>
          <div className="w-full h-16 rounded-2xl border border-gray-200 bg-white shadow-sm flex items-center px-6">
            <span className="text-sm font-bold text-gray-400 italic">
              Answer
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-end max-w-7xl mx-auto w-full">
        <button
          onClick={() => navigate("/dashboard/portfolio")}
          className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default CultureGoals;
