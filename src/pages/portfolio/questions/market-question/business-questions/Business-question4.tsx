import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Option = {
  id: string;
  label: string;
};

const options: Option[] = [
  { id: "pilot", label: "A. Pilot" },
  { id: "phased", label: "B. Phased rollout" },
  { id: "full", label: "C. Full commitment" },
  { id: "long", label: "D. Long evaluation" },
];

export default function BusinessBuyingPreference() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("pilot");

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    const payload = { buyingPreference: selected };
    console.log("Submit payload:", payload);

    // submit or go to next flow
    navigate("/dashboard/portfolio/culture1", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-[#f3f2ed]">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-900">Business</h2>
          <span className="text-xs font-semibold text-gray-900">3 Out of 6</span>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-semibold text-gray-900">30%</span>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[30%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Question */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">
            Before full buy, they prefer…
          </h3>

          <div className="grid grid-cols-[28px_320px] gap-3">
            <span className="text-xs font-semibold text-gray-900 pt-2">3.</span>

            <div className="bg-white border border-gray-200 rounded-md p-2 space-y-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`w-full text-left px-3 py-2 text-xs rounded-md border transition
                    ${
                      selected === opt.id
                        ? "bg-indigo-50 border-indigo-300 ring-1 ring-indigo-200"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="h-9 px-4 rounded-lg border border-blue-400 text-blue-600 bg-white text-sm font-semibold hover:bg-blue-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
