import { useState } from "react";
import { Link } from "react-router-dom";

type ViewMode = "list" | "card";

interface IntelItem {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  reliability: string;
}

const intelItems: IntelItem[] = [
  {
    id: "1",
    title: "Market trends in Fintech 2024",
    source: "Bloomberg",
    date: "Jan 2024",
    category: "Market",
    reliability: "High",
  },
  {
    id: "2",
    title: "Competitor Analysis: Acme Corp",
    source: "Internal Research",
    date: "Dec 2023",
    category: "Competitor",
    reliability: "Medium",
  },
  {
    id: "3",
    title: "New Regulatory Compliance updates",
    source: "Gov Portal",
    date: "Jan 2024",
    category: "Legal",
    reliability: "High",
  },
  {
    id: "4",
    title: "Consumer Behavior shifts in Retail",
    source: "Statista",
    date: "Nov 2023",
    category: "Consumer",
    reliability: "High",
  },
];

const navItems = [
  {
    id: "Skillset",
    label: "Skillset",
    gradient: "from-blue-600 to-blue-200",
    path: "/dashboard/bizinfra/skillset",
  },
  {
    id: "Network",
    label: "Network",
    gradient: "from-green-500 to-green-200",
    path: "/dashboard/bizinfra/network",
  },
  {
    id: "Capital",
    label: "Capital",
    gradient: "from-yellow-500 via-yellow-300 to-yellow-100",
    path: "/dashboard/bizinfra/capital",
  },
  {
    id: "Intel",
    label: "Intel",
    gradient: "from-yellow-600 to-yellow-200",
    path: "/dashboard/bizinfra/intel",
  },
  {
    id: "Reach",
    label: "Reach",
    gradient: "from-purple-600 to-purple-300",
    path: "/dashboard/bizinfra/reach",
  },
];

const Intel = () => {
  const [view, setView] = useState<ViewMode>("card");

  const renderViewSwitcher = () => (
    <div className="relative group">
      <button className="h-8 px-3 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 text-gray-700 font-medium text-xs hover:bg-gray-50 transition-colors">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h18M3 6h18M3 18h18"></path>
          <circle cx="6" cy="6" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="6" cy="18" r="1.5"></circle>
        </svg>
        {view === "card" ? "Card view" : "List view"}
      </button>
      <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-1">
        <button
          onClick={() => setView("card")}
          className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors ${view === "card" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Card view
        </button>
        <button
          onClick={() => setView("list")}
          className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors ${view === "list" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
        >
          List view
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8 relative overflow-auto">
      {/* Top Header Actions */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-gray-900">Intel Dashboard</h2>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          {renderViewSwitcher()}
        </div>
      </div>

      <div className="flex-1">
        {view === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {intelItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/60 border border-gray-200/50 rounded-2xl p-5 flex flex-col gap-4 shadow-xs hover:shadow-sm transition-all group"
              >
                <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-1 flex items-center justify-center text-gray-400 text-xs italic">
                  Image Placeholder
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-3 space-y-1">
                    <p className="text-[10px] text-gray-500">
                      Source:{" "}
                      <span className="text-gray-700">{item.source}</span>
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Category:{" "}
                      <span className="text-blue-500 font-medium">
                        {item.category}
                      </span>
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Reliability:{" "}
                      <span
                        className={`${item.reliability === "High" ? "text-green-600" : "text-yellow-600"} font-semibold`}
                      >
                        {item.reliability}
                      </span>
                    </p>
                  </div>
                </div>
                <button className="mt-auto text-blue-600 text-xs font-bold hover:underline text-left">
                  Read more
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/40 rounded-3xl p-4 border border-gray-200/40 overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase font-bold border-b border-gray-100">
                  <th className="px-4 py-4">Title</th>
                  <th className="px-4 py-4">Source</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {intelItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm font-bold text-gray-800">
                      {item.title}
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-600">
                      {item.source}
                    </td>
                    <td className="px-4 py-4 text-xs font-medium text-blue-500">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-500">
                      {item.date}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button className="text-blue-600 text-xs font-bold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10 pt-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4">
          {navItems.map((item) => {
            const isSelected = item.id === "Intel";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300
                    ${isSelected ? "bg-blue-600/10 border-2 border-blue-600 ring-4 ring-blue-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm group-hover:border-gray-200"}
                  `}
                >
                  <div
                    className={`w-3/5 h-3/5 rounded-lg bg-linear-to-br ${item.gradient} rotate-12`}
                  ></div>
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-bold ${isSelected ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intel;
