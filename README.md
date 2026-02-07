# 📌 Desarrollo en React JS

Bienvenido/a a **Desarrollo en React JS**, un proyecto web realizado con React que reúne funcionalidad básica de frontend, manejo de componentes, rutas y autenticación, que fueron realizados con el fin de aplicar los conocimientos adquiridos a lo largo del curso. Este proyecto es ideal para practicar y aprender sobre aplicaciones modernas en JavaScript.

---

## 🧠 📌 Descripción del Proyecto

Esta aplicación fue desarrollada como parte del trabajo final integrador en React.js. Posee múltiples vistas, componentes reutilizables, formularios para manejar datos, integración con Firebase para autenticación y un listado de promociones con CRUD básico. El objetivo principal es consolidar conceptos de React, gestión de estado con hooks, rutas protegidas y llamadas asincrónicas a servicios externos.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue construido usando las siguientes herramientas:

- ⚛️ **React.js** – Librería para crear la interfaz de usuario.
- 📦 **Vite** – Herramienta de build y servidor de desarrollo moderno.
- 🔧 **Firebase** – Para autenticación de usuarios y base de datos (Firestore).
- 💅 **CSS** – Estilos personalizados para diseño de interfaces.
- 📍 **React Router DOM** – Para la navegación entre páginas.

---

## 🚀 Cómo clonar y ejecutar el proyecto localmente

Sigue estos pasos para instalar y ejecutar la aplicación en tu máquina:

1. **Clonar el repositorio**

   git clone https://github.com/Yanina-Navarro/desarrolo-react-js.git

2. **Ingresar al directorio del proyecto**

cd desarrolo-react-js

3. **Instalar las dependencias**

npm install

4. **Configurar variables de entorno**

VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_APP_ID=tu_app_id

5. **Ejecutar el servidor de desarrollo**

npm run dev

6. **Abrir en el navegador**

Por lo general Vite mostrará la dirección http://localhost:xxxx.

----------------------------------------------------------------------------------

📁 Estructura del proyecto

La organización de carpetas y archivos permite un desarrollo claro y escalable:

desarrolo-react-js/
├── public/                 # Archivos estáticos
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables (Header, Footer, etc.)
│   ├── context/            # Contextos para estado global
│   ├── views/              # Vistas principales (Login, Register, Promociones, etc.)
│   ├── styles/             # Archivos CSS de cada vista/componente
│   ├── firebase/           # Configuración y funciones para Firebase
│   ├── App.jsx             # Componente raíz de la aplicación
│   └── main.jsx            # Entrada principal de React
├── .env                   # Variables de entorno (no versionadas)
├── package.json           # Dependencias y scripts del proyecto
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación general (este archivo)

📌 Detalles a considerar

Esta aplicación requiere un proyecto configurado en Firebase para autenticación y Firestore.

Asegurate de tener tus variables de entorno correctamente en .env antes de levantar la app.

Este proyecto está pensado para fines de aprendizaje y puede ser extendido con funcionalidades adicionales como roles de usuario, UI más avanzada o integración con APIs externas.

📄 Licencia

Este proyecto no tiene una licencia especificada. Usa y modifica el código libremente para tus prácticas o aprendizaje.

¡Gracias por pasar por mi repositorio! ✨

Saludos. 

Yanina Navarro.