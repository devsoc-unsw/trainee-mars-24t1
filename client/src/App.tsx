import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/home.tsx';
import LandingPage from "./pages/landing/landing.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
