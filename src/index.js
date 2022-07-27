import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProviderWrapper } from "./context/auth.context"; // <== IMPORT

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BasicExample from "./components/Button-Card";
import ButtonOficina from "./components/Button-Oficina";
import HomePage from "./pages/HomePage";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
      <AuthProviderWrapper>
        <App />
        {/* <HomePage /> */}
        {/* <BasicExample /> */}
        {/* <ButtonOficina /> */}
        
      
      </AuthProviderWrapper>
     
    </Router>
  </React.StrictMode>,
  
  document.getElementById("root")
);

reportWebVitals();