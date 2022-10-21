import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrada from "./components/pages/Entrada/Entrada";
import Saida from "./components/pages/Saida/Saida";
import Data from "./components/pages/Data/Data";
import DataDetail from "./components/pages/DataDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Entrada />} />
        <Route path="/saida" exact element={<Saida />} />
        <Route path="/data" exact element={<Data />} />
        <Route path="/data-plate" exact element={<DataDetail />} />
      </Routes>
    </Router>
  );
}
