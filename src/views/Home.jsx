import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/index.css';
import '../styles/footer.css'
import '../styles/header.css'
import { useState, useEffect } from "react";


const Home = () => {
return(
<>
<Header/>
<main>
    <section>
        <h2>Bienvenidos</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, a! Atque necessitatibus corrupti quidem! Iste in eum alias qui itaque porro a recusandae, suscipit sapiente, consectetur doloremque odit culpa mollitia?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aliquam voluptatem excepturi impedit provident libero labore vel odio quia magni iusto quis. Ipsum blanditiis sequi corrupti sint aperiam voluptates asperiores.</p>
    </section>
</main>
<Footer/>
</>
)
}

export {Home};