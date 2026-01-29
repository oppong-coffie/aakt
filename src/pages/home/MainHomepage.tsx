import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

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

const MainHomepage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <header className="h-20 sm:px-8 px-4 flex items-center justify-between shrink-0 gap-4">
        <div className="font-bold text-lg sm:text-xl">Home</div>

        {/* Search Bar - Trigger */}
        <div
          onClick={() => setIsSearchOpen(true)}
          className="relative flex-1 max-w-xs cursor-pointer"
        >
          <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <div className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl text-gray-400 text-xs sm:text-sm transition-all hover:border-gray-300 truncate">
            Search anything...
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 sm:bottom-32 right-6 sm:right-10 z-40">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-tr from-blue-600 to-teal-400 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-b from-teal-300 to-blue-500 opacity-80 blur-sm"></div>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default MainHomepage;
