import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type StepKey = "marketing" | "sales";
type Method = { id: string; step: StepKey; text: string };

const uid = () => Math.random().toString(36).slice(2, 10);

export default function ProductObjectProcessProfileWithModal() {
  const navigate = useNavigate();

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const [methods, setMethods] = useState<Method[]>([
    { id: uid(), step: "marketing", text: "Instagram Ads" },
    { id: uid(), step: "marketing", text: "Partnership" },
    { id: uid(), step: "marketing", text: "Word of Mouth" },
    { id: uid(), step: "sales", text: "Sales rep" },
  ]);

  const marketingMethods = useMemo(
    () => methods.filter((m) => m.step === "marketing"),
    [methods]
  );
  const salesMethods = useMemo(
    () => methods.filter((m) => m.step === "sales"),
    [methods]
  );

  const [showSuccess, setShowSuccess] = useState(true);

  const addMethod = (step: StepKey) => {
    const label = step === "marketing" ? "New marketing method" : "New sales method";
    setMethods((prev) => [...prev, { id: uid(), step, text: label }]);
  };

  const updateMethod = (id: string, text: string) => {
    setMethods((prev) => prev.map((m) => (m.id === id ? { ...m, text } : m)));
  };

  const removeMethod = (id: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const handleCancel = () => navigate(-1);

  const handleAddProduct = () => {
    // show success modal like screenshot
    setShowSuccess(true);

    const payload = { methods };
    console.log("Add product payload:", payload);

    // optionally navigate after a delay, or keep it manual
    // navigate("/product/created", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 relative">
      {/* Dim overlay (background still visible) */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/25 z-40" aria-hidden="true" />
      )}

      <div className="w-full max-w-6xl mx-auto relative z-10">
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
          <div className="min-w-[250px]">
            <div className="text-2xl font-semibold text-gray-900">Marketing</div>

            {/* Marketing list */}
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
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => addMethod("marketing")}
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-blue-700 hover:text-blue-800"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
                +
              </span>
              Add Marketing Method
            </button>
          </div>

          <Arrow />

          {/* Sales */}
          <div className="min-w-[250px]">
            <div className="text-2xl font-semibold text-gray-900">Sales</div>

            {/* Sales list */}
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
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => addMethod("sales")}
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-blue-700 hover:text-blue-800"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
                +
              </span>
              Add Sales Method
            </button>
          </div>

          <Arrow />

          {/* Product */}
          <div className="min-w-[220px]">
            <div className="text-2xl font-semibold text-gray-900">Product</div>
            <div className="mt-6 text-xs text-gray-500">Product</div>
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
            onClick={handleAddProduct}
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
          <div className="w-[340px] rounded-md bg-white border border-gray-200 shadow-lg relative">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-3 top-3 h-7 w-7 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="flex flex-col items-center justify-center px-8 py-10">
              <div className="h-14 w-14 rounded-full bg-green-600 flex items-center justify-center">
                <CheckIcon />
              </div>
              <div className="mt-4 text-xs font-semibold text-gray-900">
                Product Added Successfully
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <svg width="70" height="18" viewBox="0 0 70 18" fill="none">
        <path d="M0 9H64" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
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

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6L9 17l-5-5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
