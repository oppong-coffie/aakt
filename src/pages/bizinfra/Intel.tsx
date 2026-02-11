import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

/**
 * Intel Page - Provides categorized intelligence and strategic planning views.
 * Similar to SkillsetDetail but focused on Intelligence gathering and sources.
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

const categories = [
  { id: "project", label: "Project" },
  { id: "process", label: "Process" },
  { id: "block", label: "Block" },
];

const Intel = () => {
  const { id } = useParams();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddDropdownOpen, setIsAddDropdownOpen] = useState(false);

  /**
   * Modal component to add a new Intelligence Source.
   * Reuses the structure from the Capital module for consistency.
   */
  const AddIntelModal = () => (
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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-xl rounded-4xl shadow-2xl relative z-index-100 p-8 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Add New Intel Source
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

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
              />

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Geography
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>Continent</option>
                  </select>
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>Country</option>
                  </select>
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>City</option>
                  </select>
                </div>
              </div>

              <div className="w-full aspect-video border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-gray-50/30 group hover:border-blue-300 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <PlusIcon />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600">
                  Campaign Image
                </span>
              </div>

              <input
                type="text"
                placeholder="Type of capital source"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />
              <input
                type="text"
                placeholder="Check size"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />
              <input
                type="text"
                placeholder="Instrument type"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />

              <textarea
                placeholder="Thesis & Goals"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm h-24 resize-none focus:outline-none"
              ></textarea>
              <textarea
                placeholder="Notes"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm h-24 resize-none focus:outline-none"
              ></textarea>

              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Reminder
                </span>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                  <PlusIcon /> Add Reminder
                </button>
              </div>

              <button className="w-full py-4 bg-blue-600/30 text-blue-700 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all mt-4 shadow-sm">
                Add Capital Source
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] px-4 sm:px-8 relative overflow-hidden">
      {/* Header Area */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/bizinfra">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors">
                <LeftArrowIcon />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "BizInfra", to: "/dashboard/bizinfra" },
              { label: "Intel", to: "/dashboard/bizinfra/intel" },
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

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAddDropdownOpen(!isAddDropdownOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
            >
              <PlusIcon />
            </motion.button>

            <AnimatePresence>
              {isAddDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsAddDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                  >
                    {[
                      { id: "project", label: "Project" },
                      { id: "process", label: "Process" },
                      { id: "block", label: "Block" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setIsAddDropdownOpen(false);
                          setIsAddModalOpen(true);
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/dashboard/bizinfra/skillset/${id}/${cat.id}`}
            className="contents"
          >
            <motion.div
              className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow flex items-center justify-center">
                {/* Optional Icon/Content placeholder inside */}
              </div>
              <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {cat.label}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>

      <AddIntelModal />
    </div>
  );
};

export default Intel;
