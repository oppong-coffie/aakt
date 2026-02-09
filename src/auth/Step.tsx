import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step = () => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log("Answer:", answer);
    navigate("/confident");
  };

  const handleSkip = () => {
    navigate("/confident");
  };

  return (
    <div className="h-screen">
      {/* Skip Button */}
      <div className="fixed top-8 right-8">
        <button
          onClick={handleSkip}
          className="px-2 rounded-lg border border-blue-300 text-gray-700 bg-transparent hover:bg-gray-100 transition text-sm font-medium"
        >
          Skip
        </button>
      </div>

      <div className="mt-3 mb-32 flex justify-center">
        <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
          What is currently between you and your next step or growth?
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <textarea
          className="w-full max-w-3xl h-64 p-6 rounded-xl border-none shadow-sm resize-none focus:ring-2 focus:ring-blue-100 outline-none text-gray-700 text-lg placeholder-gray-400 bg-white"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleContinue}
          className="px-3 py-1 bg-blue-600/50 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
          style={answer.trim() ? { backgroundColor: "#2563eb" } : {}}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step;
