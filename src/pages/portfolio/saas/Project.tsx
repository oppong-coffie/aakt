import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Project Page (BizInfra) - Displays the phases of a selected project.
 * Allows users to navigate into specific phases.
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const LongArrow = () => (
  <div className="mx-6 sm:mx-8 flex items-center">
    <svg
      width="70"
      height="18"
      viewBox="0 0 80 18"
      fill="none"
    >
      <path
        d="M0 9H72"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M72 3L80 9L72 15"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);


const base = "/dashboard/portfolio/saas/project";
const cards = [
  { id: "phase1", label: "Phase 1", to: `${base}/phase1` },
  { id: "phase2", label: "Phase 2", to: `${base}/phase2` },
  { id: "phase3", label: "Phase 3", to: `${base}/phase3` },
];

const navItems = [
  {
    id: "Skillset",
    label: "Skillset",
    image: "/bizinfra/skill2.png",
    path: "/dashboard/bizinfra/skillset",
  },
  {
    id: "Network",
    label: "Network",
    image: "/bizinfra/network.png",
    path: "/dashboard/bizinfra/network",
  },
  {
    id: "Capital",
    label: "Capital",
    image: "/bizinfra/capital.png",
    path: "/dashboard/bizinfra/capital",
  },
  {
    id: "Intel",
    label: "Intel",
    image: "/bizinfra/intel2.png",
    path: "/dashboard/bizinfra/intel",
  },
  {
    id: "Reach",
    label: "Reach",
    image: "/bizinfra/reach.png",
    path: "/dashboard/bizinfra/reach",
  },
];

const Project = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex items-center gap-2 mb-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button
            onClick={() => navigate("/dashboard/portfolio/saas")}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors"
          >
            <LeftArrow />
          </button>
        </motion.div>
        <div className="flex items-center gap-2">
          <div className="">Project</div>
          <div className="font-bold text-xl ml-24">Phases</div>
        </div>
      </div>

      <div className="flex justify-end items-center mb-8">
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
          >
            <SearchIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
          >
            <PlusIcon />
          </motion.button>
        </div>
      </div>

   {/* Phases Flow */}
<div className="flex-1 flex items-center justify-center mt-16 mb-32 w-full">
  <div className="flex items-center justify-center flex-wrap">
    {cards.map((card, i) => (
      <div key={card.id} className="flex items-center">
        {/* Phase */}
        <motion.button
          onClick={() => navigate(card.to)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
        >
          {card.label}
        </motion.button>

        {/* Arrow between phases */}
        {i !== cards.length - 1 && (
          <LongArrow />
        )}
      </div>
    ))}

    {/* Plus button after last phase */}
    <motion.button
      onClick={() => setIsAddModalOpen(true)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="ml-10 w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition"
      aria-label="Add Phase"
    >
      <PlusIcon />
    </motion.button>
  </div>
</div>


      {/* Add New Phase Modal - Allows users to extend the project lifecycle. */}
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
              className="bg-white w-full max-w-md rounded-4xl shadow-2xl relative z-100 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Add New Phase
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Phase Name"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
                />
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
                  Add
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-1 sm:pb-10 pt-10">
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
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-3/4 h-3/4 object-contain transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
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

export default Project;
