import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FinanceRisk = () => {
  const navigate = useNavigate();

  const risks = [
    { label: "Market Risk", priority: "Low", color: "text-red-500" },
    {
      label: "Product Risk",
      priority: "Low → Medium",
      color: "text-yellow-600",
    },
    { label: "Regulation Risk", priority: "High", color: "text-green-600" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8 sm:p-12 relative overflow-hidden">
      {/* Progress Header */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Finance
          </h1>
          <span className="text-2xl font-black text-gray-900">2 Out of 6</span>
        </div>
        <div className="w-full h-4 bg-gray-200/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            className="h-full bg-blue-600 rounded-full shadow-lg shadow-blue-600/20"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-12">
          As a last step, let's put our realist hat on and list some risk
          factors
        </h2>

        <div className="space-y-10">
          {risks.map((risk) => (
            <div
              key={risk.label}
              className="flex justify-between items-start gap-8 group"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-900 tracking-tight">
                  {risk.label}:
                </h3>
                <p className="text-xs font-bold text-gray-500">
                  They are a lot of big players in the market that want to
                  compete
                </p>
              </div>
              <div
                className={`px-6 py-2 rounded-xl border border-gray-100 bg-white font-bold text-[10px] ${risk.color} shadow-sm group-hover:shadow-md transition-shadow`}
              >
                {risk.priority}
              </div>
            </div>
          ))}

          <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline mt-4">
            <div className="w-6 h-6 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M12 5V19M5 12H19" />
              </svg>
            </div>
            Add
          </button>
        </div>
      </div>

      <div className="mt-auto flex justify-end max-w-7xl mx-auto w-full">
        <button
          onClick={() =>
            navigate("/dashboard/portfolio/questions/finance-table")
          }
          className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default FinanceRisk;
