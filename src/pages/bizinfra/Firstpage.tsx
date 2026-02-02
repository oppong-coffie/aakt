import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const cards = [
  {
    id: "Skillset",
    label: "Skillset",
    gradient: "from-blue-600 to-blue-200",
    link: "skillset",
  },
  {
    id: "Network",
    label: "Network",
    gradient: "from-green-500 to-green-200",
    link: "network",
  },
  {
    id: "Capital",
    label: "Capital",
    gradient: "from-yellow-500 via-yellow-300 to-yellow-100",
    link: "capital",
  },
  {
    id: "Intel",
    label: "Intel",
    gradient: "from-yellow-600 to-yellow-200",
    link: "intel",
  }, // More goldish
  {
    id: "Reach",
    label: "Reach",
    gradient: "from-purple-600 to-purple-300",
    link: "reach",
  },
];

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
          <div className="fixed inset-0 flex items-center justify-center p-4 z-101 pointer-events-none">
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
                <div className="w-56 border-r border-gray-50 flex flex-col p-4 gap-1">
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


const Firstpage = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    
    <div className="">

    
      {/* Header */}
      <header className="">
        <div className="font-bold text-xl">BizInfra</div>
        <div className="flex justify-end mr-32">
          <div onClick={() => setIsSearchOpen(true)} className="bg-white w-8 p-2 rounded-xl cursor-pointer">
            <SearchIcon />
          </div>
        </div>
      </header>
      
      {/* cards */}
      <div className="h-[85vh] w-full flex flex-col justify-center">
        <div className="grid grid-cols-5 gap-6 px-4">
          {cards.map((card) => (
            <Link to={card.link}>
              <div
                key={card.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Card Container */}
                <div className="w-full aspect-square bg-gray-100/50 rounded-xl shadow-sm border border-gray-200/50 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  {/* Gradient Shape */}
                  <div
                    className={`w-3/5 h-3/5 rounded-[2rem] bg-linear-to-br ${card.gradient} shadow-lg relative transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}
                  >
                    {/* Noise Texture Overlay */}
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      }}
                    ></div>

                    {/* Inner Shine */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-50"></div>
                  </div>
                </div>

                {/* Label */}
                <span className="mt-4 text-sm font-semibold text-gray-800">
                  {card.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* search modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default Firstpage;
