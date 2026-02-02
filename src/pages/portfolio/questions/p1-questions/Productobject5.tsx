import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Metric = { id: string; name: string };
type Option = { label: string; value: string };

const responseOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "Adopt quickly", value: "adopt_quickly" },
  { label: "Test cautiously", value: "test_cautiously" },
  { label: "Need approval", value: "need_approval" },
  { label: "Resist / ignore", value: "resist" },
];

const uid = () => Math.random().toString(36).slice(2, 10);

export default function ProductObjectOutcomeProfile() {
  const navigate = useNavigate();

  const [scenario, setScenario] = useState<string>("");
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [response, setResponse] = useState<string>("");

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const canContinue = useMemo(() => {
    return scenario.trim().length > 0 && response.trim().length > 0;
  }, [scenario, response]);

  const addMetric = () => {
    setMetrics((prev) => [...prev, { id: uid(), name: "" }]);
  };

  const updateMetric = (id: string, name: string) => {
    setMetrics((prev) => prev.map((m) => (m.id === id ? { ...m, name } : m)));
  };

  const removeMetric = (id: string) => {
    setMetrics((prev) => prev.filter((m) => m.id !== id));
  };

  const handleCancel = () => navigate(-1);

  const handleContinue = () => {
    const payload = { scenario, metrics, response };
    console.log("Outcome profile payload:", payload);

    // change to your next step route
    navigate("/dashboard/portfolio/p1/productobject6", { state: payload });
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

        {/* Content */}
        <div className="mt-8 max-w-3xl">
          <div className="text-sm font-semibold text-gray-900">Outcome Profile</div>

          <div className="mt-4 space-y-6">
            {/* Scenario */}
            <div>
              <div className="text-xs font-semibold text-gray-900 mb-1">
                What is the worst, mid, best case scenario outcome for a buyer?
              </div>
              <textarea
                className="w-full h-24 rounded-md border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                placeholder="Describe"
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
              />
            </div>

            {/* Metrics */}
            <div>
              <div className="text-xs font-semibold text-gray-900">
                Add Performance Metrics
              </div>

              <button
                type="button"
                onClick={addMetric}
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
                  +
                </span>
                Add Metrics
              </button>

              {metrics.length > 0 && (
                <div className="mt-3 space-y-2 max-w-md">
                  {metrics.map((m) => (
                    <div key={m.id} className="flex items-center gap-2">
                      <input
                        className="h-9 flex-1 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Metric name (e.g., churn, CAC, LTV)"
                        value={m.name}
                        onChange={(e) => updateMetric(m.id, e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => removeMetric(m.id)}
                        className="h-9 px-3 rounded-md border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Response */}
            <div>
              <div className="text-xs font-semibold text-gray-900 mb-1">
                How they respond to your solution?
              </div>
              <select
                className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              >
                {responseOptions.map((o) => (
                  <option key={o.value || "select"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex justify-end gap-3">
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
  );
}
