import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <Router>
      <div className="h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
