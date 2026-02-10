import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../../../components/Breadcrumbs";

/**
 * Operation Page (BizInfra) - Displays the detailed view of a specific business operation.
 * Shows related sub-categories like Project, Process, and Block.
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

const base = "/dashboard/portfolio/saas";
const categories = [
  { id: "project", label: "Project", to: `${base}/project` },
  { id: "process", label: "Process", to: `${base}/process` },
  { id: "block", label: "Block", to: `${base}/block` },
];

const Operation = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Link to="/dashboard/portfolio/saas">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors">
                <LeftArrow />
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
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
          >
            <PlusIcon />
          </motion.button>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {categories.map((cat, index) => {
          return (
            <Link
              key={cat.id}
              to={cat.to}
              className="contents"
            >
              <motion.div
                className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
               
               
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
          );
        })}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
              className="bg-white w-full max-w-md rounded-4xl shadow-2xl relative z-50 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Add New Item
              </h3>
              <div className="space-y-4">
                <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none">
                  <option>Select Type...</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Name"
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

   
    </div>
  );
};

export default Operation;

