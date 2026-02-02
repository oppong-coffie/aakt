import { useState } from "react";
import { useNavigate } from "react-router-dom";


type Goal = { label: string; value: string };

const goalOptions: Goal[] = [
  { label: "Select", value: "" },
  { label: "Innovation", value: "innovation" },
  { label: "Reliability", value: "reliability" },
  { label: "Cost effective", value: "cost_effective" },
];

export default function CultureCustomerGoals() {
  const navigate = useNavigate();

  const [goal, setGoal] = useState<string>("");
  const [alignment, setAlignment] = useState<string>("");

  const handleSaveContinue = () => {
    // change to the next route
    navigate("/dashboard/portfolio/culture1");
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Culture</div>
          <div className="text-xs font-semibold text-gray-900">2 Out of 6</div>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="text-xs font-semibold text-gray-900">20%</div>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 mx-auto max-w-2xl space-y-8">
          {/* Question 1 */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">
              What are your customer’s goals?
            </div>

            <select
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              {goalOptions.map((g) => (
                <option key={g.value || "select"} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          {/* Question 2 */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">
              How does your desired culture align with their goals?
            </div>

            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Answer"
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex justify-end">
          <button
            type="button"
            onClick={handleSaveContinue}
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
}
