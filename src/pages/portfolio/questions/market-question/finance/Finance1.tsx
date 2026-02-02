import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type LineItem = {
  id: string;
  name: string;
  amount: string; // keep as string for easy input handling
  rateUnit: string;
};

const uid = () => Math.random().toString(36).slice(2, 10);

function toNumberSafe(v: string) {
  const n = Number(v.replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : 0;
}

export default function FinanceRevenueCost() {
  const navigate = useNavigate();

  const [revenueRows, setRevenueRows] = useState<LineItem[]>([
    { id: uid(), name: "", amount: "", rateUnit: "" },
  ]);
  const [costRows, setCostRows] = useState<LineItem[]>([
    { id: uid(), name: "", amount: "", rateUnit: "" },
  ]);

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const revenueTotal = useMemo(
    () => revenueRows.reduce((sum, r) => sum + toNumberSafe(r.amount), 0),
    [revenueRows]
  );
  const costTotal = useMemo(
    () => costRows.reduce((sum, r) => sum + toNumberSafe(r.amount), 0),
    [costRows]
  );

  const addRevenueRow = () =>
    setRevenueRows((p) => [...p, { id: uid(), name: "", amount: "", rateUnit: "" }]);

  const addCostRow = () =>
    setCostRows((p) => [...p, { id: uid(), name: "", amount: "", rateUnit: "" }]);

  const updateRow = (
    kind: "revenue" | "cost",
    id: string,
    key: keyof Omit<LineItem, "id">,
    value: string
  ) => {
    const set = kind === "revenue" ? setRevenueRows : setCostRows;
    set((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  const removeRow = (kind: "revenue" | "cost", id: string) => {
    const set = kind === "revenue" ? setRevenueRows : setCostRows;
    set((prev) => (prev.length <= 1 ? prev : prev.filter((r) => r.id !== id)));
  };

  const handleSaveContinue = () => {
    const payload = {
      revenue: revenueRows,
      cost: costRows,
      totals: { revenueTotal, costTotal, margin: revenueTotal - costTotal },
    };

    console.log("Finance payload:", payload);

    // change to your next route
    navigate("/dashboard/portfolio/finance2", { state: payload });
  };

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
          <p className="max-w-2xl text-center text-xs font-semibold text-gray-900 leading-5">
            Give a rough idea of the what costs goes into delivering your product and
            also the revenue you receive from it.
          </p>
        </div>

        {/* Revenue */}
        <div className="mt-8">
          <SectionTitle title="Revenue" />

          <Table3Col
            rows={revenueRows}
            onChange={(id, key, value) => updateRow("revenue", id, key, value)}
            onRemove={(id) => removeRow("revenue", id)}
          />

          <AddRowButton onClick={addRevenueRow} />

          <div className="mt-2 text-xs text-gray-500">
            Total: <span className="font-semibold text-gray-700">{revenueTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Cost */}
        <div className="mt-8">
          <SectionTitle title="Cost" />

          <Table3Col
            rows={costRows}
            onChange={(id, key, value) => updateRow("cost", id, key, value)}
            onRemove={(id) => removeRow("cost", id)}
          />

          <AddRowButton onClick={addCostRow} />

          <div className="mt-2 text-xs text-gray-500">
            Total: <span className="font-semibold text-gray-700">{costTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end">
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

function SectionTitle({ title }: { title: string }) {
  return <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>;
}

function AddRowButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800"
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-gray-300 bg-white text-blue-700">
        +
      </span>
      Add row
    </button>
  );
}

function Table3Col({
  rows,
  onChange,
  onRemove,
}: {
  rows: LineItem[];
  onChange: (id: string, key: keyof Omit<LineItem, "id">, value: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="w-full max-w-3xl border border-gray-300 bg-white">
      {/* Header row */}
      <div className="grid grid-cols-3 border-b border-gray-300 bg-[#f8f8f8]">
        <div className="px-3 py-2 text-xs font-semibold text-gray-900 border-r border-gray-300">
          Name
        </div>
        <div className="px-3 py-2 text-xs font-semibold text-gray-900 border-r border-gray-300">
          Amount
        </div>
        <div className="px-3 py-2 text-xs font-semibold text-gray-900">Rate(Unit)</div>
      </div>

      {/* Body */}
      {rows.map((r) => (
        <div key={r.id} className="grid grid-cols-3 border-b border-gray-300 last:border-b-0">
          {/* Name */}
          <div className="border-r border-gray-300 p-2">
            <input
              className="h-8 w-full rounded-sm border border-transparent bg-white px-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              value={r.name}
              onChange={(e) => onChange(r.id, "name", e.target.value)}
              placeholder=""
            />
          </div>

          {/* Amount */}
          <div className="border-r border-gray-300 p-2">
            <input
              inputMode="decimal"
              className="h-8 w-full rounded-sm border border-transparent bg-white px-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              value={r.amount}
              onChange={(e) => onChange(r.id, "amount", e.target.value)}
              placeholder=""
            />
          </div>

          {/* Rate */}
          <div className="p-2">
            <input
              className="h-8 w-full rounded-sm border border-transparent bg-white px-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              value={r.rateUnit}
              onChange={(e) => onChange(r.id, "rateUnit", e.target.value)}
              placeholder=""
            />
          </div>

          {/* Optional remove (hidden if only 1 row) */}
          {rows.length > 1 && (
            <div className="col-span-3 flex justify-end px-2 pb-2">
              <button
                type="button"
                onClick={() => onRemove(r.id)}
                className="text-xs font-semibold text-gray-500 hover:text-red-600"
              >
                Remove row
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
