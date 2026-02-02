import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600"
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

const NextArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-300"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

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

const Project = () => {
  const { id } = useParams();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const skillBreadcrumb = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Reality";

  return (
    <div className="" onClick={() => setActiveMenuIndex(null)}>
      {/* Header Area */}
      <div className="">
        <div className="flex items-center gap-4">
          <Link
            to={`/dashboard/bizinfra/skillset/${id}`}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <LeftArrowIcon />
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-500">
              {skillBreadcrumb}
            </span>
            <h2 className="text-xl font-extrabold text-gray-900 pl-3">
              Project
            </h2>
          </div>
        </div>
        <div className="flex justify-end items-center mb-16">
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
        </div>
      </div>
      

      {/* Main content - Horizontal Flow */}
     
 <div className="overflow-x-auto no-scrollbar pb-10">
        <div className="flex items-center gap-8 min-w-max px-20">
          {[1, 1, 1].map((num, i) => (
            <div key={i} className="flex items-center gap-8 h-[calc(100vh-400px)]">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenuIndex(activeMenuIndex === i ? null : i);
                  }}
                  className={`text-xl sm:text-4xl font-bold tracking-tight whitespace-nowrap cursor-pointer px-4 py-2 rounded-2xl transition-colors
                    ${activeMenuIndex === i ? "bg-gray-400/30 text-gray-900" : "text-gray-900 hover:bg-gray-200/50"}
                  `}
                >
                  Project {num}
                </motion.div>
                <AnimatePresence>
                  {activeMenuIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2"
                    >
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-left group">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400 group-hover:text-red-500 transition-colors"
                        >
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">
                          Delete
                        </span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-left group">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400 group-hover:text-blue-500 transition-colors"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">
                          Rename
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NextArrowIcon />
            </div>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-white hover:border-blue-400 group transition-all"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <PlusIcon />
            </div>
          </motion.button>
        </div>
      </div>
      

      <div className="mt-auto flex justify-center pb-6 sm:pb-10 pt-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Skillset";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300
                  ${isSelected ? "bg-blue-600/10 border-2 border-blue-600 ring-4 ring-blue-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm"}
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
      <div className="flex justify-end mr-32">
        <button className="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
          Go Live
        </button>
      </div>

    </div>
  );
};

export default Project;
