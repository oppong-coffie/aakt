import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Skilset from "./pages/bizinfra/Skilset";
import Main from "./pages/bizinfra/Main";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import PortfolioMain from "./pages/portfolio/Main";
const App = () => {
  return (
    <BrowserRouter>
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
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bizinfra" element={<Main />} />
          <Route path="bizinfra/skilset" element={<Skilset />} />
          <Route path="portfolio" element={<PortfolioMain />} />
          <Route path="portfolio/:category" element={<PortfolioPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
