import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fsd from "./pages/Fsd";
import Ds from "./pages/Ds";
import Cs from "./pages/Cs";
import Career from "./pages/Career";

const data = [{}];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fsd" element={<Fsd />} />
        <Route path="ds" element={<Ds />} />
        <Route path="cs" element={<Cs />} />
        <Route path="careers" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
