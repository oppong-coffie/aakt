import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

const continents: Option[] = [
  { label: "Continent", value: "" },
  { label: "Africa", value: "africa" },
  { label: "Europe", value: "europe" },
  { label: "North America", value: "north-america" },
  { label: "South America", value: "south-america" },
  { label: "Asia", value: "asia" },
  { label: "Oceania", value: "oceania" },
];

const countriesByContinent: Record<string, Option[]> = {
  "": [{ label: "Country", value: "" }],
  africa: [
    { label: "Country", value: "" },
    { label: "Ghana", value: "ghana" },
    { label: "Nigeria", value: "nigeria" },
    { label: "Kenya", value: "kenya" },
  ],
  europe: [
    { label: "Country", value: "" },
    { label: "United Kingdom", value: "uk" },
    { label: "Germany", value: "germany" },
    { label: "France", value: "france" },
  ],
  "north-america": [
    { label: "Country", value: "" },
    { label: "United States", value: "usa" },
    { label: "Canada", value: "canada" },
  ],
  "south-america": [
    { label: "Country", value: "" },
    { label: "Brazil", value: "brazil" },
    { label: "Argentina", value: "argentina" },
  ],
  asia: [
    { label: "Country", value: "" },
    { label: "India", value: "india" },
    { label: "Japan", value: "japan" },
    { label: "China", value: "china" },
  ],
  oceania: [
    { label: "Country", value: "" },
    { label: "Australia", value: "australia" },
    { label: "New Zealand", value: "new-zealand" },
  ],
};

