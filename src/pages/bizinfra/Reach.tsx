import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const navItems = [
  {
    id: "Skillset",
    label: "Skillset",
    gradient: "from-blue-600 to-blue-200",
    path: "/dashboard/bizinfra/skillset",
  },
  {
    id: "Network",
    label: "Network",
    gradient: "from-green-500 to-green-200",
    path: "/dashboard/bizinfra/network",
  },
  {
    id: "Capital",
    label: "Capital",
    gradient: "from-yellow-500 via-yellow-300 to-yellow-100",
    path: "/dashboard/bizinfra/capital",
  },
  {
    id: "Intel",
    label: "Intel",
    gradient: "from-yellow-600 to-yellow-200",
    path: "/dashboard/bizinfra/intel",
  },
  {
    id: "Reach",
    label: "Reach",
    gradient: "from-purple-600 to-purple-300",
    path: "/dashboard/bizinfra/reach",
  },
];

const Reach = () => {
  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/bizinfra"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <LeftArrowIcon />
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Bizinfra
            </span>
            <h2 className="text-xl font-extrabold text-gray-900 border-l border-gray-300 pl-3">
              Reach
            </h2>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-linear-to-br from-purple-600 to-purple-300 flex items-center justify-center shadow-2xl shadow-purple-500/20 rotate-12">
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
              We are working on something amazing!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 pt-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Reach";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300
                  ${isSelected ? "bg-purple-600/10 border-2 border-purple-600 ring-4 ring-purple-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm"}
                `}
                >
                  <div
                    className={`w-3/5 h-3/5 rounded-lg bg-linear-to-br ${item.gradient} rotate-12`}
                  ></div>
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-bold ${isSelected ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reach;
