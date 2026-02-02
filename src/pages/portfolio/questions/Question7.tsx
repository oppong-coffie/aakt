import { useState } from "react";
import { Info, ChevronDown } from "lucide-react";
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

interface CapitalSource {
  id: string;
  source: string;
  value: string;
  type: string;
}

const Question7 = () => {
  const navigate = useNavigate();
  const [capitalSources, setCapitalSources] = useState<CapitalSource[]>([
    { id: "1", source: "eBay", value: "Grant", type: "$762.50" },
    { id: "2", source: "Sony", value: "Fund", type: "$775.58" },
    { id: "3", source: "Mitsubishi", value: "Fund", type: "$123.78" },
  ]);

  const [fundraising, setFundraising] = useState<string>("Yes");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const addRow = () => {
    const newSource: CapitalSource = {
      id: Date.now().toString(),
      source: "",
      value: "",
      type: "",
    };
    setCapitalSources([...capitalSources, newSource]);
  };

  const updateCapitalSource = (
    id: string,
    field: keyof CapitalSource,
    value: string,
  ) => {
    setCapitalSources(
      capitalSources.map((cs) =>
        cs.id === id ? { ...cs, [field]: value } : cs,
      ),
    );
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const handleSaveAndContinue = () => {
    navigate("/dashboard/portfolio/question8");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="top-4 left-6 sm:left-12 text-gray-500 hover:text-gray-900 transition-colors"
      >
        <LeftArrowIcon />
      </button>
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
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
                margin: 0,
              }}
            >
              Capital
            </h3>
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
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#333",
            }}
          >
            20%
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

        {/* Question Section */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              margin: 0,
            }}
          >
            Provide your capital structure
          </h2>
        </div>

        {/* Table Section */}
        <div
          style={{
            overflowX: "auto",
            marginBottom: "1.5rem",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#fafafa",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#666",
                    fontSize: "13px",
                  }}
                >
                  Source
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#666",
                    fontSize: "13px",
                  }}
                >
                  Value
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#666",
                    fontSize: "13px",
                  }}
                >
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {capitalSources.map((source) => (
                <tr
                  key={source.id}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <td style={{ padding: "12px 16px" }}>
                    <input
                      type="text"
                      value={source.source}
                      onChange={(e) =>
                        updateCapitalSource(source.id, "source", e.target.value)
                      }
                      placeholder="Source"
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "14px",
                        color: "#999",
                        backgroundColor: "transparent",
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
                      type="text"
                      value={source.value}
                      onChange={(e) =>
                        updateCapitalSource(source.id, "value", e.target.value)
                      }
                      placeholder="Value"
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "14px",
                        color: "#999",
                        backgroundColor: "transparent",
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
                      type="text"
                      value={source.type}
                      onChange={(e) =>
                        updateCapitalSource(source.id, "type", e.target.value)
                      }
                      placeholder="Type"
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "14px",
                        color: "#999",
                        backgroundColor: "transparent",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Row Button */}
        <button
          onClick={addRow}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#4f46e5",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            padding: "8px 0",
            marginBottom: "2rem",
          }}
        >
          <span style={{ fontSize: "18px" }}>+</span> Add row
        </button>

        {/* Fundraising Question */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            Are you fundraising?
          </h3>

          <div style={{ position: "relative", maxWidth: "400px" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: dropdownOpen ? "#e8e5ff" : "white",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "14px",
                color: "#333",
                transition: "background-color 0.2s",
              }}
            >
              <span>{fundraising}</span>
              <ChevronDown
                size={18}
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: "4px",
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  zIndex: 10,
                }}
              >
                <div
                  onClick={() => {
                    setFundraising("Yes");
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    backgroundColor:
                      fundraising === "Yes" ? "#e8e5ff" : "white",
                    fontSize: "14px",
                    color: "#333",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (fundraising !== "Yes") {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (fundraising !== "Yes") {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  Yes
                </div>
                <div
                  onClick={() => {
                    setFundraising("No");
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    backgroundColor: fundraising === "No" ? "#e8e5ff" : "white",
                    fontSize: "14px",
                    color: "#333",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (fundraising !== "No") {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (fundraising !== "No") {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  No
                </div>
              </div>
            )}
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
              onClick={handleSaveAndContinue}
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
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question7;
