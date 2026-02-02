import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type RiskLevel = "low" | "low-medium" | "medium" | "high";

type RiskItem = {
  id: string;
  title: string;
  note: string;
  level: RiskLevel;
};

const uid = () => Math.random().toString(36).slice(2, 10);

const levelLabel: Record<RiskLevel, string> = {
  low: "Low",
  "low-medium": "Low → Medium",
  medium: "Medium",
  high: "High",
};

function badgeClasses(level: RiskLevel) {
  // keep it simple and close to screenshot: subtle border + light tint + colored text
  switch (level) {
    case "low":
      return "border-red-200 bg-red-50 text-red-600";
    case "low-medium":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "medium":
      return "border-yellow-200 bg-yellow-50 text-yellow-700";
    case "high":
      return "border-green-200 bg-green-50 text-green-700";
    default:
      return "border-gray-200 bg-white text-gray-700";
  }
}

const starterRisks: RiskItem[] = [
  {
    id: uid(),
    title: "Market Risk:",
    note: "They are a lot of big players in the market that want to compete",
    level: "low",
  },
  {
    id: uid(),
    title: "Product Risk:",
    note: "They are a lot of big players in the market that want to compete",
    level: "low-medium",
  },
  {
    id: uid(),
    title: "Regulation Risk:",
    note: "They are a lot of big players in the market that want to compete",
    level: "high",
  },
];

export default function FinanceRiskFactors() {
  const navigate = useNavigate();

  const [risks, setRisks] = useState<RiskItem[]>(starterRisks);

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const addRisk = () => {
    setRisks((prev) => [
      ...prev,
      { id: uid(), title: "New Risk:", note: "Describe the risk...", level: "low" },
    ]);
  };

  const updateRisk = (id: string, patch: Partial<RiskItem>) => {
    setRisks((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const cycleLevel = (level: RiskLevel): RiskLevel => {
    const order: RiskLevel[] = ["low", "low-medium", "medium", "high"];
    const idx = order.indexOf(level);
    return order[(idx + 1) % order.length];
  };

  const handleSaveContinue = () => {
    const payload = { risks };
    console.log("Finance risks payload:", payload);

    // change to your next route
    navigate("/dashboard/portfolio/firstpage", { state: payload });
  };

  const canSave = useMemo(() => risks.length > 0, [risks]);

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Finance</div>
          <div className="text-xs font-semibold text-gray-900">{stepText}</div>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="text-xs font-semibold text-gray-900">{progressPct}%</div>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Prompt */}
        <div className="mt-10 flex justify-center">
          <p className="max-w-xl text-center text-xs font-semibold text-gray-900 leading-5">
            As a last step, let’s put our realist hat on and list some risk factors
          </p>
        </div>

        {/* Risks */}
        <div className="mt-10 mx-auto max-w-2xl space-y-6">
          {risks.map((r) => (
            <div key={r.id} className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-gray-900">{r.title}</div>
                <div className="mt-1 text-[10px] text-gray-600">{r.note}</div>
              </div>

              <button
                type="button"
                onClick={() => updateRisk(r.id, { level: cycleLevel(r.level) })}
                className={[
                  "shrink-0 rounded-md border px-3 py-1 text-[10px] font-semibold",
                  badgeClasses(r.level),
                ].join(" ")}
                title="Click to change level"
              >
                {levelLabel[r.level]}
              </button>
            </div>
          ))}

          {/* Add */}
          <button
            type="button"
            onClick={addRisk}
            className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
              +
            </span>
            Add
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 flex justify-end">
          <button
            type="button"
            onClick={handleSaveContinue}
            disabled={!canSave}
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
}
