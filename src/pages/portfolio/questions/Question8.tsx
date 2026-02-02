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


const Question8 = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question7");
  };

  const handleSaveAndContinue = () => {
    navigate("/dashboard/portfolio/question9");
  };

  const options = [
    { id: "A", label: "Yes" },
    { id: "B", label: "No" },
    { id: "C", label: "Yes" },
    { id: "D", label: "No" },
  ];

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
              Intel
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
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#333",
              margin: 0,
              marginBottom: "2rem",
            }}
          >
            Are you actively attempting an Intel gathering campaign?
          </h2>

          {/* Multiple Choice Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              maxWidth: "600px",
            }}
          >
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedAnswer(option.id)}
                style={{
                  padding: "1rem 1.5rem",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor:
                    selectedAnswer === option.id ? "#e8e5ff" : "white",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#333",
                  transition: "all 0.2s",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  if (selectedAnswer !== option.id) {
                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedAnswer !== option.id) {
                    e.currentTarget.style.backgroundColor = "white";
                  }
                }}
              >
                <span style={{ fontWeight: "600", marginRight: "0.5rem" }}>
                  {option.id}:
                </span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4rem",
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

export default Question8;
