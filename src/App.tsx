import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Register1 from "./auth/Register2";
import Register2 from "./auth/Register2";
import Register3 from "./auth/Register3";
import Register4 from "./auth/Register3";
import Otp from "./auth/Otp";
import Stage from "./auth/Stage";
import Skills from "./auth/Skills";
import Step from "./auth/Step";
import Confident from "./auth/Confident";
import Feeling from "./auth/Feeling";
import Main from "./pages/bizinfra/Main";
import Dashboard from "./pages/Dashboard";
import MainHomepage from "./pages/home/MainHomepage";
import Homepage from "./pages/home/Homepage";
import PortfolioMain from "./pages/portfolio/Main";
import Finish from "./pages/home/Finish";
import Firstpage from "./pages/bizinfra/Firstpage";
import Skilset from "./pages/bizinfra/Skilset";
import Network from "./pages/bizinfra/Network";
import Capital from "./pages/bizinfra/Capital";
import Intel from "./pages/bizinfra/Intel";
import Reach from "./pages/bizinfra/Reach";
import SkillsetDetail from "./pages/bizinfra/SkillsetDetail";
import Phases from "./pages/bizinfra/Phases";
import Project from "./pages/bizinfra/Project";
import Process from "./pages/bizinfra/Process";
import Block from "./pages/bizinfra/Block";
import Saas from "./pages/portfolio/Saas";
import FinanceRisk from "./pages/portfolio/questions/FinanceRisk";
import FinanceTable from "./pages/portfolio/questions/FinanceTable";
import CultureGoals from "./pages/portfolio/questions/CultureGoals";
const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" element={<Register4 />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/step" element={<Step />} />
        <Route path="/confident" element={<Confident />} />
        <Route path="/feeling" element={<Feeling />} />

        {/* Protected/Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<MainHomepage />}>
            <Route index element={<Homepage />} />
            <Route path="finish" element={<Finish />} />
          </Route>

          <Route path="bizinfra" element={<Main />}>
            <Route index element={<Firstpage />} />
            <Route path="skillset" element={<Skilset />} />
            <Route path="skillset/:id" element={<SkillsetDetail />} />
            <Route path="skillset/:id/phases" element={<Phases />} />
            <Route path="skillset/:id/project" element={<Project />} />
            <Route path="skillset/:id/process" element={<Process />} />
            <Route path="skillset/:id/block" element={<Block />} />
            <Route path="network" element={<Network />} />
            <Route path="capital" element={<Capital />} />
            <Route path="intel" element={<Intel />} />
            <Route path="reach" element={<Reach />} />
          </Route>
          <Route path="portfolio" element={<PortfolioMain />} />
          <Route path="portfolio/saas" element={<Saas />} />
          <Route
            path="portfolio/questions/finance-risk"
            element={<FinanceRisk />}
          />
          <Route
            path="portfolio/questions/finance-table"
            element={<FinanceTable />}
          />
          <Route
            path="portfolio/questions/culture-goals"
            element={<CultureGoals />}
          />
          <Route path="finish" element={<Finish />} />
          {/* <Route path="bizinfra/skilset" element={<Skilset />} /> */}
          {/* <Route path="portfolio/:category" element={<PortfolioPage />} /> */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
