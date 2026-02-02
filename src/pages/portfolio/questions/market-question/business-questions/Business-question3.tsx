import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Choice = { id: string; label: string };

const decisionStyles: Choice[] = [
  { id: "data", label: "A. Data-driven" },
  { id: "peer", label: "B. Peer-validated" },
  { id: "auth", label: "C. Authority-led" },
  { id: "cons", label: "D. Consensus-based" },
];

const adoptionStyles: Choice[] = [
  { id: "early", label: "A. Early adopter" },
  { id: "cautious", label: "B. Cautious tester" },
  { id: "proven", label: "C. Proven-only" },
  { id: "resist", label: "D. Resistant" },
];

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function SelectOption({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left rounded-md border px-3 py-2 text-xs transition",
        selected
          ? "border-indigo-300 bg-indigo-50 ring-1 ring-indigo-200"
          : "border-gray-200 bg-white hover:bg-gray-50"
      )}
    >
      {children}
    </button>
  );
}

export default function BusinessDecisionAndAdoption() {
  const navigate = useNavigate();

  const [decisionId, setDecisionId] = useState<string>("data");
  const [adoptionId, setAdoptionId] = useState<string>("early");

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const handleCancel = () => navigate(-1);

  const handleContinue = () => {
    const payload = { decisionId, adoptionId };
    console.log("Decision & Adoption payload:", payload);

    // route to  next step
    navigate("/dashboard/portfolio/market/business/question4", { state: payload });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Business</div>
          <div className="text-xs font-semibold text-gray-900">{stepText}</div>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="text-xs font-semibold text-gray-900">{progressPct}%</div>
          <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-indigo-600" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-12">
          {/* Q1 */}
          <div>
            <div className="text-sm font-semibold text-gray-900">How do they decide?</div>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
              <div className="text-xs font-semibold text-gray-900 pt-2">2.</div>

              <div className="rounded-md bg-white border border-gray-200 p-2">
                <div className="space-y-2">
                  {decisionStyles.map((c) => (
                    <SelectOption
                      key={c.id}
                      selected={c.id === decisionId}
                      onClick={() => setDecisionId(c.id)}
                    >
                      {c.label}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div>
            <div className="text-sm font-semibold text-gray-900">
              How do they treat new solutions?
            </div>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
              <div className="text-xs font-semibold text-gray-900 pt-2">2.</div>

              <div className="rounded-md bg-white border border-gray-200 p-2">
                <div className="space-y-2">
                  {adoptionStyles.map((c) => (
                    <SelectOption
                      key={c.id}
                      selected={c.id === adoptionId}
                      onClick={() => setAdoptionId(c.id)}
                    >
                      {c.label}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="h-9 rounded-lg border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="h-9 rounded-lg border border-indigo-600 bg-indigo-600 px-4 text-sm font-bold text-white hover:bg-indigo-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
