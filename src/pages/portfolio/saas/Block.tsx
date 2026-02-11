import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

/**
 * Block Page (SaaS) - A detailed view for managing business blocks within a SaaS context.
 * Features a sidebar for Blocks and People, mirroring the BizInfra Process/Block views.
 */

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

const CreationModeModal = ({
  isOpen,
  onClose,
  onSelect,
  categoryLabel,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (mode: "blank" | "template") => void;
  categoryLabel: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-md rounded-4xl shadow-2xl relative z-100 p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Inter']">
                New {categoryLabel}
              </h3>
              <p className="text-gray-500 text-sm">
                How would you like to start?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onSelect("blank")}
                className="flex flex-col items-center gap-4 p-6 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-black hover:text-white transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-gray-800 transition-colors">
                  <PlusIcon />
                </div>
                <span className="font-bold">Blank</span>
              </button>

              <button
                onClick={() => onSelect("template")}
                className="flex flex-col items-center gap-4 p-6 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-black hover:text-white transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-gray-800 transition-colors">
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
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                  </svg>
                </div>
                <span className="font-bold">Template</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-6 py-3 text-gray-400 font-medium hover:text-gray-600 transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

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

const Block = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    label: string;
  } | null>(null);

  const people = [
    { name: "Adam fatal", seed: "Adam" },
    { name: "Aneka", seed: "Aneka" },
    { name: "Jace", seed: "Jace" },
  ];

  const dropdownItems = [
    { id: "project", label: "Project" },
    { id: "process", label: "Process" },
    { id: "block", label: "Block" },
  ];

  const handleModeSelect = (mode: "blank" | "template") => {
    if (selectedType) {
      console.log(`Creating ${selectedType.label} in ${mode} mode`);
    }
    setIsCreationModalOpen(false);
    setSelectedType(null);
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden font-['Inter']">
      {/* Header Area */}
      <header className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/portfolio/saas">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <LeftArrowIcon />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "Portfolio", to: "/dashboard/portfolio" },
              { label: "SaaS", to: "/dashboard/portfolio/saas" },
              { label: "Block", to: "/dashboard/portfolio/saas/block" },
            ]}
          />
        </div>
        <div className="flex items-center gap-2 relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
          >
            <SearchIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors relative z-50"
          >
            <PlusIcon />
          </motion.button>

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
                  {dropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedType(item);
                        setIsCreationModalOpen(true);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <span className="text-gray-400 group-hover:text-blue-600 transition-colors font-bold uppercase">
                        <PlusIcon />
                      </span>
                      <span className="text-xs font-bold text-gray-700 tracking-tight uppercase">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="flex flex-1 gap-6">
        {/* Left Sidebar */}
        <div className="w-16 flex flex-col gap-8 py-4 z-50 overflow-visible">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
              Blocks
            </span>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div
                key={i}
                className="relative group flex items-center"
                onMouseEnter={() => setHoveredBlock(i)}
                onMouseLeave={() => setHoveredBlock(null)}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setSelectedType({ id: "block", label: "Block" });
                setIsCreationModalOpen(true);
              }}
              className="w-10 h-10 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-blue-600 hover:bg-white transition-colors shrink-0"
            >
              <PlusIcon />
            </motion.button>
          </div>

          {/* People Section - Displays team members associated with this block. */}
          <div className="flex flex-col items-center gap-3 mt-auto">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
              People
            </span>
            {people.map((person) => (
              <div
                key={person.name}
                className="relative group flex items-center"
              >
                <motion.img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.seed}`}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover cursor-pointer hover:scale-105 transition-transform shrink-0"
                  onMouseEnter={() => setHoveredPerson(person.name)}
                  onMouseLeave={() => setHoveredPerson(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                          alt={person.name}
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
        </div>
      </div>

      <CreationModeModal
        isOpen={isCreationModalOpen}
        onClose={() => setIsCreationModalOpen(false)}
        onSelect={handleModeSelect}
        categoryLabel={selectedType?.label || "Block"}
      />
    </div>
  );
};

export default Block;
