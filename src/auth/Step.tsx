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
    <div className="h-screen bg-[#f0f0eb] md:px-40 px-5">
      {/* Skip Button */}
      <div className="flex justify-end pt-5">
        <button
          onClick={handleSkip}
          className="px-2 rounded-lg border border-blue-300 text-gray-700 bg-transparent hover:bg-gray-100 transition text-sm font-medium"
        >
          Skip
        </button>
      </div>

      <div className="mt-36 mb-12 flex justify-center">
        <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
          What is currently between you and your next step or growth?
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <textarea
          className="w-[500px] h-40 p-6 rounded-xl border-none shadow-sm resize-none focus:ring-2 focus:ring-blue-100 outline-none text-gray-700 text-lg placeholder-gray-400 bg-white"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>

      {/* Continue Button */}
      <div className="flex justify-end mt-32">
        <button
          onClick={handleContinue}
          className="px-3 bg-blue-600/50 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
          style={answer.trim() ? { backgroundColor: "#2563eb" } : {}}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step;
