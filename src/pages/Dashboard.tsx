import { Outlet, Link, useLocation } from "react-router-dom";

// Icons (Simple SVGs)
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
  </svg>
);

const BizIcon = () => (
  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-purple-500 border-r-[6px] border-r-transparent"></div>
);

const PortfolioIcon = () => (
  <div className="w-4 h-4 rounded-full bg-linear-to-br from-blue-500 to-indigo-600"></div>
);

const SettingsIcon = () => (
  <div className="w-4 h-4 rounded-full bg-green-400"></div>
);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#f0f0eb] font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-72 flex flex-col p-8 border-r border-gray-200/50 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-bold">
            AAKT
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${location.pathname === "/dashboard" ? "bg-gray-200/80 shadow-sm border border-gray-300/50" : "hover:bg-gray-100 text-gray-600"}`}
          >
            <div className="w-6 flex justify-center">
              <HomeIcon />
            </div>
            <span className="font-medium text-sm">Home</span>
          </Link>

          {/* BizInfra Item with Hover Menu */}
          <div className="group relative">
            <Link
              to="/dashboard/bizinfra"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <div className="w-6 flex justify-center">
                <BizIcon />
              </div>
              <span className="font-medium text-sm">BizInfra</span>
            </Link>

            {/* Popover */}
            <div className="absolute left-full top-0 ml-2 w-64 bg-[#f0f0eb]/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-[-10px] group-hover:translate-x-0 z-50">
              <div className="grid grid-cols-3 gap-3">
                {["Skilset", "Network", "Intel", "Capital", "Reach"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg shadow-sm flex items-center justify-center text-white text-xs font-bold
                                    ${
                                      item === "Skilset"
                                        ? "bg-blue-600"
                                        : item === "Network"
                                          ? "bg-green-500"
                                          : item === "Intel"
                                            ? "bg-yellow-500"
                                            : item === "Capital"
                                              ? "bg-yellow-300"
                                              : "bg-purple-500"
                                    }`}
                      >
                        {/* Simple Icon placeholder */}
                        <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Portfolio Item with Hover Menu */}
          <div className="group relative">
            <Link
              to="/dashboard/portfolio"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <div className="w-6 flex justify-center">
                <PortfolioIcon />
              </div>
              <span className="font-medium text-sm">Portfolio</span>
            </Link>

            {/* Popover */}
            <div className="absolute left-full top-0 ml-2 w-48 bg-[#f0f0eb]/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-[-10px] group-hover:translate-x-0 z-50">
              <div className="flex flex-col gap-3">
                {["SaaS", "Ecommerce"].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col items-center gap-2 cursor-pointer hover:bg-white/50 p-2 rounded-xl transition-colors"
                  >
                    <div className="w-full h-20 bg-white rounded-lg border border-gray-200 shadow-sm"></div>
                    <span className="text-xs font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto pt-6">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <div className="w-6 flex justify-center">
              <SettingsIcon />
            </div>
            <span className="font-medium text-sm">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area - Includes Header inside content area effectively or sticky top */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between shrink-0">
          {/* Context/Title - Empty in mock for Home but shows BizInfra logic, let's keep it flexible */}
          <div className="flex-1"></div>

          {/* Search Bar */}
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-transparent placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-sm sm:text-sm transition-colors"
              placeholder="Search skills, projects, processes"
            />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto px-8 pb-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
