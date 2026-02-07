import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * PageHeaderProps - Interface for the PageHeader component.
 */
interface PageHeaderProps {
  /** The main title shown in the header (aligned with ml-24). */
  title: string;
  /** The breadcrumb text shown to the left of the title. */
  breadcrumb: string;
  /** Optional manual override for the back button destination. */
  previousPath?: string;
  /** Callback for when the search icon is clicked. */
  onSearch?: () => void;
  /** Callback for when the plus/add icon is clicked. */
  onAdd?: () => void;
  /** Additional custom components to render in the action bar. */
  extraActions?: React.ReactNode;
}

/**
 * Shared PageHeader Component - Standardized banner used across all modules.
 * Includes a back button, breadcrumbs, title, and action buttons.
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

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumb,
  previousPath,
  onSearch,
  onAdd,
  extraActions,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (previousPath) {
      navigate(previousPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      {/* Left Side: Back Button & Title */}
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
        >
          <LeftArrowIcon />
        </motion.button>
        <div className="flex items-center gap-2">
          <div className="text-gray-900">{breadcrumb}</div>
          <h2 className="text-xl font-bold ml-24 text-gray-900">{title}</h2>
        </div>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-3 ml-auto sm:ml-0">
        {onSearch && (
          <button
            onClick={onSearch}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-blue-600 hover:bg-white transition-colors flex items-center justify-center text-gray-400"
          >
            <SearchIcon />
          </button>
        )}

        {extraActions}

        {onAdd && (
          <button
            onClick={onAdd}
            className="w-10 h-10 rounded-xl cursor-pointer hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center text-gray-400"
          >
            <PlusIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
