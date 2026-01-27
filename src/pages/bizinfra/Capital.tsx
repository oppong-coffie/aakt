import { useState } from "react";
import { Link } from "react-router-dom";

type ViewMode = "list" | "card";

interface CapitalSource {
  id: string;
  source: string;
  type: string;
  match: string;
  amount: string;
  status: "Warm" | "Committed" | "Pitched" | "Live";
}

interface Campaign {
  id: string;
  title: string;
  type: string;
  amount: string;
  status: string;
}

const capitalSources: CapitalSource[] = [
  {
    id: "1",
    source: "eBay",
    type: "Grant",
    match: "90%",
    amount: "$767.50",
    status: "Warm",
  },
  {
    id: "2",
    source: "Sony",
    type: "Fund",
    match: "90%",
    amount: "$779.58",
    status: "Committed",
  },
  {
    id: "3",
    source: "Mitsubishi",
    type: "Fund",
    match: "90%",
    amount: "$219.78",
    status: "Warm",
  },
  {
    id: "4",
    source: "MasterCard",
    type: "Grant",
    match: "90%",
    amount: "$782.01",
    status: "Committed",
  },
  {
    id: "5",
    source: "McDonald's",
    type: "Fund",
    match: "90%",
    amount: "$589.99",
    status: "Committed",
  },
  {
    id: "6",
    source: "L'Oréal",
    type: "VC",
    match: "90%",
    amount: "$710.68",
    status: "Pitched",
  },
  {
    id: "7",
    source: "Bank of America",
    type: "Fund",
    match: "90%",
    amount: "$450.54",
    status: "Committed",
  },
];

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Campaign 1",
    type: "Fund",
    amount: "$90,000",
    status: "Live",
  },
  {
    id: "2",
    title: "Campaign 2",
    type: "Fund",
    amount: "$90,000",
    status: "Live",
  },
  {
    id: "3",
    title: "Campaign 2",
    type: "Fund",
    amount: "$90,000",
    status: "Live",
  },
  {
    id: "4",
    title: "Campaign 2",
    type: "Fund",
    amount: "$90,000",
    status: "Live",
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

const Capital = () => {
  const [view, setView] = useState<ViewMode>("card");

  const renderViewSwitcher = () => {
    return (
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
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8 relative overflow-auto">
      {/* Top Header Actions */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Capital Sources</h2>
        </div>
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

      {/* Capital Sources Section */}
      <div className="mb-12">
        {view === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capitalSources.map((item) => (
              <div
                key={item.id}
                className="bg-white/50 border border-gray-200/50 rounded-2xl p-5 flex flex-col gap-3 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-lg p-2 border border-gray-100 shadow-xs mb-1">
                  <span className="text-xs font-bold text-blue-600">ebay</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">
                  {item.source}
                </h4>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500">
                    Type:{" "}
                    <span className="text-gray-700 font-medium">
                      {item.type}
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Match:{" "}
                    <span className="text-gray-700 font-medium">
                      {item.match}
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Amount:{" "}
                    <span className="text-gray-700 font-medium">
                      {item.amount}
                    </span>
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Status:{" "}
                    <span
                      className={`font-semibold ${item.status === "Warm" ? "text-yellow-600" : "text-green-600"}`}
                    >
                      {item.status}
                    </span>
                  </p>
                </div>
                <button className="mt-2 text-blue-600 text-xs font-semibold hover:underline text-left">
                  View
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-transparent overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4 min-w-[600px]">
              <thead>
                <tr className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                  <th className="px-4 pb-2">Source</th>
                  <th className="px-4 pb-2">Type</th>
                  <th className="px-4 pb-2">Match</th>
                  <th className="px-4 pb-2">Amount</th>
                  <th className="px-4 pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {capitalSources.map((item) => (
                  <tr
                    key={item.id}
                    className="group transition-all hover:-translate-y-0.5"
                  >
                    <td className="px-4 py-3 bg-transparent text-gray-700 text-xs font-medium">
                      {item.source}
                    </td>
                    <td className="px-4 py-3 bg-transparent text-gray-700 text-xs">
                      {item.type}
                    </td>
                    <td className="px-4 py-3 bg-transparent text-gray-700 text-xs">
                      {item.match}
                    </td>
                    <td className="px-4 py-3 bg-transparent text-gray-700 text-xs">
                      {item.amount}
                    </td>
                    <td className="px-4 py-3 bg-transparent">
                      <span
                        className={`text-xs font-bold ${item.status === "Warm" ? "text-yellow-600" : item.status === "Pitched" ? "text-green-500" : "text-green-600"}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Fundraising Campaign Section */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Fundraising Campaign
          </h2>
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="w-full aspect-video bg-white rounded-2xl shadow-xs border border-gray-100 mb-4"></div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">
                {item.title}
              </h4>
              <div className="space-y-1 mb-4">
                <p className="text-[10px] text-gray-500">
                  Type:{" "}
                  <span className="text-gray-700 font-medium">{item.type}</span>
                </p>
                <p className="text-[10px] text-gray-500">
                  Amount:{" "}
                  <span className="text-gray-700 font-medium">
                    {item.amount}
                  </span>
                </p>
                <p className="text-[10px] text-gray-500">
                  Status:{" "}
                  <span className="text-green-600 font-semibold">
                    {item.status}
                  </span>
                </p>
              </div>
              <button className="w-fit px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-bold shadow-xs hover:bg-blue-700 transition-colors">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4">
          {navItems.map((item) => {
            const isSelected = item.id === "Capital";
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

export default Capital;
