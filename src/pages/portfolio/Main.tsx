import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isAttentionOpen, setIsAttentionOpen] = useState(false);

  const cards = [
    { title: "SaaS", path: "saas" },
    { title: "Ecommerce", path: "ecommerce" },
  ];

  const AttentionModal = () => (
    <AnimatePresence>
      {isAttentionOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsAttentionOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl relative z-100 p-12 overflow-hidden"
          >
            <button
              onClick={() => setIsAttentionOpen(false)}
              className="absolute right-8 top-8 w-10 h-10 flex items-center justify-center bg-gray-100/80 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
            >
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
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Attention
                </h2>
                <p className="text-gray-500 font-bold leading-relaxed max-w-2xl">
                  When you click on the product at the top it automatically adds
                  a product onto the page where you can add multiple of product
                  or marketing objects and can also connect it to each other
                  according to what the heading says.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 mb-6 font-Inter">
                  Watch the video below.
                </h3>
                <div className="w-full aspect-video bg-white rounded-3xl border border-gray-100 relative overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="absolute inset-x-0 top-0 bottom-4 border-b border-gray-100"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

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
          <button
            onClick={() => setIsAttentionOpen(true)}
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors text-white"
          >
            <PlusIcon />
          </button>
        </div>
      </header>

      <AttentionModal />

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
