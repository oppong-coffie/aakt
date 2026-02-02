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

const Block = () => {
  const { id } = useParams();
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  const skillBreadcrumb = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Sales Pdt";

  const people = [
    { name: "Adam fatal", seed: "Adam" },
    { name: "Aneka", seed: "Aneka" },
    { name: "Jace", seed: "Jace" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-6">
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
            <h2 className="text-xl font-extrabold text-gray-900 border-l border-gray-300 pl-3">
              Blocks
            </h2>
          </div>
        </div>
        <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
          <SearchIcon />
        </button>
      </div>

      <div className="flex flex-1 gap-6">
        {/* Left Sidebar */}
        <div className="w-16 flex flex-col gap-8 py-4 z-50 overflow-visible">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
              Blocks
            </span>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="relative group flex items-center"
                onMouseEnter={() => setHoveredBlock(i)}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <div className="w-10 h-10 bg-gray-300 rounded-lg shrink-0 cursor-pointer hover:bg-gray-400 transition-colors"></div>
                <AnimatePresence>
                  {hoveredBlock === i && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="absolute left-14 flex items-center gap-0 z-100 pointer-events-none"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center relative translate-x-1">
                        <div className="w-4 h-4 bg-white rotate-45 absolute -left-1.5 border-l border-b border-gray-100"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
                      </div>
                      <div className="bg-white px-3 py-2.5 rounded-xl shadow-lg border border-gray-100 ml-1.5 whitespace-nowrap">
                        <span className="text-xs font-bold text-gray-700">
                          Stage {i}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="w-10 h-10 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors shrink-0">
              <PlusIcon />
            </button>
          </div>

          <div className="flex flex-col items-center gap-3 mt-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
              People
            </span>
            {people.map((person) => (
              <div
                key={person.name}
                className="relative group flex items-center"
                onMouseEnter={() => setHoveredPerson(person.name)}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.seed}`}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover cursor-pointer hover:scale-105 transition-transform shrink-0"
                />
                <AnimatePresence>
                  {hoveredPerson === person.name && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="absolute left-12 flex items-center gap-0 z-100 pointer-events-none"
                    >
                      <div className="w-9 h-9 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center relative translate-x-1">
                        <div className="w-3 h-3 bg-white rotate-45 absolute -left-1 border-l border-b border-gray-100"></div>
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.seed}`}
                          className="w-6 h-6 rounded-full"
                        />
                      </div>
                      <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 ml-1.5 whitespace-nowrap">
                        <span className="text-xs font-bold text-gray-700">
                          {person.name}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="text-[9px] font-bold text-blue-600 hover:underline whitespace-nowrap">
              View More
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
          <div className="p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Block
            </h1>
          </div>
          <div className="flex-1"></div>
          <div className="flex justify-center pb-10">
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
        </div>
      </div>
    </div>
  );
};

export default Block;