const citiesByCountry: Record<string, Option[]> = {
  "": [{ label: "City", value: "" }],
  ghana: [
    { label: "City", value: "" },
    { label: "Accra", value: "accra" },
    { label: "Kumasi", value: "kumasi" },
    { label: "Takoradi", value: "takoradi" },
  ],
  nigeria: [
    { label: "City", value: "" },
    { label: "Lagos", value: "lagos" },
    { label: "Abuja", value: "abuja" },
  ],
  kenya: [
    { label: "City", value: "" },
    { label: "Nairobi", value: "nairobi" },
    { label: "Mombasa", value: "mombasa" },
  ],
  usa: [
    { label: "City", value: "" },
    { label: "New York", value: "new-york" },
    { label: "San Francisco", value: "san-francisco" },
  ],
  canada: [
    { label: "City", value: "" },
    { label: "Toronto", value: "toronto" },
    { label: "Vancouver", value: "vancouver" },
  ],
  uk: [
    { label: "City", value: "" },
    { label: "London", value: "london" },
    { label: "Manchester", value: "manchester" },
  ],
  germany: [
    { label: "City", value: "" },
    { label: "Berlin", value: "berlin" },
    { label: "Munich", value: "munich" },
  ],
  france: [
    { label: "City", value: "" },
    { label: "Paris", value: "paris" },
    { label: "Lyon", value: "lyon" },
  ],
  brazil: [
    { label: "City", value: "" },
    { label: "São Paulo", value: "sao-paulo" },
    { label: "Rio de Janeiro", value: "rio" },
  ],
  argentina: [
    { label: "City", value: "" },
    { label: "Buenos Aires", value: "buenos-aires" },
  ],
  india: [
    { label: "City", value: "" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Bengaluru", value: "bengaluru" },
  ],
  japan: [
    { label: "City", value: "" },
    { label: "Tokyo", value: "tokyo" },
    { label: "Osaka", value: "osaka" },
  ],
  china: [
    { label: "City", value: "" },
    { label: "Beijing", value: "beijing" },
    { label: "Shanghai", value: "shanghai" },
  ],
  australia: [
    { label: "City", value: "" },
    { label: "Sydney", value: "sydney" },
    { label: "Melbourne", value: "melbourne" },
  ],
  "new-zealand": [
    { label: "City", value: "" },
    { label: "Auckland", value: "auckland" },
  ],
};

const stageOptions: Option[] = [
  { label: "Stage", value: "" },
  { label: "Idea", value: "idea" },
  { label: "MVP", value: "mvp" },
  { label: "Growth", value: "growth" },
  { label: "Enterprise", value: "enterprise" },
];

const regulatoryOptions: Option[] = [
  { label: "Regulatory", value: "" },
  { label: "GDPR", value: "gdpr" },
  { label: "HIPAA", value: "hipaa" },
  { label: "PCI-DSS", value: "pci-dss" },
  { label: "SOC 2", value: "soc2" },
];

export default function BusinessStepPage() {
  const [industry, setIndustry] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [employment, setEmployment] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [stage, setStage] = useState("");
  const [buyer, setBuyer] = useState("");
  const [userOfProduct, setUserOfProduct] = useState("");
  const [regulatory, setRegulatory] = useState("");

  const navigate = useNavigate();

  const countryOptions = useMemo(
    () => countriesByContinent[continent] ?? countriesByContinent[""],
    [continent]
  );

  const cityOptions = useMemo(
    () => citiesByCountry[country] ?? citiesByCountry[""],
    [country]
  );

  const progressPct = 20; // matches screenshot
  const stepText = "2 Out of 6";

  const onCancel = () => {
    // example: reset form (customize to your flow)
    setIndustry("");
    setContinent("");
    setCountry("");
    setCity("");
    setEmployment("");
    setRevenueRange("");
    setStage("");
    setBuyer("");
    setUserOfProduct("");
    setRegulatory("");

    // Navigate to previous question
    navigate("/dashboard/portfolio/market/entity");

  };

  const onContinue = () => {
    // example: submit / navigate
    const payload = {
      industry,
      geography: { continent, country, city },
      employment,
      revenueRange,
      stage,
      buyer,
      userOfProduct,
      regulatory,
    };

    console.log("Business step payload:", payload);
    // Navigate to next question
    navigate("/dashboard/portfolio/market/business/question2");  };

  const onContinentChange = (v: string) => {
    setContinent(v);
    setCountry("");
    setCity("");
  };

  const onCountryChange = (v: string) => {
    setCountry(v);
    setCity("");
  };

  return (
    <div>
        <div onClick={onCancel}>
          <LeftArrowIcon />
        </div>

      <div style={styles.card}>
        {/* Header */}
        <div style={styles.headerRow}>
          <div style={styles.headerTitle}>Business</div>
          <div style={styles.headerRight}>{stepText}</div>
        </div>

        {/* Progress */}
        <div style={styles.progressRow}>
          <div style={styles.progressLabel}>{progressPct}%</div>
          <div style={styles.progressTrack}>
            <div
              style={{
                ...styles.progressFill,
                width: `${Math.min(100, Math.max(0, progressPct))}%`,
              }}
            />
          </div>
        </div>

        {/* Form */}
        <div style={styles.form}>
          <Field label="Industry">
            <input
              style={styles.input}
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </Field>

          <Field label="Geography">
            <div style={styles.threeCols}>
              <select
                style={styles.select}
                value={continent}
                onChange={(e) => onContinentChange(e.target.value)}
              >
                {continents.map((o) => (
                  <option key={o.value || "continent"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <select
                style={styles.select}
                value={country}
                onChange={(e) => onCountryChange(e.target.value)}
                disabled={!continent}
              >
                {countryOptions.map((o) => (
                  <option key={o.value || "country"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <select
                style={styles.select}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!country}
              >
                {cityOptions.map((o) => (
                  <option key={o.value || "city"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </Field>

          <Field label="Employment">
            <input
              style={styles.input}
              placeholder="Employment"
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
            />
          </Field>

          <Field label="Revenue range">
            <input
              style={styles.input}
              placeholder="Revenue range"
              value={revenueRange}
              onChange={(e) => setRevenueRange(e.target.value)}
            />
          </Field>

          <Field label="Stage">
            <select
              style={styles.select}
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              {stageOptions.map((o) => (
                <option key={o.value || "stage"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Who from the company is buying?">
            <input
              style={styles.input}
              placeholder="Answer"
              value={buyer}
              onChange={(e) => setBuyer(e.target.value)}
            />
          </Field>

          <Field label="Who in the company uses the product?">
            <input
              style={styles.input}
              placeholder="Answer"
              value={userOfProduct}
              onChange={(e) => setUserOfProduct(e.target.value)}
            />
          </Field>

          <Field label="Regulatory standard">
            <select
              style={styles.select}
              value={regulatory}
              onChange={(e) => setRegulatory(e.target.value)}
            >
              {regulatoryOptions.map((o) => (
                <option key={o.value || "reg"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Footer buttons */}
          <div style={styles.footer}>
            <button type="button" style={styles.btnGhost} onClick={onCancel}>
              Cancel
            </button>
            <button type="button" style={styles.btnPrimary} onClick={onContinue}>
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
    <div style={styles.field}>
      <div style={styles.label}>{label}</div>
      {children}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "#f3f3f3",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
  },
  card: {
    width: "min(980px, 100%)",
    background: "#fafafa",
    borderRadius: 12,
    border: "1px solid #e6e6e6",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    padding: 20,
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerTitle: { fontSize: 14, fontWeight: 600, color: "#111" },
  headerRight: { fontSize: 12, fontWeight: 600, color: "#111" },
  progressRow: {
    display: "grid",
    gridTemplateColumns: "56px 1fr",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  progressLabel: { fontSize: 12, fontWeight: 600, color: "#111" },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    background: "#e9e9e9",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
    background: "#2f5dff",
  },
  form: { display: "grid", gap: 12 },
  field: { display: "grid", gap: 6 },
  label: { fontSize: 12, color: "#222", fontWeight: 600 },
  input: {
    height: 36,
    borderRadius: 6,
    border: "1px solid #d9d9d9",
    padding: "0 10px",
    outline: "none",
    background: "#fff",
    fontSize: 13,
  },
  select: {
    height: 36,
    borderRadius: 6,
    border: "1px solid #d9d9d9",
    padding: "0 10px",
    outline: "none",
    background: "#fff",
    fontSize: 13,
  },
  threeCols: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 10,
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 6,
  },
  btnGhost: {
    height: 34,
    padding: "0 14px",
    borderRadius: 8,
    border: "1px solid #cfcfcf",
    background: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
  },
  btnPrimary: {
    height: 34,
    padding: "0 14px",
    borderRadius: 8,
    border: "1px solid #2f5dff",
    background: "#2f5dff",
    color: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 700,
  },
};
