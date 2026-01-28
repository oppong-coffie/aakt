import { useNavigate } from "react-router-dom";

const FinanceTable = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8 sm:p-12 relative overflow-hidden">
      {/* Progress Header */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
          Finance
        </h1>
        <div className="w-full h-4 bg-gray-200/50 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-blue-600 rounded-full w-[20%] shadow-lg shadow-blue-600/20" />
        </div>
        <p className="text-lg font-bold text-gray-800 leading-relaxed max-w-4xl">
          Give a rough idea of the what costs goes into delivering your product
          and also the revenue you receive from it.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 space-y-16 overflow-y-auto no-scrollbar pb-20">
        {/* Revenue Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-black text-gray-900 tracking-tight">
            Revenue
          </h3>
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">
                  <th className="px-6 py-4 border-r border-gray-200 font-Inter">
                    Name
                  </th>
                  <th className="px-6 py-4 border-r border-gray-200 font-Inter">
                    Amount
                  </th>
                  <th className="px-6 py-4 font-Inter">Rate(Unit)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="px-6 py-5 border-r border-gray-200"></td>
                    <td className="px-6 py-5 border-r border-gray-200"></td>
                    <td className="px-6 py-5"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
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
            Add row
          </button>
        </section>

        {/* Cost Section */}
        <section className="space-y-6">
          <h3 className="text-xl font-black text-gray-900 tracking-tight">
            Cost
          </h3>
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200">
                  <th className="px-6 py-4 border-r border-gray-200 font-Inter">
                    Name
                  </th>
                  <th className="px-6 py-4 border-r border-gray-200 font-Inter">
                    Amount
                  </th>
                  <th className="px-6 py-4 font-Inter">Rate(Unit)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="px-6 py-5 border-r border-gray-200"></td>
                    <td className="px-6 py-5 border-r border-gray-200"></td>
                    <td className="px-6 py-5"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
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
            Add row
          </button>
        </section>
      </div>

      <div className="mt-auto flex justify-end max-w-7xl mx-auto w-full pt-6">
        <button
          onClick={() =>
            navigate("/dashboard/portfolio/questions/culture-goals")
          }
          className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default FinanceTable;
