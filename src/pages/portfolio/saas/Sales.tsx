import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Sales Page (SaaS) - Displays sales-related cards like 'Sales pdf' and 'Sales Operation'.
 * Shows specific categories for the 'Sales' department within a SaaS business.
 */

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
    id: "sales-pdf",
    title: "Sales pdf",
    to: `/dashboard/portfolio/saas/department/block`,
  },
  {
    id: "sales-operation",
    title: "Sales Operation",
    to: `/dashboard/portfolio/saas/department/block`,
  },
  {
    id: "brand-identity",
    title: "Brand identity",
    to: `/dashboard/portfolio/saas/department/block`,
  },
];

export default function Sales() {
  const [activeTab, setActiveTab] = useState("Home");
  const { id } = useParams();
  const skillName = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Skillset";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f2ed]">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-6 pt-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
        >
          <BackIcon />
        </motion.button>
        <div className="flex items-center gap-2">
          <div className="">Department 2</div>
          <div className="font-bold text-xl ml-24 text-gray-900">
            {skillName}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center px-6 mb-8">
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
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
          >
            <PlusIcon />
          </motion.button>
        </div>
      </div>

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
                layoutId="activeTabSalesSaaS"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Center cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {activeTab === "Home" &&
          cards.map((c, index) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => navigate(c.to)}
              className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow"></div>
              <div className="text-sm font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                {c.title}
              </div>
            </motion.button>
          ))}
        {activeTab === "Team" && (
          <div className="text-gray-500 text-sm">No team members found</div>
        )}
      </div>
    </div>
  );
}
