import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const SearchModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
      "All",
      "People",
      "Blocks",
      "Processes",
      "Projects",
      "Operations",
      "Departments",
      "Business",
    ];

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-100"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-101 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto"
              >
                {/* Search Header */}
                <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3">
                  <SearchIcon />
                  <input
                    type="text"
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-base sm:text-lg"
                    placeholder="Search skills, projects..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                  {/* Sidebar (Horizontal on mobile) */}
                  <div className="w-full sm:w-56 border-b sm:border-b-0 sm:border-r border-gray-50 flex sm:flex-col p-2 sm:p-4 gap-1 overflow-x-auto sm:overflow-y-auto no-scrollbar">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`whitespace-nowrap sm:whitespace-normal text-left px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                          activeCategory === category
                            ? "bg-blue-600/10 text-blue-600"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Main Content Grid */}
                  <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-gray-50/30">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-2xl p-4 h-32 shadow-sm transition-all hover:shadow-md cursor-pointer"
                        >
                          {/* Placeholder for items */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    );
  };

  const dropdownItems = [
    {
      label: "Add New Business",
      action: () => navigate("/dashboard/portfolio/question1"),
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-[#f0f0eb]">
      {/* Header */}
      <h1 className="text-xl font-bold text-black">Portfolio</h1>
      <header className="flex items-center justify-between mb-8">
        <div className=""></div>
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

        <div className="flex items-center gap-4 relative">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xs hover:bg-gray-50 transition-colors"
          >
            <SearchIcon />
          </button>

          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors text-white relative z-50"
          >
            <PlusIcon />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 py-3 overflow-hidden"
                >
                  {dropdownItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        item.action();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <span className="text-gray-400 group-hover:text-blue-600">
                        <PlusIcon />
                      </span>
                      <span className="text-xs font-bold text-gray-700 tracking-tight">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Content */}
      <div className="flex-1 flex items-center justify-center -mt-20">
        <div className="flex gap-8">
          {activeTab === "Home" && (
            <>
              <Link
                to="saas"
                className="flex flex-col items-center gap-3 w-64 group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow"></div>
                <span className="text-gray-800 font-medium text-sm">SaaS</span>
              </Link>
              <div
                className="flex flex-col items-center gap-3 w-64 group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow"></div>
                <span className="text-gray-800 font-medium text-sm">
                  Ecommerce
                </span>
              </div>
            </>
          )}

          {activeTab === "Team" && (
            <div className="text-gray-500 text-sm">No team members found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;
