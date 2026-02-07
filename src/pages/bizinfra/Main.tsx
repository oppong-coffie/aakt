import { Outlet } from "react-router-dom";

/**
 * BizInfra Main Layout - A wrapper component that provides the context
 * and outlet for all routes within the Business Infrastructure module.
 */
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
