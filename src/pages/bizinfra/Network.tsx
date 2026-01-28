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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" cy="12" x2="12" y2="12"></line>
    <path d="M12 5v14M5 12h14" />
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

const people = [
  {
    name: "Bessie Cooper",
    role: "Web Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bessie",
  },
  {
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ronald",
  },
  {
    name: "Brooklyn Simmons",
    role: "Nursing Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn",
  },
  {
    name: "Leslie Alexander",
    role: "President of Sales",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
  },
  {
    name: "Guy Hawkins",
    role: "Dog Trainer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guy",
  },
  {
    name: "Darrell Steward",
    role: "Medical Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
  },
];

const NetworkTree = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gray-50/30">
      {/* Center Circle */}
      <div className="w-24 h-24 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center z-20 relative">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs ring-4 ring-blue-50">
          You
        </div>
        {/* Connection Lines Illustration */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
          }}
        >
          {people.map((_, i) => {
            const angle = (i * 360) / people.length;
            const rad = (angle * Math.PI) / 180;
            const x2 = 250 + Math.cos(rad) * 150;
            const y2 = 250 + Math.sin(rad) * 150;
            return (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x2}
                y2={y2}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Nodes */}
      {people.map((person, i) => {
        const angle = (i * 360) / people.length;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 180;
        const y = Math.sin(rad) * 180;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="absolute flex items-center gap-3 z-30"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
              <img
                src={person.avatar}
                className="w-full h-full object-cover"
                alt={person.name}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-900 leading-tight">
                {person.name}
              </span>
              <span className="text-[8px] text-gray-400 leading-tight">
                {person.role}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Network = () => {
  const [viewMode, setViewMode] = useState<"people" | "tree">("people");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Modal Component
  const AddConnectionModal = () => (
    <AnimatePresence>
      {isAddModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl relative z-100 p-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold text-gray-900">
                Add New Connection
              </h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100/80 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
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
            </div>

            {/* Options */}
            <div className="space-y-4">
              <button className="w-full text-left p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Known
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  People you already know.
                </p>
              </button>

              <button className="w-full text-left p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Not Known
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  People you dont know but want to get to know them.
                </p>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-10 relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 leading-none mb-1">
              Module
            </span>
            <h2 className="text-sm font-bold text-gray-900 leading-none">
              Network
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <PlusIcon />
          </button>
          <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>
          <button
            onClick={() =>
              setViewMode(viewMode === "people" ? "tree" : "people")
            }
            className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-xs font-bold text-gray-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {viewMode === "people" ? (
                <path d="M4 7h16M4 12h16M4 17h16" />
              ) : (
                <rect width="18" height="18" x="3" y="3" rx="2" />
              )}
            </svg>
            {viewMode === "people" ? "Tree view" : "People view"}
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        {viewMode === "people" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 overflow-y-auto no-scrollbar max-h-full pb-20">
            {people.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-4 group-hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={person.avatar}
                    className="w-full h-full object-cover rounded-2xl relative z-10"
                    alt={person.name}
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {person.name}
                </h3>
                <p className="text-[10px] font-medium text-gray-400">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full bg-white rounded-[2.5rem] shadow-sm border border-gray-200/50 relative overflow-hidden">
            <NetworkTree />
          </div>
        )}
      </div>

      <AddConnectionModal />

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10 pt-10 relative z-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Network";
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
  );
};

export default Network;
