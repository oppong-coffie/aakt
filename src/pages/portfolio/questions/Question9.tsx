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

interface SocialMedia {
  id: string;
  platform: string;
  icon: string;
  color: string;
}

const Question9 = () => {
  const navigate = useNavigate();
  const [socialMedias] = useState<SocialMedia[]>([
    { id: "1", platform: "Instagram", icon: "📷", color: "#E4405F" },
    { id: "2", platform: "LinkedIn", icon: "💼", color: "#0A66C2" },
    { id: "3", platform: "TikTok", icon: "🎵", color: "#000000" },
  ]);

  const [additionalPlatforms, setAdditionalPlatforms] = useState<SocialMedia[]>(
    [],
  );

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question8");
  };

  const handleSaveAndContinue = () => {
    navigate("/dashboard/portfolio/question10");
  };

  const addMore = () => {
    const newPlatform: SocialMedia = {
      id: Date.now().toString(),
      platform: "New Platform",
      icon: "🔗",
      color: "#666",
    };
    setAdditionalPlatforms([...additionalPlatforms, newPlatform]);
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
              Reach
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
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#333",
              margin: 0,
              marginBottom: "1.5rem",
              lineHeight: "1.5",
            }}
          >
            Add any link of social media accounts you feel will help you
            influence an audience.
          </p>

          {/* Social Media List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {socialMedias.map((social) => (
              <div
                key={social.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {social.platform === "Instagram" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        stroke="#E4405F"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="#E4405F"
                        strokeWidth="2"
                      />
                      <circle cx="18" cy="6" r="1.5" fill="#E4405F" />
                    </svg>
                  )}
                  {social.platform === "LinkedIn" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#0A66C2"
                    >
                      <rect width="24" height="24" rx="4" fill="#0A66C2" />
                      <path d="M8 10H6V18H8V10Z" fill="white" />
                      <circle cx="7" cy="7" r="1.5" fill="white" />
                      <path d="M12 10H10V18H12V10Z" fill="white" />
                      <path
                        d="M12 13C12 11.9 12.9 11 14 11C15.1 11 16 11.9 16 13V18H18V13C18 10.8 16.2 9 14 9C13.4 9 12.8 9.1 12.3 9.4L12 9.6V10Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {social.platform === "TikTok" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                        fill="#000000"
                      />
                    </svg>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  {social.platform}
                </span>
              </div>
            ))}

            {/* Additional Platforms */}
            {additionalPlatforms.map((platform) => (
              <div
                key={platform.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {platform.icon}
                </div>
                <input
                  type="text"
                  defaultValue={platform.platform}
                  placeholder="Platform name"
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    color: "#333",
                    backgroundColor: "transparent",
                    fontWeight: "500",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Add More Button */}
          <button
            onClick={addMore}
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
              marginTop: "1rem",
            }}
          >
            <span style={{ fontSize: "18px" }}>+</span> Add more
          </button>
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

export default Question9;
