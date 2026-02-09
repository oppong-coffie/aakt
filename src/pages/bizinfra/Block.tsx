import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * Reach Page - A placeholder page for the Reach module in BizInfra.
 * Currently displays a 'Coming Soon' message.
 */

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




const Reach = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white rounded-xl transition-colors"
        >
          <LeftArrowIcon />
        </button>
        <div className="flex items-center gap-2">
          <div className="">BizInfra</div>
          <div className="font-bold text-xl ml-24">Block</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-24 h-24 rounded-4xl bg-linear-to-br from-purple-600 to-purple-300 flex items-center justify-center shadow-2xl shadow-purple-500/20 rotate-12">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Coming Soon
            </h1>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
              We are working on the Block integrations!
            </p>
          </div>
        </motion.div>
      </div>

    
    </div>
  );
};

export default Reach;
