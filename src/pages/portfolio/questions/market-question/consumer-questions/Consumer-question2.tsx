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

const ConsumerQuestion2 = () => {
  const navigate = useNavigate();

  // Form state
  const [selectedMotivation, setSelectedMotivation] = useState<string>("");
  const [selectedFear, setSelectedFear] = useState<string>("");

  const motivationOptions = [
    { id: "A", label: "Price drop" },
    { id: "B", label: "Convenience" },
    { id: "C", label: "Social proof" },
    { id: "D", label: "Freedom / ideals" },
    { id: "E", label: "Urgency / scarcity" },
  ];

  const fearOptions = [
    { id: "A", label: "Losing money" },
    { id: "B", label: "Wasting time" },
    { id: "C", label: "Making a bad choice" },
    { id: "D", label: "Missing out" },
    { id: "E", label: "Nothing (Impulsive)" },
  ];

  const handleCancel = () => {
    navigate("/dashboard/portfolio/market/consumer/question1");
  };

  const handleContinue = () => {
    console.log("Form data:", {
      motivation: selectedMotivation,
      fear: selectedFear,
    });
    // Navigate to next question
    navigate("/dashboard/portfolio/market/consumer/question3");
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
            Consumer
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

        {/* Questions Section */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {/* Question 1: What usually pushes them to act? */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              What usually pushes them to act?
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {motivationOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedMotivation(option.id)}
                  style={{
                    padding: "12px 16px",
                    backgroundColor:
                      selectedMotivation === option.id ? "#c7d2fe" : "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedMotivation !== option.id) {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedMotivation !== option.id) {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  <span style={{ fontWeight: "500" }}>{option.id}:</span>{" "}
                  {option.label}
                </div>
              ))}
            </div>
          </div>

          {/* Question 2: What scares them more? */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              What scares them more?
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {fearOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedFear(option.id)}
                  style={{
                    padding: "12px 16px",
                    backgroundColor:
                      selectedFear === option.id ? "#c7d2fe" : "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "#333",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedFear !== option.id) {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedFear !== option.id) {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  <span style={{ fontWeight: "500" }}>{option.id}:</span>{" "}
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "3rem",
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

export default ConsumerQuestion2;
