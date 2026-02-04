import { useNavigate } from "react-router-dom";

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Card = {
  id: string;
  title: string;
  to: string;
};

const cards: Card[] = [
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    to: "/portfolio/saas/department-2/marketing/strategy",
  },
  {
    id: "campaigns",
    title: "Campaigns",
    to: "/portfolio/saas/department-2/marketing/campaigns",
  },
  {
    id: "content-brand",
    title: "Content & Branding",
    to: "/portfolio/saas/department-2/marketing/content-branding",
  },
];

export default function Marketing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f2ed]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Back"
          >
            <BackIcon />
          </button>

          <div className="text-sm font-semibold text-gray-900">
            Department 2
          </div>
          <div className="text-sm font-semibold text-gray-900">Marketing</div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Add"
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      {/* Center cards */}
      <div className="flex items-center justify-center min-h-[calc(100vh-72px)] px-6">
        <div className="flex gap-10">
          {cards.map((c) => (
            <button key={c.id} type="button" className="group">
              <div className="w-64 h-40 rounded-md border border-gray-300 bg-white shadow-sm transition group-hover:shadow-md" />
              <div className="mt-2 text-[11px] font-semibold text-gray-900 text-center">
                {c.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
