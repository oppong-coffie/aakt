import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Network Page - Displays a directory of connections with multiple view modes.
 * Features a Directory (Grid/List) and an Outreach (Campaigns) section.
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
    <line x1="12" cy="12" x2="12" y2="12"></line>
    <path d="M12 5v14M5 12h14" />
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

interface Person {
  name: string;
  role: string;
  avatar: string;
  email?: string;
  phone?: string;
  bio?: string;
}

const navItems = [
  {
    id: "Skillset",
    label: "Skillset",
    image: "/bizinfra/skill2.png",
    path: "/dashboard/bizinfra/skillset",
  },
  {
    id: "Network",
    label: "Network",
    image: "/bizinfra/network.png",
    path: "/dashboard/bizinfra/network",
  },
  {
    id: "Capital",
    label: "Capital",
    image: "/bizinfra/capital.png",
    path: "/dashboard/bizinfra/capital",
  },
  {
    id: "Intel",
    label: "Intel",
    image: "/bizinfra/intel2.png",
    path: "/dashboard/bizinfra/intel",
  },
  {
    id: "Reach",
    label: "Reach",
    image: "/bizinfra/reach.png",
    path: "/dashboard/bizinfra/reach",
  },
];

const people: Person[] = [
  {
    name: "Bessie Cooper",
    role: "Web Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bessie",
    email: "bessie.cooper@example.com",
    phone: "+1 (555) 001-0203",
    bio: "Passionate web designer with 10 years of experience in creating beautiful user interfaces.",
  },
  {
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ronald",
    email: "ronald.richards@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Marketing strategist focused on data-driven growth and creative brand storytelling.",
  },
  {
    name: "Brooklyn Simmons",
    role: "Nursing Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn",
    email: "brooklyn.s@example.com",
    phone: "+1 (555) 987-6543",
    bio: "Dedicated healthcare professional providing compassionate care and assistance.",
  },
  {
    name: "Leslie Alexander",
    role: "President of Sales",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
    email: "leslie.alexander@example.com",
    phone: "+1 (555) 246-8135",
    bio: "Experienced sales leader driving revenue growth and building high-performance teams.",
  },
  {
    name: "Guy Hawkins",
    role: "Dog Trainer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guy",
    email: "guy.hawkins@example.com",
    phone: "+1 (555) 369-1478",
    bio: "Expert dog trainer specialized in positive reinforcement and behavioral adjustment.",
  },
  {
    name: "Darrell Steward",
    role: "Medical Assistant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
    email: "darrell.steward@example.com",
    phone: "+1 (555) 741-8520",
    bio: "Skilled medical assistant ensuring clinic efficiency and patient comfort.",
  },
];

/**
 * NetworkTree Component - Visualizes connections in a radial tree/map layout.
 * @param onSelectPerson - callback when a person node is clicked
 */
