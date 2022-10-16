import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrada from "./components/Entrada/Entrada";
import Saida from "./components/Saida/Saida";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrada />} />
        <Route path="/saida" element={<Saida />} />
      </Routes>
    </Router>
  );
}
