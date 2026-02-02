import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Option = { id: string; label: string };

const options: Option[] = [
  { id: "stick", label: "A. Stick" },
  { id: "churn", label: "B. Churn fast" },
  { id: "upgrade", label: "C. Upgrade quickly" },
  { id: "refund", label: "D. Refund often" },
];

export default function ConsumerOnceTheyBuy() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("stick");

  const onCancel = () => navigate(-1);

  const onSubmit = () => {
    const payload = { onceTheyBuy: selected };
    console.log("Consumer step payload:", payload);

    // Change route to your actual next step / final page
    navigate("/dashboard/portfolio/culture2", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Consumer</div>
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
        <div className="mt-12">
          <div className="text-sm font-semibold text-gray-900">
            Once they buy, they usually…
          </div>

          <div className="mt-3 grid grid-cols-[28px_320px] gap-3 items-start">
            <div className="text-xs font-semibold text-gray-900 pt-2">2.</div>

            <div className="rounded-md bg-white border border-gray-200 p-2">
              <div className="space-y-2">
                {options.map((opt) => {
                  const active = selected === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelected(opt.id)}
                      className={[
                        "w-full text-left rounded-md border px-3 py-2 text-xs transition",
                        active
                          ? "border-indigo-300 bg-indigo-50 ring-1 ring-indigo-200"
                          : "border-gray-200 bg-white hover:bg-gray-50",
                      ].join(" ")}
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
        <div className="mt-20 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="h-9 px-5 rounded-lg border border-blue-400 bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
