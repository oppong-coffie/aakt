import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">


      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
