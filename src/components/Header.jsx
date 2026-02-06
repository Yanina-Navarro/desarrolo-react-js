import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <div className="holder">
                    <img src="/logo_promos.png" width="100" alt="Club de Promos" />
                    <h1>Club de Promos</h1>
                </div>
                <nav>
                    <div>
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink > </li>
                            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink > </li>
                            <li><NavLink to="/promociones" className={({ isActive }) => isActive ? "activo" : undefined}>Promociones</NavLink > </li>
                            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink ></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export { Header };