import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

type ViewMode = "tree" | "list" | "card";

const allPeople = [
  {
    name: "Ronald Richards",
    role: "Marketing Coordinator",
    angle: -120,
    distance: 180,
    avatar: "https://i.pravatar.cc/150?u=ronald",
  },
  {
    name: "Brooklyn Simmons",
    role: "Nursing Assistant",
    angle: -45,
    distance: 220,
    avatar: "https://i.pravatar.cc/150?u=brooklyn",
  },
  {
    name: "Leslie Alexander",
    role: "President of Sales",
    angle: 15,
    distance: 200,
    avatar: "https://i.pravatar.cc/150?u=leslie",
  },
  {
    name: "Darrell Steward",
    role: "Medical Assistant",
    angle: 80,
    distance: 190,
    avatar: "https://i.pravatar.cc/150?u=darrell",
  },
  {
    name: "Guy Hawkins",
    role: "Dog Trainer",
    angle: 150,
    distance: 210,
    avatar: "https://i.pravatar.cc/150?u=guy",
  },
  {
    name: "Bessie Cooper",
    role: "Web Designer",
    angle: 210,
    distance: 230,
    avatar: "https://i.pravatar.cc/150?u=bessie",
  },
  {
    name: "Cody Fisher",
    role: "Medical Assistant",
    angle: 30,
    distance: 240,
    avatar: "https://i.pravatar.cc/150?u=cody",
  },
  {
    name: "Wade Warren",
    role: "President of Sales",
    angle: 60,
    distance: 220,
    avatar: "https://i.pravatar.cc/150?u=wade",
  },
  {
    name: "Jenny Wilson",
    role: "Web Designer",
    angle: 100,
    distance: 250,
    avatar: "https://i.pravatar.cc/150?u=jenny",
  },
  {
    name: "Arlene McCoy",
    role: "Web Designer",
    angle: 130,
    distance: 230,
    avatar: "https://i.pravatar.cc/150?u=arlene",
  },
  {
    name: "Kathryn Murphy",
    role: "Web Designer",
    angle: 170,
    distance: 260,
    avatar: "https://i.pravatar.cc/150?u=kathryn",
  },
  {
    name: "Esther Howard",
    role: "President of Sales",
    angle: 200,
    distance: 240,
    avatar: "https://i.pravatar.cc/150?u=esther",
  },
  {
    name: "Kristin Watson",
    role: "Nursing Assistant",
    angle: 240,
    distance: 250,
    avatar: "https://i.pravatar.cc/150?u=kristin",
  },
  {
    name: "Adam Fatal",
    role: "Software Engineer",
    angle: 280,
    distance: 230,
    avatar: "https://i.pravatar.cc/150?u=adam",
  },
  {
    name: "Jacob Jones",
    role: "Medical Assistant",
    angle: 310,
    distance: 240,
    avatar: "https://i.pravatar.cc/150?u=jacob",
  },
  {
    name: "Jane Cooper",
    role: "Marketing Coordinator",
    angle: 340,
    distance: 220,
    avatar: "https://i.pravatar.cc/150?u=jane",
  },
  {
    name: "Theresa Webb",
    role: "President of Sales",
    angle: -10,
    distance: 200,
    avatar: "https://i.pravatar.cc/150?u=theresa",
  },
  {
    name: "Albert Flores",
    role: "Dog Trainer",
    angle: -70,
    distance: 210,
    avatar: "https://i.pravatar.cc/150?u=albert",
  },
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

const Network = () => {
  const [view, setView] = useState<ViewMode>("tree");

  // For the Tree view, we only show a subset to keep it readable
  const treePeople = useMemo(() => allPeople.slice(0, 6), []);

  const renderViewSwitcher = () => {
    const views = [
      {
        id: "tree" as const,
        label: "Tree view",
        icon: (
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
            <path d="M3 12h18M3 6h18M3 18h18"></path>
            <circle cx="6" cy="6" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="6" cy="18" r="1.5"></circle>
          </svg>
        ),
      },
      {
        id: "list" as const,
        label: "List view",
        icon: (
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
        ),
      },
      {
        id: "card" as const,
        label: "Card view",
        icon: (
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
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        ),
      },
    ];

    const current = views.find((v) => v.id === view) || views[0];

    return (
      <div className="relative group">
        <button className="h-8 px-1 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
          {current.icon}
          {current.label}
        </button>
        {/* Dropdown / Quick Switcher */}
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-1">
          {views.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${view === v.id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {v.icon}
              {v.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-4 sm:p-8 relative overflow-hidden">
      {/* Top Right Action Bar */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-4 z-10">
        <button className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors">
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
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        {renderViewSwitcher()}
        <button className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-sm hover:bg-blue-700 transition-colors">
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
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 mt-16 sm:mt-12 mb-6 overflow-auto">
        {view === "tree" && (
          <div className="h-[500px] lg:h-full flex items-center justify-center relative scale-75 sm:scale-100 transition-transform origin-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 z-20"></div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {treePeople.map((person, i) => {
                const rad = (person.angle * Math.PI) / 180;
                const x = Math.cos(rad) * person.distance;
                const y = Math.sin(rad) * person.distance;
                return (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="#dbdbdb"
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>
            {treePeople.map((person, i) => {
              const rad = (person.angle * Math.PI) / 180;
              const x = Math.cos(rad) * person.distance;
              const y = Math.sin(rad) * person.distance;
              return (
                <div
                  key={i}
                  className="absolute flex items-center gap-2 group transition-all hover:scale-105 z-30"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden transition-transform group-hover:scale-110 shrink-0">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800 whitespace-nowrap leading-none">
                      {person.name}
                    </span>
                    <span className="text-[9px] text-gray-400 whitespace-nowrap leading-tight">
                      {person.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === "card" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
            {allPeople.map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start gap-4 transition-all hover:shadow-md h-44"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{person.name}</h4>
                  <p className="text-xs text-gray-500">{person.role}</p>
                </div>
                <button className="mt-auto text-blue-600 text-xs font-semibold hover:underline">
                  View profile
                </button>
              </div>
            ))}
          </div>
        )}

        {view === "list" && (
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
            {allPeople.map((person, i) => (
              <div
                key={i}
                className="flex items-center justify-between group py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">
                      {person.name}
                    </span>
                    <span className="text-xs text-gray-500">{person.role}</span>
                  </div>
                </div>
                <button className="text-blue-600 text-xs font-semibold hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                  View profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex justify-center pb-6 sm:pb-10">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar max-w-full px-4">
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
                    ${isSelected ? "bg-blue-600/10 border-2 border-blue-600 ring-4 ring-blue-600/5 shadow-md" : "bg-white border border-gray-100 hover:shadow-sm group-hover:border-gray-200"}
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

export default Network;
