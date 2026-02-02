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
    
type Option = {
  id: string;
  label: string;
};

const decisionDrivers: Option[] = [
  { id: "compliance", label: "A. Compliance" },
  { id: "political", label: "B. Political safety" },
  { id: "budget", label: "C. Budget preservation" },
  { id: "optics", label: "D. Public optics" },
  { id: "directive", label: "E. Directive from above" },
];

const defaultBehaviors: Option[] = [
  { id: "careful", label: "A. Act carefully" },
  { id: "defer", label: "B. Defer" },
  { id: "precedent", label: "C. Follow precedent" },
  { id: "avoid", label: "D. Avoid responsibility" },
];

export default function GovernmentDecisionBehavior() {
  const navigate = useNavigate();

  const [decisionDriver, setDecisionDriver] = useState<string>("compliance");
  const [defaultBehavior, setDefaultBehavior] = useState<string>("careful");

  const handleContinue = () => {
    const payload = {
      decisionDriver,
      defaultBehavior,
    };

    console.log("Government decision payload:", payload);

    // update route to your actual next step
    navigate("/dashboard/portfolio/market/government/question3", {
      state: payload,
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            <LeftArrowIcon />
            <span>Government</span>
          </button>
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
        <div className="mt-12 space-y-12">
          {/* Question 1 */}
          <div>
            <p className="text-sm font-semibold text-gray-900">
              What governs their decisions?
            </p>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3">
              <span className="text-xs font-semibold text-gray-900 pt-2">2.</span>

              <div className="bg-white border border-gray-200 rounded-md p-2 space-y-2">
                {decisionDrivers.map((opt) => {
                  const active = decisionDriver === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDecisionDriver(opt.id)}
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

          {/* Question 2 */}
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Their default behavior is to…
            </p>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3">
              <span className="text-xs font-semibold text-gray-900 pt-2">2.</span>

              <div className="bg-white border border-gray-200 rounded-md p-2 space-y-2">
                {defaultBehaviors.map((opt) => {
                  const active = defaultBehavior === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDefaultBehavior(opt.id)}
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
        </div>

        {/* Footer */}
        <div className="mt-16 flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
