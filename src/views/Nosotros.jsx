import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Descripción del Proyecto</h2>
        <h3>Sobre el proyecto</h3>
        <p>Este sitio web forma parte de un proyecto desarrollado con el objetivo de poner en práctica y consolidar conocimientos de React JS, abordando conceptos fundamentales del desarrollo frontend moderno como la componentización, el manejo de estado, la navegación entre vistas y la autenticación de usuarios.</p>
        <br />
        <p>La aplicación fue pensada como una plataforma simple pero escalable, que permite la gestión de promociones y el acceso a funcionalidades diferenciadas según el estado de sesión del usuario. A lo largo del desarrollo se priorizó una estructura clara, código reutilizable y buenas prácticas, buscando sentar una base sólida para futuras mejoras.</p>
        <h3>Tecnologías utilizadas</h3>
        <p>Para el desarrollo del proyecto se utilizaron las siguientes tecnologías y herramientas:</p>
        <ul>
          <li><b>React JS</b> para la construcción de la interfaz de usuario basada en componentes.</li>
          <li><b>Vite</b> como entorno de desarrollo, elegido por su rapidez y simplicidad.</li>
          <li><b>React Router DOM</b> para la navegación entre páginas y la implementación de rutas protegidas.</li>
          <li><b>Firebase Authentication</b> para el registro, inicio de sesión y cierre de sesión de usuarios.</li>
          <li><b>Firebase Firestore Database</b> como base de datos en la nube.</li>
          <li><b>Context</b> para el manejo de estado global relacionado con la autenticación.</li>
          <li><b>CSS</b> para el diseño visual y estilos personalizados.</li>
        </ul>
        <h3>Estructura del proyecto</h3>
        <p>El proyecto se organizó siguiendo una estructura modular, separando responsabilidades para facilitar el mantenimiento y la escalabilidad:</p>
        <ul>
          <li><b>components:</b> componentes reutilizables como Header, Footer y rutas protegidas.</li>
          <li><b>views:</b> vistas principales de la aplicación (Home, Login, Register, Contacto, Promociones, etc.).</li>
          <li><b>context:</b> manejo de estado global mediante AuthContext.</li>
          <li><b>firebase:</b> configuración e inicialización de Firebase.</li>
          <li><b>styles:</b> estilos específicos por vista o componente.</li>
        </ul>
        <p>Esta organización permite un desarrollo ordenado y una mejor lectura del código.</p>
<h3>Autenticación y manejo de sesión</h3>
<p>La autenticación se implementó utilizando Firebase Authentication junto con la Context API de React, a través de un AuthContext.</p>
<p>Este contexto centraliza:</p>
<ul>
  <li>El estado del usuario autenticado.</li>
  <li>Las funciones de login, registro y logout.</li>
  <li>La persistencia de la sesión mientras la aplicación está activa.</li>
</ul>
<p>De esta manera, cualquier componente de la aplicación puede acceder fácilmente al estado de autenticación mediante un hook personalizado (useAuth), evitando pasar props innecesarias y manteniendo un control claro sobre el acceso a rutas protegidas.</p>
<p>Además, se implementaron rutas privadas para restringir el acceso a ciertas secciones solo a usuarios autenticados.</p>
<h3>Desafíos y soluciones</h3>
<p>El principal desafio que se presento para el desarrollo del proyecto fue la autenticación de usuarios, fue complejo poder entender el flujo, pero logre resolverlo viendo la clase respectiva en varias oportunidades y realizando la busqueda por internet.</p>
      </main>
      <Footer />
    </>
  )
}

export { Nosotros }