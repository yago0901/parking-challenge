import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrada from "./components/pages/Entrada/Entrada";
import Saida from "./components/pages/Saida/Saida";
import Data from "./components/pages/data/Data";
import { useState } from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrada />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}
