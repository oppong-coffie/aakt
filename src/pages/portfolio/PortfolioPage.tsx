import { useParams, useNavigate } from "react-router-dom";

// Icons
const BackIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M19 12H5M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Capitalize the first letter of the category for the title
  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Portfolio";

  const cards = [
    { title: "Department 1" },
    { title: "Department 2" },
    { title: "Process" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-xs hover:bg-gray-50 transition-colors"
          >
            <BackIcon />
            <span className="text-gray-600 font-medium">Portfolio</span>
          </button>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xs hover:bg-gray-50 transition-colors">
            <SearchIcon />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xs hover:bg-gray-50 transition-colors">
            <PlusIcon />
          </button>
        </div>
      </header>

      {/* Grid Content */}
      <div className="flex items-start gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-3 w-64">
            <div className="w-full aspect-4/3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"></div>
            <span className="text-gray-800 font-medium">{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
