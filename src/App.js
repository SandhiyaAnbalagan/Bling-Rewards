import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles.css";
import Home from "./pages/Home";
import Features from "./pages/Featurespage";
import Solutions from "./pages/Solutionspage";
import Service from "./pages/Servicespage";
import Industries from "./pages/Industriespage";
import FAQ from "./pages/FAQpage";
import CaseStudy from "./pages/CaseStudypage";
import DemoForm from "./components/DemoForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/service" element={<Service />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/demoform" element={<DemoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;