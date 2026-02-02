import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftArrowIcon = () => (
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
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

type Option = { id: string; label: string };

const engagedOptions: Option[] = [
  { id: "formal", label: "A. Proceed formally" },
  { id: "slow", label: "B. Slow-walk" },
  { id: "scope", label: "C. Re-scope" },
  { id: "stall", label: "D. Stall indefinitely" },
];

export default function GovernmentEngagedSupplyDemand() {
  const navigate = useNavigate();

  const [engagedBehavior, setEngagedBehavior] = useState<string>("formal");
  const [supply, setSupply] = useState<string>("");
  const [demand, setDemand] = useState<string>("");

  const handleSubmit = () => {
    const payload = {
      engagedBehavior,
      supply,
      demand,
    };

    console.log("Government submit payload:", payload);

    // Change to your real next route / success page
    navigate("/dashboard/portfolio/culture1", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <LeftArrowIcon />
          </button>
          <h2 className="text-sm font-semibold text-gray-900">Government</h2>
          <span className="text-xs font-semibold text-gray-900">2 Out of 6</span>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-900">20%</span>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8">
          {/* Single choice */}
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Once engaged, they usually…
            </p>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
              <span className="text-xs font-semibold text-gray-900 pt-2">2.</span>

              <div className="bg-white border border-gray-200 rounded-md p-2 space-y-2">
                {engagedOptions.map((opt) => {
                  const active = engagedBehavior === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setEngagedBehavior(opt.id)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-md border transition
                        ${
                          active
                            ? "bg-indigo-50 border-indigo-300 ring-1 ring-indigo-200"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Supply textarea */}
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-gray-900 mb-1">
              Write briefly about the supply
            </div>
            <textarea
              className="w-full h-28 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              placeholder="Answer"
              value={supply}
              onChange={(e) => setSupply(e.target.value)}
            />
          </div>

          {/* Demand textarea */}
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-gray-900 mb-1">
              Write briefly about the demand
            </div>
            <textarea
              className="w-full h-28 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
              placeholder="Answer"
              value={demand}
              onChange={(e) => setDemand(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="h-9 px-6 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
