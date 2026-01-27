import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      {/* Header */}
      <header className="">
        <div className="font-bold text-xl">BizInfra</div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
