import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type StepKey = "marketing" | "sales" | "product";

type Method = {
  id: string;
  step: StepKey;
  text: string;
};

const uid = () => Math.random().toString(36).slice(2, 10);

export default function ProductObjectProcessProfile() {
  const navigate = useNavigate();

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const [methods, setMethods] = useState<Method[]>([]);

  const marketingMethods = useMemo(
    () => methods.filter((m) => m.step === "marketing"),
    [methods]
  );
  const salesMethods = useMemo(
    () => methods.filter((m) => m.step === "sales"),
    [methods]
  );

  const addMethod = (step: StepKey) => {
    const label =
      step === "marketing"
        ? "New marketing method"
        : step === "sales"
        ? "New sales method"
        : "New product method";

    setMethods((prev) => [...prev, { id: uid(), step, text: label }]);
  };

  const updateMethod = (id: string, text: string) => {
    setMethods((prev) => prev.map((m) => (m.id === id ? { ...m, text } : m)));
  };

  const removeMethod = (id: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const canContinue = useMemo(() => {
    // match screenshot: you can continue after adding something (optional rule)
    return true;
  }, []);

  const handleCancel = () => navigate(-1);

  const handleContinue = () => {
    const payload = { methods };
    console.log("Process profile payload:", payload);

    // change to your next step
    navigate("/dashboard/portfolio/p1/productobject7", { state: payload });
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

        {/* Title */}
        <div className="mt-8 text-sm font-semibold text-gray-900">Process Profile</div>

        {/* Flow */}
        <div className="mt-14 flex items-center gap-12">
          {/* Marketing */}
          <div className="min-w-[220px]">
            <div className="text-2xl font-semibold text-gray-900">Marketing</div>

            <button
              type="button"
              onClick={() => addMethod("marketing")}
              className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-blue-700 hover:text-blue-800"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
                +
              </span>
              Add Marketing Method
            </button>

            {marketingMethods.length > 0 && (
              <div className="mt-3 space-y-2">
                {marketingMethods.map((m) => (
                  <div key={m.id} className="flex items-center gap-2">
                    <input
                      className="h-8 w-full rounded-md border border-gray-200 bg-white px-2 text-xs outline-none focus:ring-2 focus:ring-blue-200"
                      value={m.text}
                      onChange={(e) => updateMethod(m.id, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeMethod(m.id)}
                      className="h-8 px-2 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Arrow */}
          <Arrow />

          {/* Sales */}
          <div className="min-w-[220px]">
            <div className="text-2xl font-semibold text-gray-900">Sales</div>

            <button
              type="button"
              onClick={() => addMethod("sales")}
              className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-blue-700 hover:text-blue-800"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
                +
              </span>
              Add Sales Method
            </button>

            {salesMethods.length > 0 && (
              <div className="mt-3 space-y-2">
                {salesMethods.map((m) => (
                  <div key={m.id} className="flex items-center gap-2">
                    <input
                      className="h-8 w-full rounded-md border border-gray-200 bg-white px-2 text-xs outline-none focus:ring-2 focus:ring-blue-200"
                      value={m.text}
                      onChange={(e) => updateMethod(m.id, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeMethod(m.id)}
                      className="h-8 px-2 rounded-md border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Arrow */}
          <Arrow />

          {/* Product */}
          <div className="min-w-[220px]">
            <div className="text-2xl font-semibold text-gray-900">Product</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex justify-end gap-3">
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

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <svg width="70" height="18" viewBox="0 0 70 18" fill="none">
        <path
          d="M0 9H64"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M64 3L70 9L64 15"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
