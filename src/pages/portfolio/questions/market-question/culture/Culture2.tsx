import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Row = {
  id: string;
  rewarded: string;
  punished: string;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function CultureBehaviorsTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState<Row[]>([
    { id: uid(), rewarded: "", punished: "" },
  ]);

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const canSave = useMemo(() => rows.length > 0, [rows]);

  const addRow = () => {
    setRows((prev) => [...prev, { id: uid(), rewarded: "", punished: "" }]);
  };

  const updateRow = (id: string, key: "rewarded" | "punished", value: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: value } : r))
    );
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSaveContinue = () => {
    const payload = { behaviors: rows };
    console.log("Culture behaviors payload:", payload);

    // change this to your next route
    navigate("/dashboard/portfolio/market/culture/step-3", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">Culture</div>
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
        <div className="mt-10 flex justify-center">
          <div className="text-sm font-semibold text-gray-900">
            What behaviors are rewarded? What behaviors are punished?
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-3xl border border-gray-300 bg-white">
            {/* Header row */}
            <div className="grid grid-cols-2 border-b border-gray-300 bg-[#f8f8f8]">
              <div className="px-3 py-2 text-xs font-semibold text-gray-900 border-r border-gray-300">
                Rewarded Behavior(+)
              </div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-900">
                Punished Behavior(-)
              </div>
            </div>

            {/* Body rows */}
            {rows.map((r, idx) => (
              <div key={r.id} className="grid grid-cols-2 border-b border-gray-300">
                <div className="border-r border-gray-300 p-2">
                  <textarea
                    className="h-16 w-full resize-none rounded-sm border border-transparent bg-white p-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                    value={r.rewarded}
                    onChange={(e) => updateRow(r.id, "rewarded", e.target.value)}
                  />
                </div>
                <div className="p-2">
                  <textarea
                    className="h-16 w-full resize-none rounded-sm border border-transparent bg-white p-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                    value={r.punished}
                    onChange={(e) => updateRow(r.id, "punished", e.target.value)}
                  />
                </div>

                {/* optional remove button (hidden for first row to match screenshot) */}
                {rows.length > 1 && (
                  <div className="col-span-2 flex justify-end px-2 pb-2">
                    <button
                      type="button"
                      onClick={() => removeRow(r.id)}
                      className="text-xs font-semibold text-gray-500 hover:text-red-600"
                      aria-label={`Remove row ${idx + 1}`}
                    >
                      Remove row
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add row */}
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={addRow}
            className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
              +
            </span>
            Add Row
          </button>
        </div>

        {/* Footer */}
        <div className="mt-14 flex justify-end">
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
