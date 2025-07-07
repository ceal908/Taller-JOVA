import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Citas from "./pages/Citas";
import Default from "./pages/Default";
// ...otros imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Citas" element={<Citas />} />
        <Route path="/Default" element={<Default />} />
        <Route path="/Botonera" element={<Botonera />} />
        {/* ...otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

