import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

/**
 * Operation Page (SaaS) - Displays operation-related cards like Supply Chain, Logistics, etc.
 * Now features a header-based "Add" flow with dropdown selection.
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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
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

const base = "/dashboard/portfolio/saas";
const initialCategories = [
  { id: "project", label: "Project", to: `${base}/project` },
  { id: "process", label: "Process", to: `${base}/process` },
  { id: "block", label: "Block", to: `${base}/block` },
];

const Operation = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    label: string;
  } | null>(null);
  const [cards, setCards] = useState(initialCategories);

  const dropdownItems = [
    { id: "project", label: "Project" },
    { id: "process", label: "Process" },
    { id: "block", label: "Block" },
  ];

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newCards = Array.from(cards);
    const [reorderedItem] = newCards.splice(result.source.index, 1);
    newCards.splice(result.destination.index, 0, reorderedItem);

    setCards(newCards);
  };

  const handleModeSelect = (mode: "blank" | "template") => {
    if (selectedType) {
      console.log(
        `Creating new ${selectedType.label} in ${mode} mode for Operation`,
      );
    }
    setIsCreationModalOpen(false);
    setSelectedType(null);
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/portfolio/saas">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors">
                <LeftArrowIcon />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "Portfolio", to: "/dashboard/portfolio" },
              { label: "SaaS", to: "/dashboard/portfolio/saas" },
              { label: "Operation", to: "/dashboard/portfolio/saas/operation" },
            ]}
          />
        </div>

        <div className="flex items-center gap-2 relative">
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
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors relative z-50"
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
                      <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
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

      {/* Tabs */}
      <div className="flex items-center justify-center gap-8 mb-8">
        {["Home", "Team"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-2 py-1 text-sm font-medium transition-colors ${
              activeTab === tab ? "text-gray-900" : "text-gray-500"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabOperationSaaS"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Main Grid Area */}
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {activeTab === "Home" && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="operation-cards" direction="horizontal">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-wrap items-center justify-center gap-6 w-full"
                >
                  {cards.map((cat, index) => (
                    <Draggable key={cat.id} draggableId={cat.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition-all ${
                            snapshot.isDragging ? "z-50" : ""
                          }`}
                        >
                          <Link to={cat.to} className="block">
                            <motion.div
                              className={`flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold ${
                                snapshot.isDragging ? "bg-white shadow-lg" : ""
                              }`}
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
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
        {activeTab === "Team" && (
          <div className="text-gray-500 text-sm">No team members found</div>
        )}
      </div>

      <CreationModeModal
        isOpen={isCreationModalOpen}
        onClose={() => setIsCreationModalOpen(false)}
        onSelect={handleModeSelect}
        categoryLabel={selectedType?.label || "Item"}
      />
    </div>
  );
};

export default Operation;
