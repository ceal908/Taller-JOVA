import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Citas from "./pages/Citas";
import Default from "./pages/Default";
import Usuarios from "./pages/Usuarios";
import Inventario from "./pages/Inventario";
// ...otros imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Citas" element={<Citas />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Default" element={<Default />} />
        {/* ...otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

