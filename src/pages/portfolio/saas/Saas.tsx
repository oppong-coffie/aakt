import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

/**
 * SaaS Home Page - Root display for the SaaS business sector.
 * Lists departments and high-level operations.
 */

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

const Saas = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    label: string;
  } | null>(null);
  const base = "/dashboard/portfolio/saas";
  const [cards, setCards] = useState([
    { id: "department", label: "Department", to: `${base}/department` },
    { id: "operation", label: "Operation", to: `${base}/operation` },
    { id: "project", label: "Project", to: `${base}/project` },
    { id: "process", label: "Process", to: `${base}/process` },
    { id: "block", label: "Block", to: `${base}/block` },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  const dropdownItems = [
    { id: "department", label: "Department" },
    { id: "operation", label: "Operation" },
    { id: "project", label: "Project" },
    { id: "process", label: "Process" },
    { id: "block", label: "Block" },
  ];

  const handleModeSelect = (mode: "blank" | "template") => {
    if (selectedCategory) {
      console.log(
        `Creating new ${selectedCategory.label} in ${mode} mode for SaaS`,
      );
      // Navigate to creation flow or placeholder
      navigate(`${base}/${selectedCategory.id}?mode=${mode}`);
    }
    setIsCreationModalOpen(false);
    setSelectedCategory(null);
  };

  const currentCrumbs = [
    { label: "Portfolio", to: "/dashboard/portfolio" },
    { label: "SaaS", to: "/dashboard/portfolio/saas" },
  ];

  return (
    <PageLayout>
      <PageHeader
        breadcrumbs={currentCrumbs}
        onSearch={() => console.log("Search clicked")}
        onAdd={() => setIsDropdownOpen(!isDropdownOpen)}
        extraActions={
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
                        setSelectedCategory(item);
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
        }
      />

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
                layoutId="activeTabSaaS"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        {activeTab === "Home" && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="saas-cards" direction="horizontal">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-wrap justify-center gap-6 max-w-6xl w-full"
                >
                  {cards.map((card, i) => (
                    <Draggable key={card.id} draggableId={card.id} index={i}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`transition-all ${
                            snapshot.isDragging ? "z-50" : ""
                          }`}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold ${
                              snapshot.isDragging ? "bg-white shadow-lg" : ""
                            }`}
                            onClick={() => navigate(card.to)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow relative overflow-hidden">
                              <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-sm font-black text-gray-900 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                              {card.label}
                            </span>
                          </motion.div>
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
        categoryLabel={selectedCategory?.label || ""}
      />
    </PageLayout>
  );
};

export default Saas;
