import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Question14Consumer = () => {
  const navigate = useNavigate();

  // Form state
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<string>("Select");
  const [continent, setContinent] = useState<string>("Continent");
  const [country, setCountry] = useState<string>("Country");
  const [city, setCity] = useState<string>("City");
  const [incomeRange, setIncomeRange] = useState<string>("");
  const [spendingHabit, setSpendingHabit] = useState<string>("");
  const [employment, setEmployment] = useState<string>("");
  const [timeAvailability, setTimeAvailability] = useState<string>("");
  const [regulatory, setRegulatory] = useState<string>("Regulatory");

  // Dropdown open states
  const [sexOpen, setSexOpen] = useState<boolean>(false);
  const [continentOpen, setContinentOpen] = useState<boolean>(false);
  const [countryOpen, setCountryOpen] = useState<boolean>(false);
  const [cityOpen, setCityOpen] = useState<boolean>(false);
  const [regulatoryOpen, setRegulatoryOpen] = useState<boolean>(false);

  const sexOptions = ["Male", "Female", "Other", "Prefer not to say"];
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
    console.log("Consumer form data:", {
      age,
      sex,
      geography: { continent, country, city },
      incomeRange,
      spendingHabit,
      employment,
      timeAvailability,
      regulatory,
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
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Age
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontSize: "14px",
                  color: "#333",
                  fontWeight: "500",
                  minWidth: "30px",
                }}
              >
                {age}
              </span>
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  height: "8px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: `${(age / 100) * 100}%`,
                    backgroundColor: "#4f46e5",
                    borderRadius: "4px",
                    transition: "width 0.2s",
                  }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${(age / 100) * 100}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#4f46e5",
                    borderRadius: "50%",
                    border: "2px solid white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    pointerEvents: "none",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Sex */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Sex
            </label>
            <DropdownField
              value={sex}
              options={sexOptions}
              isOpen={sexOpen}
              setIsOpen={setSexOpen}
              setValue={setSex}
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
                value={continent}
                options={continents}
                isOpen={continentOpen}
                setIsOpen={setContinentOpen}
                setValue={setContinent}
              />
              <DropdownField
                value={country}
                options={countries}
                isOpen={countryOpen}
                setIsOpen={setCountryOpen}
                setValue={setCountry}
              />
              <DropdownField
                value={city}
                options={cities}
                isOpen={cityOpen}
                setIsOpen={setCityOpen}
                setValue={setCity}
              />
            </div>
          </div>

          {/* Income range */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
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
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
          </div>

          {/* Spending habit */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
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
                padding: "10px 12px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
            />
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

          {/* Time availability */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              Time availability
            </label>
            <input
              type="text"
              value={timeAvailability}
              onChange={(e) => setTimeAvailability(e.target.value)}
              placeholder="Availability"
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

          {/* Regulatory standard */}
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
          <div></div>
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

export default Question14Consumer;
