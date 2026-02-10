import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../../../components/Breadcrumbs";

/**
 * Product Page (SaaS) - Displays product-related cards like Roadmap and Features.
 * Shows specific categories for the 'Product' department within a SaaS business.
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
    id: "product-roadmap",
    title: "Product Roadmap",
    to: "/portfolio/saas/department-2/product/roadmap",
  },
  {
    id: "features",
    title: "Features",
    to: "/portfolio/saas/department-2/product/features",
  },
  {
    id: "user-research",
    title: "User Research",
    to: "/portfolio/saas/department-2/product/user-research",
  },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();
  const isDept2 = location.pathname.includes("/department2/");
  const deptLabel = isDept2 ? "Department 2" : "Department 1";
  const deptPath = isDept2
    ? "/dashboard/portfolio/saas/department2"
    : "/dashboard/portfolio/saas/department1";

  return (
    <div className="min-h-screen bg-[#f3f2ed]">
      <header className="flex items-center justify-between px-6 pt-4 mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Link to={deptPath}>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-600 hover:bg-white transition-colors">
                <BackIcon />
              </div>
            </Link>
          </div>
          <Breadcrumbs
            items={[
              { label: "Portfolio", to: "/dashboard/portfolio" },
              { label: "SaaS", to: "/dashboard/portfolio/saas" },
              { label: deptLabel, to: deptPath },
              { label: "Product", to: location.pathname },
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
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
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
                layoutId="activeTabProductSaaS"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto no-scrollbar">
        {activeTab === "Home" &&
          cards.map((c) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => navigate(c.to)}
              className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
             
             
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

