import { Link } from "react-router-dom";

const cards = [
  { id: "Skillset", label: "Skillset", gradient: "from-blue-600 to-blue-200", link: "skillset" },
  { id: "Network", label: "Network", gradient: "from-green-500 to-green-200", link: "network" },
  {
    id: "Capital",
    label: "Capital",
    gradient: "from-yellow-500 via-yellow-300 to-yellow-100",
    link: "capital",
  },
  { id: "Intel", label: "Intel", gradient: "from-yellow-600 to-yellow-200", link: "intel" }, // More goldish
  { id: "Reach", label: "Reach", gradient: "from-purple-600 to-purple-300", link: "reach" },
];
const Firstpage = () => {
  return (
    <div className="h-[85vh] w-full flex flex-col justify-center">
      <div className="grid grid-cols-5 gap-6 px-4">
        
        {cards.map((card) => (
            <Link to={card.link}>

          <div
            key={card.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Card Container */}
            <div className="w-full aspect-square bg-gray-100/50 rounded-xl shadow-sm border border-gray-200/50 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              {/* Gradient Shape */}
              <div
                className={`w-3/5 h-3/5 rounded-[2rem] bg-linear-to-br ${card.gradient} shadow-lg relative transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}
              >
                {/* Noise Texture Overlay */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                ></div>

                {/* Inner Shine */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-50"></div>
              </div>
            </div>

            {/* Label */}
            <span className="mt-4 text-sm font-semibold text-gray-800">
              {card.label}
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Firstpage;
