import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Option = { label: string; value: string };

const makesProblemOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "It wastes time", value: "time" },
  { label: "It costs money", value: "money" },
  { label: "It creates errors", value: "errors" },
  { label: "It causes frustration", value: "frustration" },
];

const showsUpOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Only during peak periods", value: "peak" },
];

export default function ProductObjectProblemProfile() {
  const navigate = useNavigate();

  const [problem, setProblem] = useState("");
  const [makesProblem, setMakesProblem] = useState("");
  const [showsUp, setShowsUp] = useState("");
  const [ignored, setIgnored] = useState("");
  const [howKnown, setHowKnown] = useState("");

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const canContinue = useMemo(() => {
    return (
      problem.trim().length > 0 &&
      makesProblem.trim().length > 0 &&
      showsUp.trim().length > 0 &&
      ignored.trim().length > 0 &&
      howKnown.trim().length > 0
    );
  }, [problem, makesProblem, showsUp, ignored, howKnown]);

  const handleCancel = () => navigate(-1);

  const handleContinue = () => {
    const payload = {
      problem,
      makesProblem,
      showsUp,
      ignored,
      howKnown,
    };

    console.log("Problem profile payload:", payload);

    // change to your next step
    navigate("/dashboard/portfolio/p1/productobject5", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Product Object</div>
          <div className="text-xs font-semibold text-gray-900">{stepText}</div>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="text-xs font-semibold text-gray-900">{progressPct}%</div>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Card */}
        <div className="mt-6 w-full max-w-3xl rounded-md border border-gray-200 bg-white p-4">
          <div className="text-sm font-semibold text-gray-900 mb-4">
            Problem Profile
          </div>

          <div className="space-y-4">
            {/* Problem */}
            <Field label="What problem are you solving?">
              <textarea
                className="w-full h-16 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                placeholder="Answer"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </Field>

            {/* Makes it a problem */}
            <Field label="What makes this a problem?">
              <select
                className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                value={makesProblem}
                onChange={(e) => setMakesProblem(e.target.value)}
              >
                {makesProblemOptions.map((o) => (
                  <option key={o.value || "select"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </Field>

            {/* Shows up */}
            <Field label="When does it show up?">
              <select
                className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                value={showsUp}
                onChange={(e) => setShowsUp(e.target.value)}
              >
                {showsUpOptions.map((o) => (
                  <option key={o.value || "select"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </Field>

            {/* Ignored */}
            <Field label="What happens if the problem is ignored?">
              <textarea
                className="w-full h-16 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                placeholder="Answer"
                value={ignored}
                onChange={(e) => setIgnored(e.target.value)}
              />
            </Field>

            {/* How did you know */}
            <Field label="How did you know this is a problem?">
              <textarea
                className="w-full h-16 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                placeholder="Answer"
                value={howKnown}
                onChange={(e) => setHowKnown(e.target.value)}
              />
            </Field>
          </div>

          {/* Footer buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="h-9 px-5 rounded-lg border border-blue-400 bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!canContinue}
              className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-gray-900 mb-1">{label}</div>
      {children}
    </label>
  );
}
