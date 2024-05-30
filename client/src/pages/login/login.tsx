import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import '../../App.css';

const LoginPage = () => {
  return (
    <div className="mars-container">
      <header className="App-header">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential ?? "");
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login failed");
          }}
        />
      </header>
    </div>
  );
}

export default LoginPage;
