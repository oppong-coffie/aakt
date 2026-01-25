import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioMain = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const cards = [
    { title: "SaaS", path: "saas" },
    { title: "Ecommerce", path: "ecommerce" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-black">Portfolio</h1>

        {/* Tabs */}
        <div className="flex items-center gap-8 pl-12">
          {["Home", "Team"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                activeTab === tab ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xs hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xs hover:bg-gray-50 transition-colors">
            <PlusIcon />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center -mt-20">
        <div className="flex gap-8">
          {activeTab === "Home" &&
            cards.map((card) => (
              <Link
                key={card.title}
                to={card.path}
                className="flex flex-col items-center gap-3 w-64 group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow"></div>
                <span className="text-gray-800 font-medium text-sm">
                  {card.title}
                </span>
              </Link>
            ))}

          {activeTab === "Team" && (
            <div className="text-gray-500 text-sm">No team members found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;
