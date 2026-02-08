import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";

/**
 * Department 1 (SaaS) - Sales, Marketing, Product.
 */

const base = "/dashboard/portfolio/saas/department1";
const cards = [
  { id: "sales", title: "Sales", to: `${base}/sales` },
  { id: "marketing", title: "Marketing", to: `${base}/marketing` },
  { id: "product", title: "Product", to: `${base}/product` },
];

export default function Department1Page() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <PageLayout>
      <PageHeader
        title="Department 1"
        breadcrumb="Portfolio › SaaS"
        previousPath="/dashboard/portfolio/saas"
        onSearch={() => {}}
        onAdd={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto py-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(card.to)}
            className="flex flex-col items-center gap-3 w-64 group cursor-pointer p-6 rounded-[2.5rem] hover:bg-gray-100 transition-all font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-56 h-36 bg-white rounded-4xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow" />
            <span className="text-sm font-black text-gray-900 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
              {card.title}
            </span>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
