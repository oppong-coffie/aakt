import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

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
/**
 * AddSkillModal component - provides a form to add a new skill to the BizInfra module.
 * @param isOpen - boolean to control visibility
 * @param onClose - function to handle modal closure
 */
const AddSkillModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding skill:", { title, description });
    onClose();
    setTitle("");
    setDescription("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-100"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-100 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Modal Header */}
              <div className="p-6 pb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  Add New Skills
                </h3>
                <button
                  onClick={onClose}
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

              <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-blue-400 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 font-medium"
                    placeholder="Skill Name"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-blue-400 outline-none transition-all text-sm text-gray-800 placeholder-gray-300 font-medium resize-none"
                    placeholder="Description"
                  />
                </div>

                {/* Image Placeholder Area */}
                <div className="w-full aspect-2/1 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-100/50 transition-colors">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                    <PlusIcon />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">
                    Add Product Image
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-200 text-white rounded-lg text-sm font-bold shadow-xs hover:bg-blue-300 transition-colors"
                  >
                    Add New Connection
                  </button>
                </div>
              </form>
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

/**
 * Skilset Page - The main landing page for the BizInfra module.
 * Displays a grid of skills and provides search/add functionality.
 */
const Skilset = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPlusOpen, setIsPlusOpen] = useState(false);

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

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <AddSkillModal isOpen={isPlusOpen} onClose={() => setIsPlusOpen(false)} />

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

