import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Question11 = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question10");
  };

  const handleContinue = () => {
    // Navigate to next question or complete the flow
    navigate("/dashboard/portfolio/question12");
  };

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
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header */}
        <div>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
              margin: 0,
              marginBottom: "4rem",
            }}
          >
            Market Object
          </h2>

          {/* Main Content */}
          <div
            style={{
              marginTop: "6rem",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "1rem",
              }}
            >
              Let's get your market onboard
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              We make it faster and easier for you to onboard your market from
              scratch with a few clicks.
            </p>
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

export default Question11;
