import { useNavigate } from "react-router-dom";

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
export default function ProductOnboardingIntro() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/dashboard/portfolio/p1/productobject2");
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] flex flex-col justify-between p-6">
      {/* Top title */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeftIcon />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Product Object</h1>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-start max-w-xl">
        <h2 className="text-base font-semibold text-gray-900 mb-2">
          Let’s get your product onboard
        </h2>

        <p className="text-sm text-gray-600 leading-6">
          We make it faster and easier for you to onboard your product from
          scratch with a few clicks.
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-end">
        <button
          onClick={handleContinue}
          className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
