import { useState } from "react";
import { Info } from "lucide-react";
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

interface Shareholder {
  id: string;
  name: string;
  role: string;
  provide: string;
  want: string;
}



const Question6 = () => {
  const navigate = useNavigate();
  const [shareholders, setShareholders] = useState<Shareholder[]>([
    {
      id: "1",
      name: "eBay",
      role: "Guest",
      provide: "$762.50",
      want: "Pending",
    },
    { id: "2", name: "Sony", role: "Fund", provide: "$775.58", want: "Live" },
    {
      id: "3",
      name: "Mitsubishi",
      role: "Fund",
      provide: "$123.78",
      want: "Pending",
    },
  ]);

  const addRow = () => {
    const newShareholder: Shareholder = {
      id: Date.now().toString(),
      name: "",
      role: "",
      provide: "",
      want: "",
    };
    setShareholders([...shareholders, newShareholder]);
  };

  const updateShareholder = (
    id: string,
    field: keyof Shareholder,
    value: string,
  ) => {
    setShareholders(
      shareholders.map((sh) => (sh.id === id ? { ...sh, [field]: value } : sh)),
    );
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancelled");
  };

  const handleSaveAndContinue = () => {
    // Handle save and continue
    navigate("/dashboard/portfolio/question7");
  };

  const getStatusClass = (status: string) => {
    if (status.toLowerCase() === "live") {
      return "text-green-600";
    } else if (status.toLowerCase() === "pending") {
      return "text-orange-500";
    }
    return "";
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
              Network
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
            List some of the relevant shareholders.
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
                  Name
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
                  Role
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
                  What they provide
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
                  What they want
                </th>
              </tr>
            </thead>
            <tbody>
              {shareholders.map((shareholder) => (
                <tr
                  key={shareholder.id}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <td style={{ padding: "12px 16px" }}>
                    <input
                      type="text"
                      value={shareholder.name}
                      onChange={(e) =>
                        updateShareholder(
                          shareholder.id,
                          "name",
                          e.target.value,
                        )
                      }
                      placeholder="Name"
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
                      value={shareholder.role}
                      onChange={(e) =>
                        updateShareholder(
                          shareholder.id,
                          "role",
                          e.target.value,
                        )
                      }
                      placeholder="Role"
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
                      value={shareholder.provide}
                      onChange={(e) =>
                        updateShareholder(
                          shareholder.id,
                          "provide",
                          e.target.value,
                        )
                      }
                      placeholder="Amount"
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
                      value={shareholder.want}
                      onChange={(e) =>
                        updateShareholder(
                          shareholder.id,
                          "want",
                          e.target.value,
                        )
                      }
                      placeholder="Status"
                      className={getStatusClass(shareholder.want)}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        fontSize: "14px",
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

export default Question6;
