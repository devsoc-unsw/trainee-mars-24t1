import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/home.tsx';
import LandingPage from "./pages/landing/landing.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "MARS";
  }, []);
  return (
    <UserProvider>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
