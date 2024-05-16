// import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential ?? "");
            console.log(decoded);
          }}
          onError={() => {
            console.log("login failed");
          }}
        />
      </header>
    </div>
  );
}

export default App;
