import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import React, { useState } from 'react';
import '../styles/contacto.css';


const Contacto = () => {
    return (
        <>
            <Header />
            <div class="datos">
                <h2>Nuestras vias de Comunicación</h2>
                <p>¿Tenés promociones para ofrecer? Contactanos y publicá las ofertas de tu negocio en Club de Promos.</p>
                <p>Te contamos todas las formas de comunicarte con nosotros.</p>
                <ul>
                    <li>Teléfono: 3492-333333</li>
                    <li>Email: contacto@clubdepromos.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export { Contacto }