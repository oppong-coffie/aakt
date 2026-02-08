import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Dashboard Layout - The primary layout for the application's authenticated area.
 * Features a persistent Sidebar (navigation), a main content area (Outlet),
 * and integrated Botpress webchat for support.
 */

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

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-600"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-600"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-gray-500 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bizInfraOpen, setBizInfraOpen] = useState(true);
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [saasOpen, setSaasOpen] = useState(true);
  const [department1Open, setDepartment1Open] = useState(true);
  const [department2Open, setDepartment2Open] = useState(true);
  const location = useLocation();

  const isSaasPath = location.pathname.startsWith("/dashboard/portfolio/saas");
  const isDepartment1Path = location.pathname.startsWith("/dashboard/portfolio/saas/department") &&
    !location.pathname.includes("department2");
  const isDepartment2Path = location.pathname.startsWith("/dashboard/portfolio/saas/department2");

  useEffect(() => {
    if (isSaasPath) setSaasOpen(true);
    if (isDepartment1Path) setDepartment1Open(true);
    if (isDepartment2Path) setDepartment2Open(true);
  }, [isSaasPath, isDepartment1Path, isDepartment2Path]);

  useEffect(() => {
    const initBotpress = () => {
      if (!window.botpressWebChat) return;

      window.botpressWebChat.init({
        botId: "YOUR_BOT_ID",
        clientId: "YOUR_CLIENT_ID",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        lazySocket: true,
        showPoweredBy: false,
      });
    };

    // try immediately
    initBotpress();

    // fallback: in case script loads after component mounts
    const interval = setInterval(() => {
      if (window.botpressWebChat) {
        initBotpress();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-[#f0f0eb] font-sans text-gray-800 overflow-hidden">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden absolute top-6 left-6 z-40 p-2 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <MenuIcon />
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-xs z-60"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 w-72 bg-[#f0f0eb] flex flex-col px-4 pb-8 pt-2 border-r border-gray-200/50 z-70 transition-transform duration-300 transform
        lg:translate-x-0 lg:static lg:h-full lg:z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Logo & Close Button (Mobile) */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-bold">
              AAKT
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-200 rounded-md"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-4">
          <Link
            to="/dashboard/home"
            onClick={() => setIsSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors duration-200 ${
              location.pathname === "/dashboard/home"
                ? "bg-gray-200/80 shadow-sm border border-gray-300/50 text-gray-900"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <div className="w-6 flex justify-center">
              <HomeIcon />
            </div>
            <span className="font-medium text-sm">Home</span>
          </Link>

          {/* BizInfra Group */}
          <div className="space-y-1">
            <div className="group flex items-center justify-between gap-2 mb-2 px-4 py-2 rounded-xl transition-colors duration-200 hover:bg-gray-100">
              <Link
                to="/dashboard/bizinfra"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-wider transition-colors duration-200 group-hover:text-gray-900"
              >
                <BizIcon /> BizInfra
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setBizInfraOpen((o) => !o);
                }}
                className="p-1 rounded transition-colors duration-200 hover:bg-gray-200/80 group-hover:bg-gray-200/80"
                aria-label={bizInfraOpen ? "Collapse BizInfra menu" : "Expand BizInfra menu"}
              >
                <ChevronIcon open={bizInfraOpen} />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                bizInfraOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-70"
              }`}
            >
              <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-5">
                {[
                  { name: "Skillset", icon: "/bizinfra/skill2.png" },
                  { name: "Network", icon: "/bizinfra/network.png" },
                  { name: "Intel", icon: "/bizinfra/intel2.png" },
                  { name: "Capital", icon: "/bizinfra/capital.png" },
                  { name: "Reach", icon: "/bizinfra/reach.png" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={`/dashboard/bizinfra/${item.name.toLowerCase()}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors
                      ${
                        location.pathname.includes(item.name.toLowerCase())
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }
                    `}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Group */}
          <div className="space-y-1 pt-2">
            <div className="group flex items-center justify-between gap-2 mb-2 px-4 py-2 rounded-xl transition-colors duration-200 hover:bg-gray-100">
              <Link
                to="/dashboard/portfolio"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center gap-3 text-gray-500 font-bold text-xs uppercase tracking-wider transition-colors duration-200 group-hover:text-gray-900"
              >
                <PortfolioIcon /> Portfolio
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setPortfolioOpen((o) => !o);
                }}
                className="p-1 rounded transition-colors duration-200 hover:bg-gray-200/80 group-hover:bg-gray-200/80"
                aria-label={portfolioOpen ? "Collapse Portfolio menu" : "Expand Portfolio menu"}
              >
                <ChevronIcon open={portfolioOpen} />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                portfolioOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-70"
              }`}
            >
              <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-5">
                {/* SaaS with nested submenu */}
                <div className="space-y-1">
                  <div className="group flex items-center justify-between gap-1 py-1">
                    <Link
                      to="/dashboard/portfolio/saas"
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === "/dashboard/portfolio/saas"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      SaaS
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setSaasOpen((o) => !o);
                      }}
                      className="p-1 rounded hover:bg-gray-200/80 transition-colors shrink-0"
                      aria-label={saasOpen ? "Collapse SaaS menu" : "Expand SaaS menu"}
                    >
                      <ChevronIcon open={saasOpen} />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-out ${
                      saasOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-70"
                    }`}
                  >
                    <div className="pl-3 space-y-0 border-l-2 border-gray-100 ml-2">
                      {/* Department 1 with nested submenu */}
                      <div className="space-y-0">
                        <div className="group flex items-center justify-between gap-1 py-0.5">
                          <Link
                            to="/dashboard/portfolio/saas/department"
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex-1 py-1.5 pl-2 text-sm font-medium rounded-lg transition-colors ${
                              location.pathname === "/dashboard/portfolio/saas/department"
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            }`}
                          >
                            Department 1
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setDepartment1Open((o) => !o);
                            }}
                            className="p-0.5 rounded hover:bg-gray-200/80 transition-colors shrink-0"
                            aria-label={department1Open ? "Collapse Department 1" : "Expand Department 1"}
                          >
                            <ChevronIcon open={department1Open} />
                          </button>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-200 ease-out ${
                            department1Open ? "max-h-[140px] opacity-100" : "max-h-0 opacity-70"
                          }`}
                        >
                          <div className="pl-3 border-l-2 border-gray-100 ml-2 space-y-0">
                            {[
                              { name: "Sales", path: "/dashboard/portfolio/saas/department/sales" },
                              { name: "Marketing", path: "/dashboard/portfolio/saas/department/marketing" },
                              { name: "Product", path: "/dashboard/portfolio/saas/department/product" },
                            ].map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`block py-1.5 pl-3 text-sm font-medium rounded-lg transition-colors ${
                                  location.pathname === item.path
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Department 2 with nested submenu */}
                      <div className="space-y-0">
                        <div className="group flex items-center justify-between gap-1 py-0.5">
                          <Link
                            to="/dashboard/portfolio/saas/department2"
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex-1 py-1.5 pl-2 text-sm font-medium rounded-lg transition-colors ${
                              location.pathname === "/dashboard/portfolio/saas/department2"
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            }`}
                          >
                            Department 2
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setDepartment2Open((o) => !o);
                            }}
                            className="p-0.5 rounded hover:bg-gray-200/80 transition-colors shrink-0"
                            aria-label={department2Open ? "Collapse Department 2" : "Expand Department 2"}
                          >
                            <ChevronIcon open={department2Open} />
                          </button>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-200 ease-out ${
                            department2Open ? "max-h-[140px] opacity-100" : "max-h-0 opacity-70"
                          }`}
                        >
                          <div className="pl-3 border-l-2 border-gray-100 ml-2 space-y-0">
                            {[
                              { name: "Sales", path: "/dashboard/portfolio/saas/department2/sales" },
                              { name: "Marketing", path: "/dashboard/portfolio/saas/department2/marketing" },
                              { name: "Product", path: "/dashboard/portfolio/saas/department2/product" },
                            ].map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`block py-1.5 pl-3 text-sm font-medium rounded-lg transition-colors ${
                                  location.pathname === item.path
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Process */}
                      <Link
                        to="/dashboard/portfolio/saas/process"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`block py-1.5 pl-2 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname.includes("/saas/process")
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        }`}
                      >
                        Process
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Ecommerce */}
                <Link
                  to="/dashboard/portfolio/ecommerce"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname.includes("ecommerce")
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  Ecommerce
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-auto pt-6">
          <Link
            to="/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="w-6 flex justify-center">
              <SettingsIcon />
            </div>
            <span className="font-medium text-sm">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar">
        {/* Scrollable Content */}
        <div className="px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
