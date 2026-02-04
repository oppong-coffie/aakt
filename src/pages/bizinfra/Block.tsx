import { useParams, Link } from "react-router-dom";

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

const Block = () => {
  const { id } = useParams();

  const skillBreadcrumb = id
    ? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " ")
    : "Sales Pdt";

  return (
    <div className="min-h-full bg-[#dcdcdc] p-4 sm:p-10 flex flex-col items-center">
      {/* The Notepad Paper */}
      <div className="w-full max-w-2xl bg-[#fffdf0] shadow-2xl rounded-sm relative min-h-[85vh] flex flex-col">
        {/* Spiral Binder (Left Side) */}
        <div className="absolute -left-3 top-8 bottom-8 flex flex-col justify-around z-20">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-6 h-3 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full shadow-inner border border-gray-500"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full shadow-sm"></div>
            </div>
          ))}
        </div>

        {/* Vertical Margin Line */}
        <div className="absolute left-14 top-0 bottom-0 w-[2px] bg-red-200/60 z-10"></div>

        {/* Horizontal Lines (Background Pattern) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, #e2e8f0 31px, #e2e8f0 32px)",
            backgroundSize: "100% 32px",
            marginTop: "64px",
          }}
        ></div>

        {/* Content Area */}
        <div className="relative z-10 flex-1 flex flex-col pt-16 px-16 sm:pl-24 sm:pr-12">
          {/* Header/Breadcrumbs */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link
                to={`/dashboard/bizinfra/skillset/${id}`}
                className="text-blue-500 hover:text-blue-700 transition-colors"
                title="Go Back"
              >
                <LeftArrowIcon />
              </Link>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                  {skillBreadcrumb}
                </span>
                <h1 className="text-4xl font-extrabold text-[#2d3436] font-serif leading-none italic">
                  Blocks
                </h1>
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 space-y-8 mt-12">
            <div className="max-w-prose">
              <h2 className="text-2xl font-bold mb-4 text-[#34495e]">
                WAITING FOR INTEGRATIONS for Blocks
              </h2>
              <p className="text-lg leading-[32px] text-[#2c3e50] font-medium italic">
                Infrastructure blocks are the fundamental units of our business
                ecosystem. They represent modular capabilities that can be
                combined to form complex solutions.
              </p>
              <div className="mt-8">
                <ul className="space-y-[32px] list-disc list-inside text-lg text-[#2c3e50] italic">
                  <li>Scalable architecture nodes</li>
                  <li>Distributed latency handlers</li>
                  <li>State persistence layers</li>
                  <li>Security validation protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Navigation (Integrated into the notepad) */}
          <div className="pt-12 pb-16">
            <div className="border-t-2 border-dashed border-gray-200 pt-8 mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                Related Modules
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2">
              {navItems.map((item) => {
                const isSelected = item.id === "Skillset";
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="flex flex-col items-center gap-2 group shrink-0"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center relative transition-all duration-300
                      ${isSelected ? "bg-white shadow-xl ring-2 ring-blue-500 scale-110" : "bg-white border border-gray-200 hover:shadow-md hover:-translate-y-1"}
                    `}
                    >
                      <div
                        className={`w-3/5 h-3/5 rounded-lg bg-linear-to-br ${item.gradient} rotate-12`}
                      ></div>
                    </div>
                    <span
                      className={`text-[10px] font-bold ${isSelected ? "text-blue-600 underline underline-offset-4" : "text-gray-400 group-hover:text-gray-600"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] rounded-sm"></div>
      </div>

      {/* Page Turn Effect (optional bottom corner) */}
      <div className="w-full max-w-2xl h-2 bg-[#ccc] rounded-b-lg shadow-inner mt-[-4px]"></div>
    </div>
  );
};

export default Block;
