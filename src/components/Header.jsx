import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const { logout, user } = useAuth();

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
                            {
                                user && <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink > </li>
                            }
                            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink > </li>
                            {
                                !user && <>
                                    <li><NavLink to="/registro" className={({ isActive }) => isActive ? "activo" : undefined}>Registrate</NavLink > </li>
                                    <li><NavLink to="/login" className={({ isActive }) => isActive ? "activo" : undefined}>Ingresar</NavLink > </li>
                                </>
                            }
                        </ul>
                        {
                            user && <button onClick={logout}>Cerrar Sesión</button>
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}

export { Header };