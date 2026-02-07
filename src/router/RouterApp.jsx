import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Nosotros } from "../views/Nosotros";
import { NotFound } from "../views/NotFound";
import { Register } from "../views/Register";
import { Login } from "../views/Login";
import { ProtectedRoute } from "../components/ProtectedRoute";


const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }