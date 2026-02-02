import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Choice = {
  id: string;
  label: string;
};

const purchaseJustifications: Choice[] = [
  { id: "roi", label: "A. ROI / cost savings" },
  { id: "risk", label: "B. Risk reduction" },
  { id: "perf", label: "C. Performance gains" },
  { id: "comp", label: "D. Competitive pressure" },
  { id: "lead", label: "E. Leadership mandate" },
];

const fears: Choice[] = [
  { id: "wrong", label: "A. Choosing wrong" },
  { id: "budget", label: "B. Budget scrutiny" },
  { id: "ops", label: "C. Operational disruption" },
  { id: "blame", label: "D. Personal blame" },
  { id: "miss", label: "E. Missing opportunity" },
];

function clsx(...parts: Array<string | boolean | undefined | null>) {
  return parts.filter(Boolean).join(" ");
}

function OptionCard({
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
      className={clsx(
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

export default function BusinessStepChoices() {
  const navigate = useNavigate();

  const [justificationId, setJustificationId] = useState<string>("roi");
  const [fearId, setFearId] = useState<string>("wrong");

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const justification = useMemo(
    () => purchaseJustifications.find((c) => c.id === justificationId)?.label,
    [justificationId]
  );
  const fear = useMemo(() => fears.find((c) => c.id === fearId)?.label, [fearId]);

  const handleCancel = () => {
    // go back (or change to your preferred route)
    navigate(-1);
  };

  const handleContinue = () => {
    const payload = { justificationId, fearId };
    console.log("Business choices payload:", payload);

    // Example: navigate to next step
    navigate("/dashboard/portfolio/market/business/question3", { state: payload });
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
        <div className="mt-8 grid gap-10">
          {/* Q1 */}
          <div>
            <div className="text-sm font-semibold text-gray-900">
              What justifies the purchase internally?
            </div>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
              <div className="text-xs font-semibold text-gray-900 pt-2">2.</div>

              <div className="rounded-md bg-white border border-gray-200 p-2">
                <div className="space-y-2">
                  {purchaseJustifications.map((c) => (
                    <OptionCard
                      key={c.id}
                      selected={c.id === justificationId}
                      onClick={() => setJustificationId(c.id)}
                    >
                      {c.label}
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>

            {/* optional: small preview */}
            <div className="mt-2 text-xs text-gray-500">
              Selected: <span className="font-medium text-gray-700">{justification}</span>
            </div>
          </div>

          {/* Q2 */}
          <div>
            <div className="text-sm font-semibold text-gray-900">What do they fear most?</div>

            <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
              <div className="text-xs font-semibold text-gray-900 pt-2">2.</div>

              <div className="rounded-md bg-white border border-gray-200 p-2">
                <div className="space-y-2">
                  {fears.map((c) => (
                    <OptionCard
                      key={c.id}
                      selected={c.id === fearId}
                      onClick={() => setFearId(c.id)}
                    >
                      {c.label}
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>

            {/* optional: small preview */}
            <div className="mt-2 text-xs text-gray-500">
              Selected: <span className="font-medium text-gray-700">{fear}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end gap-3">
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
