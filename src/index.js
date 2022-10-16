import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import Entrada from "./components/Entrada/Entrada";
//import Saida from "./components/Saida/Saida";
import { GlobalStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