const NetworkTree = ({
  onSelectPerson,
}: {
  onSelectPerson: (person: Person) => void;
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Center Circle */}
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs ring ring-slate-500 z-50">
        {/* Connection Lines Illustration */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
          }}
        >
          {people.map((_, i) => {
            const angle = (i * 360) / people.length;
            const rad = (angle * Math.PI) / 180;
            const x2 = 250 + Math.cos(rad) * 150;
            const y2 = 250 + Math.sin(rad) * 150;
            return (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x2}
                y2={y2}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Nodes */}
      {people.map((person, i) => {
        const angle = (i * 360) / people.length;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 180;
        const y = Math.sin(rad) * 180;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            transition={{ delay: i * 0.1 }}
            className="absolute flex items-center gap-3 z-30 cursor-pointer"
            onClick={() => onSelectPerson(person)}
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-white hover:scale-110 transition-transform">
              <img
                src={person.avatar}
                className="w-full h-full object-cover"
                alt={person.name}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-900 leading-tight">
                {person.name}
              </span>
              <span className="text-[8px] text-gray-400 leading-tight">
                {person.role}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

/**
 * ListView Component - Renders the network directory in a standard table format.
 * @param onSelectPerson - callback when a row is clicked
 */
const ListView = ({
  onSelectPerson,
}: {
  onSelectPerson: (person: Person) => void;
}) => {
  return (
    <div className="w-full h-full bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      <div className="overflow-y-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Person
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Role
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest hidden md:table-cell">
                Contact
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="group hover:bg-blue-50/30 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                onClick={() => onSelectPerson(person)}
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay={i * 50}
              >
                <td className="px-8 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={person.avatar}
                      className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100"
                      alt={person.name}
                    />
                    <span className="text-sm font-bold text-gray-900">
                      {person.name}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    {person.role}
                  </span>
                </td>
                <td className="px-8 py-4 hidden md:table-cell">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-gray-500">
                      {person.email}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400">
                      {person.phone}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4 text-right">
                  <button className="text-gray-400 group-hover:text-blue-600 transition-colors">
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Network = () => {
  const [viewMode, setViewMode] = useState<"people" | "tree" | "list">(
    "people",
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewDropdownOpen, setIsViewDropdownOpen] = useState(false);
  const [addModalStep, setAddModalStep] = useState<
    "initial" | "not-known" | "add-person"
  >("initial");
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  /**
   * Modal component to display detailed information about a selected connection.
   */
  const PersonDetailsModal = () => (
    <AnimatePresence>
      {selectedPerson && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedPerson(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-white w-full max-w-md rounded-5xl shadow-2xl relative z-100 overflow-hidden"
          >
            {/* Modal Header/Art */}
            <div className="h-32 bg-linear-to-br from-blue-600 to-blue-400 relative">
              <button
                onClick={() => setSelectedPerson(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Avatar positioning */}
            <div className="px-10 -mt-16 text-center">
              <div className="inline-block p-1 bg-white rounded-4xl shadow-xl">
                <img
                  src={selectedPerson.avatar}
                  className="w-32 h-32 rounded-[1.8rem] bg-gray-50 object-cover"
                  alt={selectedPerson.name}
                />
              </div>

              <div className="mt-4 mb-8">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                  {selectedPerson.name}
                </h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">
                  {selectedPerson.role}
                </p>
              </div>

              {/* Bio/Info */}
              <div className="text-left space-y-6 mb-10">
                <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                    Professional Bio
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {selectedPerson.bio}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs">
                    <span className="text-[10px] font-bold text-gray-400 block mb-1">
                      Email
                    </span>
                    <span className="text-xs font-bold text-gray-800 break-all">
                      {selectedPerson.email}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs">
                    <span className="text-[10px] font-bold text-gray-400 block mb-1">
                      Phone
                    </span>
                    <span className="text-xs font-bold text-gray-800">
                      {selectedPerson.phone}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedPerson(null)}
                className="w-full py-5 bg-gray-900 text-white rounded-4xl font-bold hover:bg-gray-800 transition-colors mb-10"
              >
                Close Profile
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  /**
   * Modal component to add a new connection with a multi-step form.
   */
  const AddConnectionModal = () => (
    <AnimatePresence>
      {isAddModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => {
              setIsAddModalOpen(false);
              setAddModalStep("initial");
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-sm rounded-4xl shadow-2xl relative z-100 p-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                {addModalStep === "not-known" && (
                  <button
                    onClick={() => setAddModalStep("initial")}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100/80 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                  >
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
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <h2 className="text-xl font-bold text-gray-900">
                  {addModalStep === "initial"
                    ? "Add New Connection"
                    : "Add Not Known"}
                </h2>
              </div>
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setAddModalStep("initial");
                }}
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

            {/* Options */}
            <div className="space-y-4">
              {addModalStep === "initial" ? (
                <>
                  <button
                    onClick={() => setAddModalStep("add-person")}
                    className="w-full text-left p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
                  >
                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Known
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      Add a person you already know.
                    </p>
                  </button>

                  <Link to="/dashboard/bizinfra/skillset/network/process">
                    <button className="w-full text-left p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group mt-4">
                      <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        Unknown
                      </h3>
                      <p className="text-xs text-gray-400 font-medium">
                        Start a process to reach someone you don't know.
                      </p>
                    </button>
                  </Link>
                </>
              ) : addModalStep === "add-person" ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 bg-gray-50/50"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    className="w-full p-3 border rounded-xl outline-none focus:border-blue-500 bg-gray-50/50"
                  />
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold mt-2">
                    Add Person
                  </button>
                </div>
              ) : (
                <>
                  {/* Previous logic for not-known/warm/cold removed or replaced by direct link above */}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Header Area */}
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <Link
          to="/dashboard/bizinfra"
          className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-blue-600 hover:bg-white transition-colors"
        >
          <LeftArrowIcon />
        </Link>
        <div className="flex items-center gap-2">
          <div className="">BizInfra</div>
          <div className="font-bold text-xl ml-24">Network</div>
        </div>
      </div>

      <div className="flex justify-end items-center mb-8 relative z-10">
        <div className="flex items-center gap-2 relative">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-colors">
            <SearchIcon />
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
          >
            <PlusIcon />
          </button>
          <div className="h-8 w-px bg-gray-200 mx-1"></div>

          <div className="relative">
            <button
              onClick={() => setIsViewDropdownOpen(!isViewDropdownOpen)}
              className="px-4 py-2 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-xs font-bold text-gray-700"
            >
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
                {viewMode === "people" && (
                  <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                )}
              </svg>
              {viewMode === "people" ? "Directory" : "Outreach"}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isViewDropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {isViewDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsViewDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                  >
                    {[
                      {
                        id: "people",
                        label: "People view",
                        icon: <path d="M4 6h16M4 12h16M4 18h16" />,
                      },
                      {
                        id: "tree",
                        label: "Tree view",
                        icon: (
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                        ),
                      },
                      {
                        id: "list",
                        label: "List view",
                        icon: <path d="M4 6h16M4 12h16M4 18h16" />,
                      },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setViewMode(option.id as "list" | "people" | "tree");
                          setIsViewDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors flex items-center gap-3
                          ${viewMode === option.id ? "text-blue-600 bg-blue-50/50" : "text-gray-600 hover:bg-gray-50"}
                        `}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          {option.icon}
                        </svg>
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-20 relative">
        {/* Outreach Campaigns Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">
            Outreach Campaigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center h-40 cursor-pointer hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <PlusIcon />
              </div>
              <span className="font-bold text-gray-700 text-sm">
                Create Campaign
              </span>
            </div>
            {/* Example Campaign Card */}
            <div
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md">
                  Active
                </span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                    ></div>
                  ))}
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-1">
                Q1 Investor Outreach
              </h4>
              <p className="text-xs text-gray-500">
                Targeting 50 potential angels.
              </p>
            </div>
          </div>
        </div>

        {/* Existing Views */}
        {viewMode === "people" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {people.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => setSelectedPerson(person)}
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay={i * 100}
              >
                <div className="w-full aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-4 group-hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={person.avatar}
                    className="w-full h-full object-cover rounded-2xl relative z-10"
                    alt={person.name}
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">
                  {person.name}
                </h3>
                <p className="text-[10px] font-medium text-gray-400">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        ) : viewMode === "tree" ? (
          <div className="w-full h-[500px] rounded-4xl relative overflow-hidden bg-white border border-gray-100">
            <NetworkTree onSelectPerson={setSelectedPerson} />
          </div>
        ) : (
          <ListView onSelectPerson={setSelectedPerson} />
        )}
      </div>

      <AddConnectionModal />
      <PersonDetailsModal />

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10 pt-10 relative z-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4 text-center">
          {navItems.map((item) => {
            const isSelected = item.id === "Network";
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
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-3/4 h-3/4 object-contain transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
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

export default Network;
