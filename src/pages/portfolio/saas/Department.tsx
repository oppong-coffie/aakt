import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Card = {
  id: string;
  title: string;
  to: string;
};

const cards: Card[] = [
  {
    id: "sales",
    title: "Sales",
    to: "/dashboard/portfolio/saas/department/sales",
  },
  {
    id: "marketing",
    title: "Marketing",
    to: "/dashboard/portfolio/saas/department/marketing",
  },
  {
    id: "product",
    title: "Product",
    to: "/dashboard/portfolio/saas/department/product",
  },
];

export default function Department2() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f2ed]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Back"
          >
            <BackIcon />
          </button>

          <div className="text-sm font-semibold text-gray-900">SaaS</div>
          <div className="text-sm font-semibold text-gray-900">
            Department 2
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Add"
            >
              <PlusIcon />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                  >
                    {[
                      { id: "department", label: "Department" },
                      { id: "operation", label: "Operation" },
                      { id: "project", label: "Project" },
                      { id: "process", label: "Process" },
                      { id: "block", label: "Block" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          // Add navigation or modal logic here if needed
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center gap-3"
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
      </div>

      {/* Center cards */}
      <div className="flex items-center justify-center min-h-[calc(100vh-72px)] px-6">
        <div className="flex gap-10">
          {cards.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => navigate(c.to)}
              className="group"
            >
              <div className="w-64 h-40 rounded-md border border-gray-300 bg-white shadow-sm transition group-hover:shadow-md" />
              <div className="mt-2 text-[11px] font-semibold text-gray-900 text-center">
                {c.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
