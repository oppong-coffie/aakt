import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ListViewIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
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

const capitalSources = [
  {
    source: "eBay",
    amount: "$767.50",
    status: "Warm",
    statusColor: "text-yellow-600",
  },
  {
    source: "Sony",
    amount: "$779.58",
    status: "Committed",
    statusColor: "text-green-600",
  },
  {
    source: "Mitsubishi",
    amount: "$219.78",
    status: "Warm",
    statusColor: "text-yellow-600",
  },
  {
    source: "MasterCard",
    amount: "$782.01",
    status: "Committed",
    statusColor: "text-green-600",
  },
  {
    source: "McDonald's",
    amount: "$589.99",
    status: "Committed",
    statusColor: "text-green-600",
  },
  {
    source: "L'Oréal",
    amount: "$710.68",
    status: "Pitched",
    statusColor: "text-blue-500",
  },
  {
    source: "Bank of America",
    amount: "$450.54",
    status: "Committed",
    statusColor: "text-green-600",
  },
];

const Capital = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCreateCampaignModalOpen, setIsCreateCampaignModalOpen] =
    useState(false);

  // Add Source Modal
  const AddCapitalModal = () => (
    <AnimatePresence>
      {isAddModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-xl rounded-[2rem] shadow-2xl relative z-index-100 p-8 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Add New Capital Source
              </h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100/80 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
              >
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
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
              />

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Geography
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>Continent</option>
                  </select>
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>Country</option>
                  </select>
                  <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none">
                    <option>City</option>
                  </select>
                </div>
              </div>

              <div className="w-full aspect-video border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-gray-50/30 group hover:border-blue-300 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <PlusIcon />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600">
                  Campaign Image
                </span>
              </div>

              <input
                type="text"
                placeholder="Type of capital source"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />
              <input
                type="text"
                placeholder="Check size"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />
              <input
                type="text"
                placeholder="Instrument type"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm"
              />

              <textarea
                placeholder="Thesis & Goals"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm h-24 resize-none focus:outline-none"
              ></textarea>
              <textarea
                placeholder="Notes"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm h-24 resize-none focus:outline-none"
              ></textarea>

              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  Reminder
                </span>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                  <PlusIcon /> Add Reminder
                </button>
              </div>

              <button className="w-full py-4 bg-blue-600/30 text-blue-700 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all mt-4 shadow-sm">
                Add Capital Source
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Create Campaign Modal
  const CreateCampaignModal = () => (
    <AnimatePresence>
      {isCreateCampaignModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsCreateCampaignModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl relative z-index-100 p-8 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Create Campaign
              </h2>
              <button
                onClick={() => setIsCreateCampaignModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100/80 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
              >
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
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Campaign Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
              />
              <textarea
                placeholder="Description"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm h-32 resize-none focus:outline-none"
              ></textarea>
              <input
                type="text"
                placeholder="Campaign Type"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm focus:outline-none"
              />

              <div className="relative group">
                <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm text-gray-500 appearance-none outline-hidden cursor-pointer">
                  <option>Select Audience</option>
                  <option>Investors</option>
                  <option>Partners</option>
                  <option>Customers</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                placeholder="Content"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/30 text-sm focus:outline-none"
              />

              <div className="w-full aspect-video border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-gray-50/30 group hover:border-blue-300 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <PlusIcon />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-blue-600">
                  Campaign Image
                </span>
              </div>

              <button className="w-full py-4 bg-blue-600/30 text-blue-700 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all mt-4 shadow-sm">
                Add Campaign
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 leading-none mb-1">
              Bizinfra
            </span>
            <h2 className="text-sm font-bold text-gray-900 leading-none">
              Capital
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
            <SearchIcon />
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
          >
            <PlusIcon />
          </button>
          <button className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 text-xs font-bold text-gray-700">
            <ListViewIcon /> List view
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-12 overflow-y-auto no-scrollbar pb-20">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Capital Sources
          </h3>
          <div className="bg-white/50 rounded-[2.5rem] p-4 border border-gray-200/50">
            <div className="grid grid-cols-3 px-8 py-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100/50">
              <span>Source</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            <div className="space-y-1 mt-2">
              {capitalSources.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-8 py-4 hover:bg-white rounded-2xl transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">
                    {item.source}
                  </span>
                  <span className="text-sm font-bold text-gray-600">
                    {item.amount}
                  </span>
                  <span className={`text-sm font-bold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Fundraising Campaigns
            </h3>
            <button
              onClick={() => setIsCreateCampaignModalOpen(true)}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <PlusIcon />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-[2rem]"></div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Campaign {i}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase">Type:</span>
                      <span className="text-gray-900">Fund</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase">Amount:</span>
                      <span className="text-gray-900">$90,000</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase">Status:</span>
                      <span className="text-green-600">Live</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AddCapitalModal />
      <CreateCampaignModal />

      <div className="mt-auto flex justify-center pb-6 pt-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Capital";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-300
                  ${isSelected ? "bg-yellow-600/10 border-2 border-yellow-600 ring-4 ring-yellow-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm"}
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

export default Capital;
