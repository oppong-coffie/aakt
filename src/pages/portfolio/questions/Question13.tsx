import { useState } from "react";
import { Info, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Question13 = () => {
  const navigate = useNavigate();

  // Form state
  const [industry, setIndustry] = useState<string>("");
  const [continent, setContinent] = useState<string>("Continent");
  const [country, setCountry] = useState<string>("Country");
  const [city, setCity] = useState<string>("City");
  const [employment, setEmployment] = useState<string>("");
  const [revenueRange, setRevenueRange] = useState<string>("");
  const [stage, setStage] = useState<string>("Stage");
  const [buyer, setBuyer] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [regulatory, setRegulatory] = useState<string>("Regulatory");

  // Dropdown open states
  const [continentOpen, setContinentOpen] = useState<boolean>(false);
  const [countryOpen, setCountryOpen] = useState<boolean>(false);
  const [cityOpen, setCityOpen] = useState<boolean>(false);
  const [stageOpen, setStageOpen] = useState<boolean>(false);
  const [regulatoryOpen, setRegulatoryOpen] = useState<boolean>(false);

  const continents = [
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ];
  const countries = ["Ghana", "Nigeria", "Kenya", "South Africa", "Egypt"];
  const cities = ["Accra", "Lagos", "Nairobi", "Cairo", "Johannesburg"];
  const stages = [
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "Growth",
    "Mature",
  ];
  const regulatoryStandards = [
    "ISO 9001",
    "GDPR",
    "HIPAA",
    "SOX",
    "PCI DSS",
    "None",
  ];

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question12");
  };

  const handleContinue = () => {
    console.log("Business form data:", {
      industry,
      geography: { continent, country, city },
      employment,
      revenueRange,
      stage,
      buyer,
      user,
      regulatory,
    });
    navigate("/dashboard/portfolio");
  };

  const DropdownField = ({
    label,
    value,
    options,
    isOpen,
    setIsOpen,
    setValue,
  }: {
    label: string;
    value: string;
    options: string[];
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    setValue: (value: string) => void;
  }) => (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px 12px",
          backgroundColor: "white",
          border: "1px solid #d0d0d0",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "13px",
          color: value === label ? "#999" : "#333",
          textAlign: "left",
        }}
      >
        <span>{value}</span>
        <ChevronDown
          size={16}
          color="#999"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "4px",
            backgroundColor: "white",
            border: "1px solid #d0d0d0",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
            zIndex: 10,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setValue(option);
                setIsOpen(false);
              }}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                backgroundColor: value === option ? "#f0f0f0" : "white",
                fontSize: "13px",
                color: "#333",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (value !== option) {
                  e.currentTarget.style.backgroundColor = "#f5f5f5";
                }
              }}
              onMouseLeave={(e) => {
                if (value !== option) {
                  e.currentTarget.style.backgroundColor = "white";
                }
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
              margin: 0,
            }}
          >
            Business
          </h2>
        </div>

        {/* Progress Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              20%
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              2 Out of 6
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "20%",
                height: "100%",
                backgroundColor: "#4f46e5",
                borderRadius: "4px",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e0e0e0",
            margin: "2rem 0",
          }}
        />

        {/* Form Fields */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Industry */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Industry
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Industry"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Geography */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Geography
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
              }}
            >
              <DropdownField
                label="Continent"
                value={continent}
                options={continents}
                isOpen={continentOpen}
                setIsOpen={setContinentOpen}
                setValue={setContinent}
              />
              <DropdownField
                label="Country"
                value={country}
                options={countries}
                isOpen={countryOpen}
                setIsOpen={setCountryOpen}
                setValue={setCountry}
              />
              <DropdownField
                label="City"
                value={city}
                options={cities}
                isOpen={cityOpen}
                setIsOpen={setCityOpen}
                setValue={setCity}
              />
            </div>
          </div>

          {/* Employment */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Employment
            </label>
            <input
              type="text"
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
              placeholder="Employment"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Revenue Range */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Revenue range
            </label>
            <input
              type="text"
              value={revenueRange}
              onChange={(e) => setRevenueRange(e.target.value)}
              placeholder="Revenue range"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Stage */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Stage
            </label>
            <DropdownField
              label="Stage"
              value={stage}
              options={stages}
              isOpen={stageOpen}
              setIsOpen={setStageOpen}
              setValue={setStage}
            />
          </div>

          {/* Who from the company is buying? */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Who from the company is buying?
            </label>
            <input
              type="text"
              value={buyer}
              onChange={(e) => setBuyer(e.target.value)}
              placeholder="Answer"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Who in the company uses the product? */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Who in the company uses the product?
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Answer"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Regulatory Standard */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Regulatory standard
            </label>
            <DropdownField
              label="Regulatory"
              value={regulatory}
              options={regulatoryStandards}
              isOpen={regulatoryOpen}
              setIsOpen={setRegulatoryOpen}
              setValue={setRegulatory}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #e0e0e0",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#666",
              visibility: "hidden",
            }}
          >
            <Info size={20} color="#666" />
          </button>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={handleCancel}
              style={{
                padding: "10px 24px",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "#333",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleContinue}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#4f46e5",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question13;
