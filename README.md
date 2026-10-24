# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TechArg — TP2 Proyecto React en equipo

Trabajo Práctico Grupal 2 · Desarrollo de Sistemas Web (Front End) · 2.º cuatrimestre 2026 · Tecnicatura Superior en Desarrollo de Software a Distancia, IFTS 29 · Equipo 32 – 2.º B

## Índice

- [Descripción del proyecto](#descripción-del-proyecto)
- [Deploy](#deploy)
- [Integrantes](#integrantes)
- [Uso de IA](#uso-de-ia)
- [Tecnologías](#tecnologías)
- [Cómo correr el proyecto](#cómo-correr-el-proyecto)
- [Capturas](#capturas)

## Descripción del proyecto

**TechArg** es una aplicación web hecha con React que presenta a nuestro equipo y organiza sus contenidos. Continúa el proyecto del TP1 y lo lleva a React, con una sidebar compartida que permanece visible mientras cambia el contenido de cada sección.

Contiene:

- **Portada:** presentación del equipo y acceso a los perfiles de cada integrante.
- **Perfiles:** una página por integrante con su formación, tecnologías, intereses, películas y música favoritas.
- **Películas (JSON local):** catálogo de 20 películas con búsqueda por título y filtro por género.
- **Películas (API pública):** listado obtenido de una API pública, con mensajes de carga y de error.
- **Árbol de renderizado:** jerarquía de componentes de la aplicación.
- **Bitácora:** registro del proceso de trabajo del equipo.

## Deploy

⚠️ COMPLETAR: pegar acá el enlace de Vercel del TP2 (por ejemplo `https://....vercel.app`).

## Integrantes

| Integrante | GitHub | Responsabilidad |
| :--- | :--- | :--- |
| Sergio Cesar Barrientos | [@SergioCesarBarrientos](https://github.com/SergioCesarBarrientos) | ⚠️ COMPLETAR |
| Mariana Sosa | [@MaruSosa](https://github.com/MaruSosa) | ⚠️ COMPLETAR |
| Carolina Silva Cotto | [@csilvacotto-2202](https://github.com/csilvacotto-2202) | Perfil propio (datos, foto, tarjeta de portada y entrada en la sidebar) y configuración de `vercel.json` para el deploy, y redacción del README. |
| Karina Sánchez | [@karinaluciasanz](https://github.com/karinaluciasanz) | ⚠️ COMPLETAR |
| Miguel Marcaida | [@Miguel-Marcaida](https://github.com/Miguel-Marcaida) | Perfil propio (tarjeta, ruta dinámica y datos), conexión de rutas de pages y ajustes de estilos en la portada y perfiles. |

## Uso de IA

Declaramos las aplicaciones y los modelos de IA que usamos. Distinguimos la **aplicación** desde la que trabajamos del **modelo** que respondió.

| Integrante | Aplicación | Modelo | En qué contenido o tarea |
| :--- | :--- | :--- | :--- |
| Carolina Silva Cotto | Claude (claude.ai) | Sonnet 5.5 | Se utilizó Claude como herramienta de asistencia durante el desarrollo del proyecto, para resolver dudas técnicas y colaborar en la documentación del proyecto. |
| Sergio Cesar Barrientos | ⚠️ COMPLETAR | ⚠️ COMPLETAR | ⚠️ COMPLETAR |
| Mariana Sosa | ⚠️ COMPLETAR | ⚠️ COMPLETAR | ⚠️ COMPLETAR |
| Karina Sánchez | ⚠️ COMPLETAR | ⚠️ COMPLETAR | ⚠️ COMPLETAR |
| Miguel Marcaida | DeepSeek (chat.deepseek.com) | DeepSeek-V3 | Asistencia en la resolución de conflictos de Git, creación y diseño de la tarjeta de perfil, conexión de rutas y ajustes de CSS responsivo. |

Todo lo generado con IA fue revisado, adaptado y probado por el equipo.

## Tecnologías

React 19, Vite, React Router, lucide-react y react-icons. Publicado en Vercel.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Después abrir el enlace que muestra la terminal (normalmente `http://localhost:5173`).

## Capturas

⚠️ COMPLETAR: agregar capturas de la portada, un perfil, el catálogo y la sección de la API. Guardarlas en una carpeta `capturas/` y enlazarlas así: `![Portada](capturas/portada.png)`.