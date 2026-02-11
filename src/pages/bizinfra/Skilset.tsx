import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

/**
 * SearchIcon component - renders a standard search magnifying glass SVG.
 */
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
    className=""
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-arrow-left-icon lucide-arrow-left"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-plus-icon lucide-plus"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

/**
 * SearchModal component - provides a full-screen search interface with categorized results.
 * @param isOpen - boolean to control visibility
 * @param onClose - function to handle modal closure
 */
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
          <div className="fixed inset-0 flex items-center justify-center p-4 z-100 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Search Header */}
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
                {/* Sidebar */}
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

                {/* Main Content Grid */}
                <div className="flex-1 p-6 overflow-y-auto bg-gray-50/30">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className={`bg-white border border-gray-100 rounded-2xl p-4 h-32 shadow-sm transition-all hover:shadow-md cursor-pointer ${
                          i === 3 ? "col-span-1" : ""
                        }`}
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

const skillsetCards = [
  {
    title: "Python",
    description:
      "I want to open a new Company that's sells fresh cloves to big companies all over the world, How can i start the planning?",
  },
  {
    title: "Business Management",
    description:
      "I want to open a new Company that's sells fresh cloves to big companies all over the world, How can i start the planning?",
  },
  {
    title: "Backend Developer",
    description:
      "I want to open a new Company that's sells fresh cloves to big companies all over the world, How can i start the planning?",
  },
  {
    title: "Product Designer",
    description:
      "I want to open a new Company that's sells fresh cloves to big companies all over the world, How can i start the planning?",
  },
];

const addOptions = [
  { id: "process", label: "Process" },
  { id: "project", label: "Project" },
  { id: "block", label: "Block" },
];

/**
 * Skilset Page - The main landing page for the BizInfra module.
 * Displays a grid of skills and provides search/add functionality.
 */
const Skilset = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPlusOpen, setIsPlusOpen] = useState(false);
  const plusButtonRef = useRef<HTMLDivElement | null>(null);
  const plusMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPlusOpen) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        plusMenuRef.current?.contains(target) ||
        plusButtonRef.current?.contains(target)
      ) {
        return;
      }
      setIsPlusOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isPlusOpen]);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-[#f0f0eb] px-4 sm:px-8 relative overflow-hidden">
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
            ]}
          />
        </div>

        {/* Search Bar - Trigger */}
        <div className="flex items-center gap-2 relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-blue-600 hover:bg-white transition-colors flex items-center justify-center text-gray-400"
          >
            <SearchIcon />
          </motion.div>
          <motion.div
            ref={plusButtonRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlusOpen((open) => !open)}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-blue-600 hover:bg-white transition-colors flex items-center justify-center text-gray-400"
          >
            <PlusIcon />
          </motion.div>

          {isPlusOpen && (
            <div
              ref={plusMenuRef}
              className="absolute right-0 top-12 w-44 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden z-50"
            >
              {addOptions.map((option) => (
                <Link
                  key={option.id}
                  to={`/dashboard/bizinfra/skillset/${option.id}`}
                  onClick={() => setIsPlusOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
                >
                  <PlusIcon />
                  {option.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Top Cards Grid */}
      <div className="flex flex-wrap items-center justify-center w-full flex-1 overflow-y-auto no-scrollbar">
        {skillsetCards.map((card, index) => (
          <Link
            key={index}
            to={`/dashboard/bizinfra/skillset/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="contents"
          >
            <motion.div
              className="flex flex-col items-center gap- w-60 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* White Placeholder Box */}
              <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow flex flex-col items-center justify-center relative overflow-hidden">
                {/* Optional: Add a subtle overlay or just let the bg change handle it */}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              {/* Description removed as per request */}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skilset;
