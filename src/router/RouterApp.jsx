import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Nosotros } from "../views/Nosotros";
import { Promociones } from "../views/Promociones";
import { Contacto } from "../views/Contacto";
import { NotFound } from "../views/NotFound";



const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }