import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

type Option = { id: string; label: string };

const actionOptions: Option[] = [
  { id: "buying", label: "A. Buying" },
  { id: "building", label: "B. Building" },
  { id: "improving", label: "C. Improving" },
];

const productTypeOptions: Option[] = [
  { id: "software", label: "A. Software & Digital Product" },
  { id: "hardware", label: "B. Hardware & Device" },
  { id: "physical", label: "C. Physical Goods & CPG" },
  { id: "content", label: "D. Content & Media" },
  { id: "financial", label: "E. Financial Instruments" },
];

const outcomeOptions: Option[] = [
  { id: "sell", label: "A. Sell" },
  { id: "rent", label: "B. Rent" },
  { id: "subscribe", label: "C. Subscribe" },
  { id: "hold", label: "D. Hold" },
];

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function ChoiceBox({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (id: string) => void;
  options: Option[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-2 space-y-2 w-[220px]">
                {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "w-full text-left px-3 py-2 text-xs rounded-md border transition",
              active
                ? "bg-indigo-50 border-indigo-300 ring-1 ring-indigo-200"
                : "bg-white border-gray-200 hover:bg-gray-50"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default function ProductObjectQuestion1() {
  const navigate = useNavigate();

  const [action, setAction] = useState<string>("building");
  const [productType, setProductType] = useState<string>("software");
  const [outcome, setOutcome] = useState<string>("subscribe");

  const progressPct = 20;
  const stepText = "2 Out of 6";

  const actionLabel = useMemo(
    () => actionOptions.find((o) => o.id === action)?.label?.replace(/^[A-Z]\.\s/, "") ?? "",
    [action]
  );

  const productTypeLabel = useMemo(
    () =>
      productTypeOptions
        .find((o) => o.id === productType)
        ?.label?.replace(/^[A-Z]\.\s/, "") ?? "",
    [productType]
  );

  const outcomeLabel = useMemo(
    () => outcomeOptions.find((o) => o.id === outcome)?.label?.replace(/^[A-Z]\.\s/, "") ?? "",
    [outcome]
  );

  const handleCancel = () => navigate(-1);

  const handleContinue = () => {
    const payload = { action, productType, outcome };
    console.log("Product Object payload:", payload);

    // change to your next step route
    navigate("/dashboard/portfolio/p1/productobject3", { state: payload });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
            <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 text-blue-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeftIcon />
        </button>
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

        {/* Instruction */}
        <div className="mt-8">
          <div className="text-sm font-semibold text-gray-900">
            Answer this question by choosing the option below to fill in the blanks.
          </div>

          {/* Sentence */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-900">
            <span>I am</span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-800">
              {actionLabel || "—"}
            </span>
            <span>a</span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-800">
              {productTypeLabel || "—"}
            </span>
            <span>to</span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-800">
              {outcomeLabel || "—"}
            </span>
            <span>it</span>
          </div>
        </div>

        {/* Choices */}
        <div className="mt-8 space-y-8">
          {/* 1 */}
          <div className="flex items-start gap-4">
            <div className="text-xs font-semibold text-gray-900 pt-2 w-5">1.</div>
            <ChoiceBox value={action} onChange={setAction} options={actionOptions} />
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4">
            <div className="text-xs font-semibold text-gray-900 pt-2 w-5">2.</div>
            <ChoiceBox
              value={productType}
              onChange={setProductType}
              options={productTypeOptions}
            />
          </div>

          {/* 3 */}
          <div className="flex items-start gap-4">
            <div className="text-xs font-semibold text-gray-900 pt-2 w-5">3.</div>
            <ChoiceBox value={outcome} onChange={setOutcome} options={outcomeOptions} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end gap-3">
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
            className="h-9 px-5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
