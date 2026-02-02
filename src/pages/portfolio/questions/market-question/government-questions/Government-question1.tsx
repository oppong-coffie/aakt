import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-700"
  >
    <path
      d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Option = { label: string; value: string };

const maturityOptions: Option[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const transparencyOptions: Option[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const authorityOptions: Option[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function GovernmentQuestion1() {
  const navigate = useNavigate();

  const [governmentLevel, setGovernmentLevel] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [entityType, setEntityType] = useState("");
  const [revenueRange, setRevenueRange] = useState("");

  const [legalFrameworkMaturity, setLegalFrameworkMaturity] = useState("low");
  const [transparencyLevel, setTransparencyLevel] = useState("low");
  const [decisionAuthority, setDecisionAuthority] = useState("low");

  const [budgetSource, setBudgetSource] = useState("");
  const [budgetAllocation, setBudgetAllocation] = useState("");

  const handleContinue = () => {
    const payload = {
      governmentLevel,
      jurisdiction,
      entityType,
      revenueRange,
      legalFrameworkMaturity,
      transparencyLevel,
      decisionAuthority,
      budgetSource,
      budgetAllocation,
    };

    console.log("Government step payload:", payload);

    navigate("/dashboard/portfolio/market/government/question2", {
      state: payload,
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f2ed] p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            <LeftArrowIcon />
            <span>Government</span>
          </button>

          <div className="text-xs font-semibold text-gray-900">2 Out of 6</div>
        </div>

        {/* Progress */}
        <div className="mt-3 flex items-center gap-3">
          <div className="text-xs font-semibold text-gray-900">20%</div>
          <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-[20%] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-4">
          <Field label="Government level">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Industry"
              value={governmentLevel}
              onChange={(e) => setGovernmentLevel(e.target.value)}
            />
          </Field>

          <Field label="Jurisdiction">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Employment"
              value={jurisdiction}
              onChange={(e) => setJurisdiction(e.target.value)}
            />
          </Field>

          <Field label="Entity type">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Revenue range"
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
            />
          </Field>

          <Field label="Revenue range">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              value={revenueRange}
              onChange={(e) => setRevenueRange(e.target.value)}
            />
          </Field>

          <Field label="Legal framework maturity">
            <select
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              value={legalFrameworkMaturity}
              onChange={(e) => setLegalFrameworkMaturity(e.target.value)}
            >
              {maturityOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Transparency level">
            <select
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              value={transparencyLevel}
              onChange={(e) => setTransparencyLevel(e.target.value)}
            >
              {transparencyOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Decision authority">
            <select
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              value={decisionAuthority}
              onChange={(e) => setDecisionAuthority(e.target.value)}
            >
              {authorityOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Budget source">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Answer"
              value={budgetSource}
              onChange={(e) => setBudgetSource(e.target.value)}
            />
          </Field>

          <Field label="Budget allocation">
            <input
              className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Answer"
              value={budgetAllocation}
              onChange={(e) => setBudgetAllocation(e.target.value)}
            />
          </Field>

          {/* Footer */}
          <div className="pt-4 flex justify-end">
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
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold text-gray-900">{label}</div>
      {children}
    </label>
  );
}
