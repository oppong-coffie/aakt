import { useState } from "react";
import { Info, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductMarketPair {
  id: string;
  product: string;
  market: string;
}

const Question10 = () => {
  const navigate = useNavigate();
  const [hint, setHint] = useState<string>("Hint");
  const [pairs, setPairs] = useState<ProductMarketPair[]>([
    { id: "1", product: "SaaS", market: "Market" },
    { id: "2", product: "P1", market: "Market" },
  ]);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleCancel = () => {
    navigate("/dashboard/portfolio/question9");
  };

  const handleSaveAndContinue = () => {
    navigate("/dashboard/portfolio/question11");
  };

  const addPair = () => {
    const newPair: ProductMarketPair = {
      id: Date.now().toString(),
      product: "New Product",
      market: "New Market",
    };
    setPairs([...pairs, newPair]);
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
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "2rem",
          minHeight: "500px",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#333",
              margin: 0,
            }}
          >
            Product market pair
          </h2>

          <div
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <button
              onClick={() => setShowSearch(!showSearch)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Search size={18} color="#666" />
            </button>
            <button
              onClick={addPair}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} color="#666" />
            </button>
          </div>
        </div>

        {/* Hint Dropdown */}
        <div style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            placeholder="Hint"
            style={{
              padding: "8px 12px",
              border: "1px solid #e0e0e0",
              borderRadius: "6px",
              fontSize: "13px",
              color: "#666",
              width: "150px",
              outline: "none",
            }}
          />
        </div>

        {/* Product-Market Statement */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
            fontSize: "15px",
            color: "#666",
          }}
        >
          <span>I am selling</span>
          <span
            style={{
              fontWeight: "700",
              color: "#000",
              fontSize: "16px",
            }}
          >
            Product
          </span>
          <span>to</span>
          <span
            style={{
              fontWeight: "700",
              color: "#000",
              fontSize: "16px",
            }}
          >
            Market
          </span>
        </div>

        {/* Visualization Area */}
        <div
          style={{
            position: "relative",
            minHeight: "300px",
            padding: "2rem",
          }}
        >
          {pairs.map((pair) => (
            <div
              key={pair.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              {/* Product */}
              <div
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#000",
                  minWidth: "150px",
                  padding: "0.5rem",
                  outline: "none",
                  cursor: "text",
                }}
              >
                {pair.product}
              </div>

              {/* Arrow */}
              <svg
                width="200"
                height="60"
                style={{
                  margin: "0 1rem",
                  overflow: "visible",
                }}
              >
                <defs>
                  <marker
                    id={`arrowhead-${pair.id}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#ccc" />
                  </marker>
                </defs>
                <line
                  x1="0"
                  y1="30"
                  x2="180"
                  y2="30"
                  stroke="#ccc"
                  strokeWidth="2"
                  markerEnd={`url(#arrowhead-${pair.id})`}
                />
              </svg>

              {/* Market */}
              <div
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#000",
                  minWidth: "150px",
                  padding: "0.5rem",
                  outline: "none",
                  cursor: "text",
                }}
              >
                {pair.market}
              </div>
            </div>
          ))}
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
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "#333",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Save and continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question10;
