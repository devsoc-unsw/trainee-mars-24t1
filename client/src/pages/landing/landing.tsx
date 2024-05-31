import { useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import "../../App.css";
import marsImage from "../../marsWhite.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const LandingPage = () => {
  const [showGoogleSignIn, setShowGoogleSignIn] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleGetStartedClick = () => {
    setShowGoogleSignIn(true);
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = jwtDecode(credentialResponse?.credential ?? "");
      console.log(decoded);

      const userData = {
        id: "",
        email: decoded.email,
        family_name: decoded.family_name,
        given_name: decoded.given_name,
        name: decoded.name,
        picture: decoded.picture,
      };

      setUser(userData);
      navigate("/home"); // Navigate to /home after successful login
    } catch (err) {
      console.error("Error decoding JWT:", err);
    }
  };

  const handleGoogleError = () => {
    console.log("Login failed");
  };

  return (
    <div className="mars-container">
      <div className="image-section">
        <img src={marsImage} className="App-logo" alt="mars" />
      </div>
      <div className="text-section">
        <h1>MARS</h1>
        <p>Mastering Automated Response Solutions</p>
        {showGoogleSignIn ? (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        ) : (
          <button
            onClick={handleGetStartedClick}
            className="get-started-button"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
