import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config";
import './input.css'
import './output.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={config.googleOAuthClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
