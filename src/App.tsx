import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Phase from "./pages/bizinfra/Phase";
import Project from "./pages/bizinfra/Project";
import Process from "./pages/bizinfra/Process";
import Block from "./pages/bizinfra/Block";
import BizInfraDepartment from "./pages/bizinfra/Department";
import BizInfraOperation from "./pages/bizinfra/Operation";
import Saas from "./pages/portfolio/saas/Saas";
import Question1 from "./pages/portfolio/questions/Question1";
import PortfolioFirstpage from "./pages/portfolio/Firstpage";
import Question2 from "./pages/portfolio/questions/Question2";
import Question3 from "./pages/portfolio/questions/Question3";
import Question4 from "./pages/portfolio/questions/Question4";
import Question5 from "./pages/portfolio/questions/Question5";
import Question6 from "./pages/portfolio/questions/Question6";
import Question7 from "./pages/portfolio/questions/Question7";
import Question8 from "./pages/portfolio/questions/Question8";
import Question9 from "./pages/portfolio/questions/Question9";
import Question10 from "./pages/portfolio/questions/Question10";
import Question11 from "./pages/portfolio/questions/Question11";
import Question12 from "./pages/portfolio/questions/market-question/Entity";
import Question13 from "./pages/portfolio/questions/Question13";
import Question14Business from "./pages/portfolio/questions/Question14-Business";
import Question14Consumer from "./pages/portfolio/questions/Question14-Consumer";
import Question14Government from "./pages/portfolio/questions/Question14-Government";
import Entity from "./pages/portfolio/questions/market-question/Entity";
import ConsumerQuestion1 from "./pages/portfolio/questions/market-question/consumer-questions/Consumer-question1";
import BusinessQuestion1 from "./pages/portfolio/questions/market-question/business-questions/Business-question1";
import GovernmentQuestion1 from "./pages/portfolio/questions/market-question/government-questions/Government-question1";
import ConsumerQuestion2 from "./pages/portfolio/questions/market-question/consumer-questions/Consumer-question2";
import ConsumerQuestion3 from "./pages/portfolio/questions/market-question/consumer-questions/Consumer-question3";
import ConsumerQuestion4 from "./pages/portfolio/questions/market-question/consumer-questions/Consumer-question4";
import BusinessQuestion2 from "./pages/portfolio/questions/market-question/business-questions/Business-question2";
import BusinessQuestion3 from "./pages/portfolio/questions/market-question/business-questions/Business-question3";
import BusinessQuestion4 from "./pages/portfolio/questions/market-question/business-questions/Business-question4";
import GovernmentQuestion2 from "./pages/portfolio/questions/market-question/government-questions/Government-question2";
import GovernmentQuestion3 from "./pages/portfolio/questions/market-question/government-questions/Government-question3";
import GovernmentQuestion4 from "./pages/portfolio/questions/market-question/government-questions/Government-question4";
import Culture1 from "./pages/portfolio/questions/market-question/culture/Culture1";
import Culture3 from "./pages/portfolio/questions/market-question/culture/Culture3";
import Culture2 from "./pages/portfolio/questions/market-question/culture/Culture2";
import Finance1 from "./pages/portfolio/questions/market-question/finance/Finance1";
import Finance2 from "./pages/portfolio/questions/market-question/finance/Finance2";
import Department from "./pages/portfolio/saas/Department";
import Department2Page from "./pages/portfolio/saas/Department2";
import ProcessPage from "./pages/portfolio/saas/Process";
import Sales from "./pages/portfolio/saas/Sales";
import Marketing from "./pages/portfolio/saas/Marketing";
import Product from "./pages/portfolio/saas/Product";
import Block2 from "./pages/portfolio/saas/Block";
import Productobject1 from "./pages/portfolio/questions/p1-questions/Productobject1";
import Productobject4 from "./pages/portfolio/questions/p1-questions/Productobject4";
import Productobject5 from "./pages/portfolio/questions/p1-questions/Productobject5";
import Productobject6 from "./pages/portfolio/questions/p1-questions/Productobject6";
import Productobject7 from "./pages/portfolio/questions/p1-questions/Productobject7";
import Productobject2 from "./pages/portfolio/questions/p1-questions/Productobject2";
import Productobject3 from "./pages/portfolio/questions/p1-questions/Productobject3";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

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
            <Route
              path="skillset/:id/department"
              element={<BizInfraDepartment />}
            />
            <Route
              path="skillset/:id/operation"
              element={<BizInfraOperation />}
            />
            <Route path="skillset/:id/project" element={<Project />} />
            <Route path="skillset/:id/process" element={<Process />} />
            <Route path="skillset/:id/block" element={<Block />} />
            <Route path="network" element={<Network />} />
            <Route path="capital" element={<Capital />} />
            <Route path="intel" element={<Intel />} />
            <Route path="reach" element={<Reach />} />
            <Route path="phase" element={<Phase />} />
          </Route>

          <Route path="portfolio" element={<PortfolioMain />}>
            <Route index element={<PortfolioFirstpage />} />
            <Route path="saas" element={<Saas />} />
            <Route path="question1" element={<Question1 />} />
            <Route path="question2" element={<Question2 />} />
            <Route path="question3" element={<Question3 />} />
            <Route path="question4" element={<Question4 />} />
            <Route path="question5" element={<Question5 />} />
            <Route path="question6" element={<Question6 />} />
            <Route path="question7" element={<Question7 />} />
            <Route path="question8" element={<Question8 />} />
            <Route path="question9" element={<Question9 />} />
            <Route path="question10" element={<Question10 />} />
            <Route path="question11" element={<Question11 />} />
            <Route path="question12" element={<Question12 />} />
            <Route path="question13" element={<Question13 />} />
            <Route
              path="question14-business"
              element={<Question14Business />}
            />
            <Route
              path="question14-consumer"
              element={<Question14Consumer />}
            />
            <Route
              path="question14-government"
              element={<Question14Government />}
            />
            <Route path="market/entity" element={<Entity />} />
            <Route
              path="market/consumer/question1"
              element={<ConsumerQuestion1 />}
            />
            <Route
              path="market/consumer/question2"
              element={<ConsumerQuestion2 />}
            />
            <Route
              path="market/consumer/question3"
              element={<ConsumerQuestion3 />}
            />
            <Route
              path="market/consumer/question4"
              element={<ConsumerQuestion4 />}
            />
            <Route
              path="market/business/question1"
              element={<BusinessQuestion1 />}
            />
            <Route
              path="market/business/question2"
              element={<BusinessQuestion2 />}
            />
            <Route
              path="market/business/question3"
              element={<BusinessQuestion3 />}
            />
            <Route
              path="market/business/question4"
              element={<BusinessQuestion4 />}
            />
            <Route
              path="market/government/question1"
              element={<GovernmentQuestion1 />}
            />
            <Route
              path="market/government/question2"
              element={<GovernmentQuestion2 />}
            />
            <Route
              path="market/government/question3"
              element={<GovernmentQuestion3 />}
            />
            <Route
              path="market/government/question4"
              element={<GovernmentQuestion4 />}
            />
            <Route path="culture1" element={<Culture1 />} />
            <Route path="culture2" element={<Culture2 />} />
            <Route path="culture3" element={<Culture3 />} />
            <Route path="finance1" element={<Finance1 />} />
            <Route path="finance2" element={<Finance2 />} />
            <Route path="saas/department" element={<Department />} />
            <Route path="saas/department2" element={<Department2Page />} />
            <Route path="saas/department2/sales" element={<Sales />} />
            <Route path="saas/department2/marketing" element={<Marketing />} />
            <Route path="saas/department2/product" element={<Product />} />
            <Route path="saas/process" element={<ProcessPage />} />
            <Route path="saas/department/sales" element={<Sales />} />
            <Route path="saas/department/marketing" element={<Marketing />} />
            <Route path="saas/department/product" element={<Product />} />
            <Route path="saas/department/block" element={<Block2 />} />
            <Route path="p1/productobject1" element={<Productobject1 />} />
            <Route path="p1/productobject2" element={<Productobject2 />} />
            <Route path="p1/productobject3" element={<Productobject3 />} />
            <Route path="p1/productobject4" element={<Productobject4 />} />
            <Route path="p1/productobject5" element={<Productobject5 />} />
            <Route path="p1/productobject6" element={<Productobject6 />} />
            <Route path="p1/productobject7" element={<Productobject7 />} />
          </Route>

          <Route path="finish" element={<Finish />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
