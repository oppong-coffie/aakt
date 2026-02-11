import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../../../components/Breadcrumbs";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

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
    <svg width="70" height="18" viewBox="0 0 80 18" fill="none">
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

const base = "/dashboard/portfolio/saas/project";

const Project = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [newPhaseName, setNewPhaseName] = useState("");
  const [cards, setCards] = useState([
    { id: "phase1", label: "Phase 1", to: `${base}/phase1` },
    { id: "phase2", label: "Phase 2", to: `${base}/phase2` },
    { id: "phase3", label: "Phase 3", to: `${base}/phase3` },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  const handleModeSelect = (mode: "blank" | "template") => {
    console.log(`Creating new phase ${newPhaseName} in ${mode} mode`);
    setIsCreationModalOpen(false);
    setNewPhaseName("");
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden font-['Inter']">
      {/* Header Area */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/portfolio/saas">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white rounded-xl transition-colors">
                <LeftArrow />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "Portfolio", to: "/dashboard/portfolio" },
              { label: "SaaS", to: "/dashboard/portfolio/saas" },
              { label: "Project", to: "/dashboard/portfolio/saas/project" },
            ]}
          />
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-black hover:bg-white transition-colors"
          >
            <SearchIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-black hover:bg-white transition-colors"
          >
            <PlusIcon />
          </motion.button>
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
                layoutId="activeTabProject"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {activeTab === "Home" && (
          <div className="flex items-center justify-center w-full">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="project-phases" direction="horizontal">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex items-center justify-center flex-wrap"
                  >
                    {cards.map((card, i) => (
                      <Draggable key={card.id} draggableId={card.id} index={i}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`flex items-center transition-all ${
                              snapshot.isDragging ? "z-50 opacity-50" : ""
                            }`}
                          >
                            {/* Phase */}
                            <motion.button
                              onClick={() => navigate(card.to)}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="text-3xl sm:text-4xl font-semibold text-gray-900 hover:text-black transition-colors"
                            >
                              {card.label}
                            </motion.button>

                            {/* Arrow between phases - Only show if not last item in the list */}
                            {i !== cards.length - 1 && <LongArrow />}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}

                    {/* Plus button after last phase */}
                    <motion.button
                      onClick={() => setIsAddModalOpen(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-10 w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:shadow-md transition"
                      aria-label="Add Phase"
                    >
                      <PlusIcon />
                    </motion.button>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        )}
        {activeTab === "Team" && (
          <div className="text-gray-500 text-sm">No team members found</div>
        )}
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Inter']">
                Add New Phase
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Phase Name"
                  value={newPhaseName}
                  onChange={(e) => setNewPhaseName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none font-['Inter']"
                />
                <button
                  disabled={!newPhaseName}
                  onClick={() => {
                    setIsCreationModalOpen(true);
                    setIsAddModalOpen(false);
                  }}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-black transition-colors disabled:bg-gray-300 font-['Inter']"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CreationModeModal
        isOpen={isCreationModalOpen}
        onClose={() => setIsCreationModalOpen(false)}
        onSelect={handleModeSelect}
        categoryLabel={newPhaseName || "Phase"}
      />
    </div>
  );
};

export default Project;
