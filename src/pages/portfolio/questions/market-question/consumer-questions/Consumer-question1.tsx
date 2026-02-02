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

const ConsumerQuestion1 = () => {
  const navigate = useNavigate();

  // Form state
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [continent, setContinent] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [incomeRange, setIncomeRange] = useState<string>("");
  const [spendingHabit, setSpendingHabit] = useState<string>("");
  const [employment, setEmployment] = useState<string>("");
  const [authority, setAuthority] = useState<string>("");
  const [regulatory, setRegulatory] = useState<string>("");

  // Dropdown states
  const [sexDropdownOpen, setSexDropdownOpen] = useState<boolean>(false);
  const [continentDropdownOpen, setContinentDropdownOpen] =
    useState<boolean>(false);
  const [countryDropdownOpen, setCountryDropdownOpen] =
    useState<boolean>(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState<boolean>(false);
  const [regulatoryDropdownOpen, setRegulatoryDropdownOpen] =
    useState<boolean>(false);

  const sexOptions = ["Male", "Female", "Other", "Prefer not to say"];
  const continentOptions = [
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Australia",
    "Antarctica",
  ];
  const countryOptions = ["Select a continent first"];
  const cityOptions = ["Select a country first"];
  const regulatoryOptions = ["Option 1", "Option 2", "Option 3"];

  const handleCancel = () => {
    navigate("/dashboard/portfolio/market/entity");
  };

  const handleContinue = () => {
    console.log("Form data:", {
      age,
      sex,
      continent,
      country,
      city,
      incomeRange,
      spendingHabit,
      employment,
      authority,
      regulatory,
    });
    // Navigate to next question
    navigate("/dashboard/portfolio/market/consumer/question2");
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

        {/* Form Fields */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Age */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            />
          </div>

          {/* Sex */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Sex
            </label>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setSexDropdownOpen(!sexDropdownOpen)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: sex ? "#333" : "#999",
                  transition: "background-color 0.2s",
                }}
              >
                <span>{sex || "Select"}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: sexDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {sexDropdownOpen && (
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
                  {sexOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSex(option);
                        setSexDropdownOpen(false);
                      }}
                      style={{
                        padding: "12px 16px",
                        cursor: "pointer",
                        backgroundColor: sex === option ? "#e8e5ff" : "white",
                        fontSize: "14px",
                        color: "#333",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (sex !== option) {
                          e.currentTarget.style.backgroundColor = "#f5f5f5";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (sex !== option) {
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
          </div>

          {/* Geography Section */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Geography
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {/* Continent */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() =>
                    setContinentDropdownOpen(!continentDropdownOpen)
                  }
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: continent ? "#333" : "#999",
                    transition: "background-color 0.2s",
                  }}
                >
                  <span>{continent || "Continent"}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: continentDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {continentDropdownOpen && (
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
                    {continentOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setContinent(option);
                          setContinentDropdownOpen(false);
                        }}
                        style={{
                          padding: "12px 16px",
                          cursor: "pointer",
                          backgroundColor:
                            continent === option ? "#e8e5ff" : "white",
                          fontSize: "14px",
                          color: "#333",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (continent !== option) {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (continent !== option) {
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

              {/* Country */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: country ? "#333" : "#999",
                    transition: "background-color 0.2s",
                  }}
                >
                  <span>{country || "Country"}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: countryDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {countryDropdownOpen && (
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
                    {countryOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setCountry(option);
                          setCountryDropdownOpen(false);
                        }}
                        style={{
                          padding: "12px 16px",
                          cursor: "pointer",
                          backgroundColor:
                            country === option ? "#e8e5ff" : "white",
                          fontSize: "14px",
                          color: "#333",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (country !== option) {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (country !== option) {
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

              {/* City */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: city ? "#333" : "#999",
                    transition: "background-color 0.2s",
                  }}
                >
                  <span>{city || "City"}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: cityDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {cityDropdownOpen && (
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
                    {cityOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setCity(option);
                          setCityDropdownOpen(false);
                        }}
                        style={{
                          padding: "12px 16px",
                          cursor: "pointer",
                          backgroundColor:
                            city === option ? "#e8e5ff" : "white",
                          fontSize: "14px",
                          color: "#333",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (city !== option) {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (city !== option) {
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
            </div>
          </div>

          {/* Income range */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Income range
            </label>
            <input
              type="text"
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              placeholder="Income range"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            />
          </div>

          {/* Spending habit */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Spending habit
            </label>
            <input
              type="text"
              value={spendingHabit}
              onChange={(e) => setSpendingHabit(e.target.value)}
              placeholder="Spending"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            />
          </div>

          {/* Employment */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
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
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            />
          </div>

          {/* Time availability */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Time availability
            </label>
            <input
              type="text"
              value={authority}
              onChange={(e) => setAuthority(e.target.value)}
              placeholder="Authority"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            />
          </div>

          {/* Regulatory element */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                marginBottom: "0.5rem",
              }}
            >
              Regulatory element
            </label>
            <div style={{ position: "relative" }}>
              <button
                onClick={() =>
                  setRegulatoryDropdownOpen(!regulatoryDropdownOpen)
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: regulatory ? "#333" : "#999",
                  transition: "background-color 0.2s",
                }}
              >
                <span>{regulatory || "Regulatory"}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: regulatoryDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {regulatoryDropdownOpen && (
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
                  {regulatoryOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setRegulatory(option);
                        setRegulatoryDropdownOpen(false);
                      }}
                      style={{
                        padding: "12px 16px",
                        cursor: "pointer",
                        backgroundColor:
                          regulatory === option ? "#e8e5ff" : "white",
                        fontSize: "14px",
                        color: "#333",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (regulatory !== option) {
                          e.currentTarget.style.backgroundColor = "#f5f5f5";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (regulatory !== option) {
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

export default ConsumerQuestion1;
