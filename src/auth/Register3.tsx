import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Checkmark Icon
const CheckIcon = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5L4.5 8.5L11 1.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Register4 = () => {
  const [name, setName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const isFormValid =
    name.trim() !== "" && teamSize.trim() !== "" && agreeTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Submit Register4");
    navigate("/otp");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-sm w-[450px] p-10 text-center mx-auto">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-6">
          {/* Step 1: Completed */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <CheckIcon />
            </div>
          </div>
          <div className="w-10 h-1 bg-blue-600 mx-1"></div>

          {/* Step 2: Completed */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <CheckIcon />
            </div>
          </div>
          <div className="w-10 h-1 bg-blue-600 mx-1"></div>

          {/* Step 3: Completed */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-semibold text-gray-400 text-sm">
              3
            </div>
          </div>

         
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Let's create your account.
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 my-2 border border-blue-400 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
            type="text"
            placeholder="Team Size"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-colors"
            type="text"
            placeholder="Referral Code(Optional)"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />

          <div className="flex items-center mt-4 mb-6 text-left">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label
              htmlFor="terms"
              className="ml-2 text-xs text-gray-500 cursor-pointer select-none"
            >
              Agree to our Terms and Policy Services
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-2.5 mt-2 text-white border-none rounded-lg text-base font-semibold transition-all duration-300 ${
              isFormValid
                ? "bg-blue-600 cursor-pointer shadow-md hover:bg-blue-700"
                : "bg-[#94A6FD] opacity-60 cursor-not-allowed"
            }`}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register4;
