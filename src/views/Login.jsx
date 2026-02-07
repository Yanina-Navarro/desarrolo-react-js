import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";
import "../styles/views/Register.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const { login } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        try {
            await login (formData.email, formData.password)
            setSuccess("Usuario logueado.")
        } catch (error) {
            setError("Error al ingresar usuario.")
        }
    }

    return (
        <>
            <Header />
            <main className="register">
                <section className="register-card">
                    <h1>Ingresá a tu cuenta</h1>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <button type="submit">Ingresar</button>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export { Login }