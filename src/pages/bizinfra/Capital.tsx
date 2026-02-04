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

const CardViewIcon = () => (
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
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
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
    id: 1,
    source: "eBay",
    amount: "$767.50",
    status: "Warm",
    statusColor: "text-yellow-600",
    type: "Corporate Venture",
    location: "San Jose, CA",
    thesis:
      "Strategic investments in e-commerce infrastructure and fintech sectors.",
    notes:
      "Follow up scheduled for next quarter. Interested in scalable logistics solutions.",
  },
  {
    id: 2,
    source: "Sony",
    amount: "$779.58",
    status: "Committed",
    statusColor: "text-green-600",
    type: "Venture Capital",
    location: "Tokyo, JP",
    thesis: "Entertainment, gaming, and consumer electronics innovation.",
    notes:
      "Highly interested in interactive digital content and hardware synergies.",
  },
  {
    id: 3,
    source: "Mitsubishi",
    amount: "$219.78",
    status: "Warm",
    statusColor: "text-yellow-600",
    type: "Investment Bank",
    location: "Tokyo, JP",
    thesis: "Global industrial and technology expansion support.",
    notes: "Exploring debt-equity mix for infrastructure projects.",
  },
  {
    id: 4,
    source: "MasterCard",
    amount: "$782.01",
    status: "Committed",
    statusColor: "text-green-600",
    type: "Corporate VC",
    location: "New York, NY",
    thesis: "Digital payments, security, and financial inclusion technologies.",
    notes:
      "Confirmed participation in Series B round. Strategic partnership pending.",
  },
  {
    id: 5,
    source: "McDonald's",
    amount: "$589.99",
    status: "Committed",
    statusColor: "text-green-600",
    type: "Strategic Partner",
    location: "Chicago, IL",
    thesis: "Restaurant tech, logistics, and supply chain efficiency.",
    notes: "Focusing on automation and delivery experience improvements.",
  },
  {
    id: 6,
    source: "L'Oréal",
    amount: "$710.68",
    status: "Pitched",
    statusColor: "text-blue-500",
    type: "Brand Fund",
    location: "Paris, FR",
    thesis:
      "Beauty tech, AI-driven personalization, and sustainable materials.",
    notes: "Initial pitch went well. Moving to technical due diligence.",
  },
  {
    id: 7,
    source: "Bank of America",
    amount: "$450.54",
    status: "Committed",
    statusColor: "text-green-600",
    type: "Institutional Parent",
    location: "Charlotte, NC",
    thesis: "Fintech, cybersecurity, and ESG-focused investments.",
    notes: "Strong support for the green energy transition portfolio.",
  },
];

const Capital = () => {
  const [viewMode, setViewMode] = useState<"list" | "card">("list");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCreateCampaignModalOpen, setIsCreateCampaignModalOpen] =
    useState(false);
  const [selectedSource, setSelectedSource] = useState<any | null>(null);

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

  // Source Details Modal
  const SourceDetailsModal = () => (
    <AnimatePresence>
      {selectedSource && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedSource(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl relative z-100 overflow-hidden"
          >
            {/* Modal Header/Art */}
            <div className="h-32 bg-linear-to-br from-yellow-500 to-yellow-300 relative">
              <button
                onClick={() => setSelectedSource(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors"
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

            <div className="px-10 pb-10 -mt-10">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 mb-8 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl font-black text-yellow-600">
                    {selectedSource.source[0]}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 text-center">
                  {selectedSource.source}
                </h3>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
                  {selectedSource.type}
                </p>
                <div className="mt-4 px-4 py-1.5 bg-gray-50 rounded-full">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${selectedSource.statusColor}`}
                  >
                    {selectedSource.status}
                  </span>
                </div>
              </div>

              <div className="space-y-8 mb-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50/50 p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                      Check Size
                    </span>
                    <span className="text-lg font-black text-blue-600">
                      {selectedSource.amount}
                    </span>
                  </div>
                  <div className="bg-gray-50/50 p-4 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                      Geography
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      {selectedSource.location}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Investment Thesis
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {selectedSource.thesis}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Notes
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {selectedSource.notes}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSource(null)}
                className="w-full py-5 bg-gray-900 text-white rounded-[2rem] font-bold hover:bg-gray-800 transition-colors mb-4"
              >
                Close Details
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
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 transition-colors hover:bg-gray-50">
            <SearchIcon />
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
          >
            <PlusIcon />
          </button>
          <button
            onClick={() => setViewMode(viewMode === "list" ? "card" : "list")}
            className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-50"
          >
            {viewMode === "list" ? (
              <>
                <CardViewIcon /> Card view
              </>
            ) : (
              <>
                <ListViewIcon /> List view
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-12 overflow-y-auto no-scrollbar pb-20">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Capital Sources
          </h3>
          <AnimatePresence mode="wait">
            {viewMode === "list" ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/50 rounded-[2.5rem] p-4 border border-gray-200/50"
              >
                <div className="grid grid-cols-3 px-8 py-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100/50">
                  <span>Source</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                <div className="space-y-1 mt-2">
                  {capitalSources.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedSource(item)}
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
              </motion.div>
            ) : (
              <motion.div
                key="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {capitalSources.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedSource(item)}
                    className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4">
                      <div
                        className={`w-2 h-2 rounded-full ${item.statusColor.replace("text-", "bg-")}`}
                      ></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Source
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 leading-tight">
                          {item.source}
                        </h4>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                          Amount
                        </span>
                        <span className="text-2xl font-black text-blue-600 tracking-tight">
                          {item.amount}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                        <span
                          className={`text-[10px] font-black uppercase tracking-widest ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-300 group-hover:text-blue-600 transition-colors"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
                  <Link to="/dashboard/bizinfra/skillset/project/project">
                    <button className="w-full py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AddCapitalModal />
      <CreateCampaignModal />
      <SourceDetailsModal />

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
