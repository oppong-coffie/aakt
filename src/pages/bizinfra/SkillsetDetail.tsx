import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SkillsetDetail Component - Displays the specific categories (Department, Operation, etc.)
 * for a selected skill within the BizInfra module.
 */

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const LeftArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const categories = [
  { id: "project", label: "Project" },
  { id: "process", label: "Process" },
  { id: "block", label: "Block" },
];

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-100"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 z-100 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto"
            >
              <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                <SearchIcon />
                <input
                  type="text"
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-lg"
                  placeholder="Search skills, projects, processess, projects, blocks, operations"
                />
              </div>

              <div className="flex flex-1 overflow-hidden">
                <div className="w-56 border-r border-gray-50 flex flex-col p-4 gap-1 overflow-y-auto no-scrollbar">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === category
                          ? "bg-blue-600/10 text-blue-600"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="flex-1 p-6 overflow-y-auto bg-gray-50/30">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-100 rounded-2xl p-4 h-32 shadow-sm transition-all hover:shadow-md cursor-pointer"
                      ></div>
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



const SkillsetDetail = () => {
  const { id } = useParams();
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const skillName = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Skillset";
  const skillPath = id
    ? `/dashboard/bizinfra/skillset/${id}`
    : "/dashboard/bizinfra/skillset";

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-[#f0f0eb] px-4 sm:px-8 relative overflow-hidden">
      {/* Header Area */}
      <header className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/bizinfra">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors">
                <LeftArrow />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "BizInfra", to: "/dashboard/bizinfra" },
              { label: "Skillset", to: "/dashboard/bizinfra/skillset" },
              { label: skillName, to: skillPath },
            ]}
          />
        </div>

        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-blue-600 hover:bg-white transition-colors flex items-center justify-center text-gray-400"
          >
            <SearchIcon />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlusOpen(true)}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-blue-600 hover:bg-white transition-colors flex items-center justify-center text-gray-400"
          >
            <PlusIcon />
          </motion.div>
        </div>
      </header>

      {/* Categories Grid - Displays links to deeper levels like Department, Project, etc. */}
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {categories.map((cat, index) => {
          return (
            <Link
              key={cat.id}
              to={`/dashboard/bizinfra/skillset/${id}/${cat.id}`}
              className="contents"
            >
              <motion.div
                className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all"
               
               
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow flex items-center justify-center">
                  {/* Icon placeholder */}
                </div>
                <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {cat.label}
                </h3>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Add New Item Modal - Allows users to create new departments, projects, etc. */}
      <AnimatePresence>
        {isPlusOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsPlusOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-101 overflow-hidden"
            >
              <div className="p-6 pb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  Add New Item
                </h3>
                <button
                  onClick={() => setIsPlusOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors"
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="p-6 pt-2 space-y-4">
                <select className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-blue-400 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 font-medium">
                  <option>Select Type...</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-blue-400 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 font-medium"
                />

                <div className="w-full aspect-2/1 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100/50 transition-colors mt-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                    <PlusIcon />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">
                    Add Item Media
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsPlusOpen(false)}
                    className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    Add New Item
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default SkillsetDetail;

