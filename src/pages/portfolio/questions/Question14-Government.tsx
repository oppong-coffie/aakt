import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Question14Government = () => {
  const navigate = useNavigate();

  // Form state
  const [governmentLevel, setGovernmentLevel] = useState<string>("");
  const [jurisdiction, setJurisdiction] = useState<string>("Employment");
  const [entityType, setEntityType] = useState<string>("");
  const [revenueRange, setRevenueRange] = useState<string>("");
  const [legalFramework, setLegalFramework] = useState<string>("Low");
  const [transparencyLevel, setTransparencyLevel] = useState<string>("Low");
  const [decisionAuthority, setDecisionAuthority] = useState<string>("Low");
  const [budgetSource, setBudgetSource] = useState<string>("");
  const [budgetAllocation, setBudgetAllocation] = useState<string>("");

  // Dropdown open states
  const [jurisdictionOpen, setJurisdictionOpen] = useState<boolean>(false);
  const [legalFrameworkOpen, setLegalFrameworkOpen] = useState<boolean>(false);
  const [transparencyOpen, setTransparencyOpen] = useState<boolean>(false);
  const [decisionAuthorityOpen, setDecisionAuthorityOpen] =
    useState<boolean>(false);

  const jurisdictions = ["Local", "Regional", "National", "International"];
  const maturityLevels = ["Low", "Medium", "High"];

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question12");
  };

  const handleContinue = () => {
    console.log("Government form data:", {
      governmentLevel,
      jurisdiction,
      entityType,
      revenueRange,
      legalFramework,
      transparencyLevel,
      decisionAuthority,
      budgetSource,
      budgetAllocation,
    });
    navigate("/dashboard/portfolio");
  };

  const DropdownField = ({
    value,
    options,
    isOpen,
    setIsOpen,
    setValue,
  }: {
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
          color: "#333",
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
            Government
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
          {/* Government level */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Government level
            </label>
            <input
              type="text"
              value={governmentLevel}
              onChange={(e) => setGovernmentLevel(e.target.value)}
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

          {/* Jurisdiction */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Jurisdiction
            </label>
            <DropdownField
              value={jurisdiction}
              options={jurisdictions}
              isOpen={jurisdictionOpen}
              setIsOpen={setJurisdictionOpen}
              setValue={setJurisdiction}
            />
          </div>

          {/* Entity type */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Entity type
            </label>
            <input
              type="text"
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              placeholder=""
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

          {/* Revenue range */}
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
              placeholder=""
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

          {/* Legal framework maturity */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Legal framework maturity
            </label>
            <DropdownField
              value={legalFramework}
              options={maturityLevels}
              isOpen={legalFrameworkOpen}
              setIsOpen={setLegalFrameworkOpen}
              setValue={setLegalFramework}
            />
          </div>

          {/* Transparency level */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Transparency level
            </label>
            <DropdownField
              value={transparencyLevel}
              options={maturityLevels}
              isOpen={transparencyOpen}
              setIsOpen={setTransparencyOpen}
              setValue={setTransparencyLevel}
            />
          </div>

          {/* Decision authority */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Decision authority
            </label>
            <DropdownField
              value={decisionAuthority}
              options={maturityLevels}
              isOpen={decisionAuthorityOpen}
              setIsOpen={setDecisionAuthorityOpen}
              setValue={setDecisionAuthority}
            />
          </div>

          {/* Budget source */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Budget source
            </label>
            <input
              type="text"
              value={budgetSource}
              onChange={(e) => setBudgetSource(e.target.value)}
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

          {/* Budget allocation */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Budget allocation
            </label>
            <input
              type="text"
              value={budgetAllocation}
              onChange={(e) => setBudgetAllocation(e.target.value)}
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
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
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
  );
};

export default Question14Government;
