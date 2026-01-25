import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Category = "Product" | "Strategy" | "Team" | "Finance";

interface Skill {
  id: string;
  name: string;
  category: Category;
}

const allSkills: Skill[] = [
  { id: "design", name: "Design", category: "Product" },
  { id: "engineering", name: "Engineering", category: "Product" },

  { id: "branding", name: "Branding", category: "Strategy" },
  { id: "sales", name: "Sales", category: "Strategy" },
  { id: "marketing", name: "Marketing", category: "Strategy" },

  { id: "management", name: "Management", category: "Team" },
  { id: "hiring", name: "Hiring & Training", category: "Team" },

  { id: "planning", name: "Planning & Accounting", category: "Finance" },
  { id: "value", name: "Value Engineering", category: "Finance" },
];

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "engineering",
    "branding",
    "management",
    "value",
  ]);
  const navigate = useNavigate();

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId],
    );
  };

  const handleContinue = () => {
    console.log("Selected Skills:", selectedSkills);
    navigate("/step");
  };

  const handleSkip = () => {
    navigate("/step");
  };

  // Group skills by category
  const skillsByCategory = allSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Category, Skill[]>,
  );

  const categories: Category[] = ["Product", "Strategy", "Team", "Finance"];

  return (
    <div className="h-screen bg-[#f0f0eb] px-40">
      {/* Skip Button */}
      <div className="flex justify-end pt-5">
        <button
          onClick={handleSkip}
          className="px-2 rounded-lg border border-blue-300 text-gray-700 bg-transparent hover:bg-gray-100 transition text-sm font-medium"
        >
          Skip
        </button>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Select which skills you feel defines you?
        </h2>
      </div>

      <div className="w-full max-w-2xl mt-10">
        {categories.map((category) => (
          <div key={category} className="mb-7">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsByCategory[category]?.map((skill) => {
                const isSelected = selectedSkills.includes(skill.id);
                return (
                  <button
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border 
                                    ${
                                      isSelected
                                        ? "bg-white border-blue-600 text-gray-900 shadow-sm ring-1 ring-blue-600"
                                        : "bg-white border-transparent text-gray-700 hover:bg-gray-50"
                                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <button
          onClick={handleContinue}
          className="px-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Skills;
