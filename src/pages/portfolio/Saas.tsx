import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const PlusIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const LeftArrowIcon = () => (
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
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Saas = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cards = [
    { id: "dept1", label: "Department 1" },
    { id: "dept2", label: "Department 2" },
    { id: "process", label: "Process" },
  ];

  const dropdownItems = [
    { label: "Add Department" },
    { label: "Add Operation" },
    { label: "Project" },
    { label: "Process" },
    { label: "Block" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <Link
            to="/panel/portfolio"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <LeftArrowIcon />
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-xl font-extrabold text-gray-900 border-l border-gray-300 pl-3 uppercase">
              SaaS
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 relative">
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <PlusIcon />
          </button>

          {/* Actions Dropdown */}
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
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-full aspect-video bg-white rounded-2xl shadow-sm border border-gray-100 transition-all group-hover:shadow-md cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-sm font-black text-gray-900 tracking-tight uppercase">
                {card.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saas;
