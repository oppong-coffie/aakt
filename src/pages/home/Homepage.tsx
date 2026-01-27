import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="">
      {/* Kanban Board Area */}
      <div className="flex items-start gap-6 overflow-x-auto pb-4">
        {/* Today Column */}
        <div className="w-56 shrink-0 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Today</h3>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>

          <div className="">
            <p className="text-sm text-gray-600 mb-2">Start planning</p>
            <div className="py-2">
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                <span className="text-lg leading-none">+</span> Add new task
              </button>
            </div>
          </div>
        </div>

        {/* Later Column */}
        <div className="w-56 shrink-0 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Later</h3>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>

          <div className="mb-">
            <p className="text-sm text-gray-600 mb-2">Start planning</p>
            <div className="py-2">
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                <span className="text-lg leading-none">+</span> Add new task
              </button>
            </div>
          </div>
        </div>

        {/* Add New List Button */}
        <div className="shrink-0 pt-1">
          <button className="flex items-center gap-2 px-4 py-2 pr-9 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            <span>+</span> Add new task
          </button>
        </div>
      </div>

      {/* Floating Action Button / Random Gradient Circle */}
      <div className="fixed bottom-32 right-10">
        <div className="w-14 h-14 rounded-full bg-linear-to-tr from-blue-600 to-teal-400 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-transform hover:scale-105">
          <div className="w-8 h-8 rounded-full bg-linear-to-b from-teal-300 to-blue-500 opacity-80 blur-sm"></div>
        </div>
      </div>

      {/* Finish Setup Card */}
      <div className="mt-20 lg:mt-68 bg-white rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden">
        <h3 className="font-bold text-gray-900 text-lg mb-1">
          Finish setting up your account
        </h3>
        <div className="bg-gray-200 h-[2px] mt-2"></div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              Things that you have missed should be filled.
            </p>
          </div>
          <Link to="finish">
            <button className="px-6 py-1 mt-2 rounded-full border border-blue-600 text-gray-900 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Finish It
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
