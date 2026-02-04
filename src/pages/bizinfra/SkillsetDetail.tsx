import { useParams, Link } from "react-router-dom";

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
    className="text-blue-600"
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
    className="text-blue-600"
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

const categories = [
  { id: "project", label: "Project" },
  { id: "process", label: "Process" },
  { id: "block", label: "Block" },
];

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

const SkillsetDetail = () => {
  const { id } = useParams();
  const skillName = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Skillset";

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/bizinfra/skillset"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <LeftArrow />
          </Link>
          <div className="flex items-center gap-2">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
              Skillset
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {skillName}
            </h2>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2">
          <button className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
          <button className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <PlusIcon />
          </button>
        </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto w-full flex-1">
        {categories.map((cat) => {
          const content = (
            <>
              <div className="w-full aspect-video bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 group-hover:shadow-md transition-shadow"></div>
              <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {cat.label}
              </h3>
            </>
          );

          if (cat.id === "project") {
            return (
              <Link
                key={cat.id}
                to={`/dashboard/bizinfra/skillset/${id}/project`}
                className="flex flex-col items-center group"
              >
                {content}
              </Link>
            );
          }


          if (cat.id === "process") {
            return (
              <Link
                key={cat.id}
                to={`/dashboard/bizinfra/skillset/${id}/process`}
                className="flex flex-col items-center group"
              >
                {content}
              </Link>
            );
          }

          if (cat.id === "block") {
            return (
              <Link
                key={cat.id}
                to={`/dashboard/bizinfra/skillset/${id}/block`}
                className="flex flex-col items-center group"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={cat.id} className="flex flex-col items-center">
              {content}
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10 pt-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Skillset";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300
                  ${isSelected ? "bg-blue-600/10 border-2 border-blue-600 ring-4 ring-blue-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm"}
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

export default SkillsetDetail;
