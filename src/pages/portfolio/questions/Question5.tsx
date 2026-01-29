import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Icons
const InfoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

interface SliderItem {
  id: string;
  label: string;
  value: number;
}

const Question5 = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<SliderItem[]>([
    { id: "client", label: "Client", value: 0 },
    { id: "investors", label: "Investors", value: 0 },
    { id: "talent", label: "Talent", value: 0 },
    { id: "clients", label: "Clients", value: 0 },
    { id: "others", label: "Others", value: 0 },
  ]);

  const updateValue = (id: string, newValue: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: newValue } : item,
      ),
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f0eb] font-sans relative">
      {/* Header / Progress */}
      <div className="px-6 sm:px-12 pt-8 sm:pt-12 pb-6 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-6 sm:left-12 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <LeftArrowIcon />
        </button>
        <h1 className="text-xl font-bold text-gray-900 mb-4 text-center sm:text-left sm:pl-10">
          Network
        </h1>
        <div className="flex justify-between text-sm font-bold text-gray-900 mb-2">
          <span>20%</span>
          <span>2 Out of 6</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden w-full">
          <div className="h-full bg-blue-600 w-[20%] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 sm:px-12 overflow-y-auto pb-32">
        <p className="text-gray-800 font-medium text-lg mb-12">
          How confident are you in your current relevant network?
        </p>

        <div className="flex flex-col gap-8 max-w-2xl">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-6">
              <span className="w-24 text-gray-800 font-medium text-lg">
                {item.label}
              </span>
              <div className="flex-1 relative h-8 bg-gray-200/50 rounded-full">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.value}
                  onChange={(e) => updateValue(item.id, Number(e.target.value))}
                  className="w-full h-full opacity-0 cursor-pointer absolute z-10"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-md pointer-events-none transition-all duration-75"
                  style={{
                    left: `calc(${item.value}% - 12px)`,
                  }}
                />
              </div>
              <span className="w-12 text-gray-800 font-medium text-lg text-right">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bottom-0 left-0 right-0 p-6 sm:px-12 sm:py-8 flex items-center justify-end max-w-7xl mx-auto w-full pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 rounded-xl border border-blue-600/30 text-gray-700 font-medium hover:bg-gray-50 transition-colors bg-white shadow-sm"
          >
            Cancel
          </button>

          <button
            onClick={() => navigate("/dashboard/portfolio/question6")}
            className="cursor-pointer px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Save & Continue
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="pointer-events-auto"
      >
        <InfoIcon />
      </button>

      {/* Info Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
            >
              <div className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl pointer-events-auto relative">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Attention</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Add description for Network here.
                </p>

                <h3 className="font-bold text-gray-900 mb-4">
                  Watch the video below.
                </h3>

                <div className="aspect-video bg-white border border-gray-200 rounded-xl w-full" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question5;
